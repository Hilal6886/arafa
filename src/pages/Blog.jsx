import React, { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDocs, limit, onSnapshot, query, orderBy, where, startAfter } from "firebase/firestore";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { isEmpty, isNull } from "lodash";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import FeatureBlogs from "../components/FeatureBlogs";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blog = ({ user, active }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [lastVisible, setLastVisible] = useState(null);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [hide, setHide] = useState(false);
  const queryString = useQuery();
  const searchQuery = queryString.get("searchQuery");
  const location = useLocation();

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(() => {
    getTrendingBlogs();
    setSearch("");
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setTotalBlogs(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, [active]);

  useEffect(() => {
    getBlogs();
    setHide(false);
  }, [active]);

  const getBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const firstFour = query(blogRef, orderBy("title"), limit(4));
    const docSnapshot = await getDocs(firstFour);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
  };

  const updateState = (docSnapshot) => {
    const isCollectionEmpty = docSnapshot.size === 0;
    if (!isCollectionEmpty) {
      const blogsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs((blogs) => [...blogs, ...blogsData]);
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    } else {
      toast.info("No more blog to display");
      setHide(true);
    }
  };

  const fetchMore = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const nextFour = query(
      blogRef,
      orderBy("title"),
      limit(4),
      startAfter(lastVisible)
    );
    const docSnapshot = await getDocs(nextFour);
    updateState(docSnapshot);
    setLoading(false);
  };

  const searchBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const searchTitleQuery = query(blogRef, where("title", "==", searchQuery));
    const searchTagQuery = query(
      blogRef,
      where("tags", "array-contains", searchQuery)
    );
    const titleSnapshot = await getDocs(searchTitleQuery);
    const tagSnapshot = await getDocs(searchTagQuery);

    let searchTitleBlogs = [];
    let searchTagBlogs = [];
    titleSnapshot.forEach((doc) => {
      searchTitleBlogs.push({ id: doc.id, ...doc.data() });
    });
    tagSnapshot.forEach((doc) => {
      searchTagBlogs.push({ id: doc.id, ...doc.data() });
    });
    const combinedSearchBlogs = searchTitleBlogs.concat(searchTagBlogs);
    setBlogs(combinedSearchBlogs);
    setHide(true);
  };

  useEffect(() => {
    if (!isNull(searchQuery)) {
      searchBlogs();
    }
  }, [searchQuery]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (isEmpty(value)) {
      getBlogs();
      setHide(false);
    }
    setSearch(value);
  };

  const counts = totalBlogs.reduce((prevValue, currentValue) => {
    let name = currentValue.category;
    if (!prevValue.hasOwnProperty(name)) {
      prevValue[name] = 0;
    }
    prevValue[name]++;
    return prevValue;
  }, {});

  const categoryCount = Object.keys(counts).map((k) => {
    return {
      category: k,
      count: counts[k],
    };
  });

  return (
    <div className="p-9 mx-auto mt-[134px] grid grid-cols-1 gap-14 p-8 lg:grid-cols-2">

      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
          {blogs?.map((blog) => (
            <BlogSection
              key={blog.id}
              user={user}
              handleDelete={handleDelete}
              {...blog}
              className="bg-white p-4 rounded-md shadow-md" // Tailwind classes for smaller cards
            />
          ))}
        </div>

        {!hide && (
          <button
            className="focus:shadow-outline-blue mt-8 rounded-full bg-blue-500 py-2 px-4 text-white hover:bg-blue-700 focus:outline-none"
            onClick={fetchMore}
          >
            Load More
          </button>
        )}
      </div>

      <div className="mt-12 flex flex-col space-y-12 lg:mt-0">
        <div>
          <div className="mb-8 text-2xl font-semibold">Most Popular</div>
          <FeatureBlogs blogs={trendBlogs} />
        </div>

        <div>
          <div className="mb-8 text-2xl font-semibold">Categories</div>
          <Category catgBlogsCount={categoryCount} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
