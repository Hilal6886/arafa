import React, { useState, useEffect } from "react";


import { db, storage } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  description: "",
  comments: [],
  likes: []
};

const categoryOption = [
    'Admissions',
    'Student Life',
    'Academic Achievements',
    'Faculty Spotlights',
    'Campus Events',
    'Extracurricular Activities',
    'School News',
    'Parental Involvement',
    'Educational Technology',
    'Alumni Stories',
    'School Policies',
    'Educational Resources',
    'School Sports',
    'Art and Creativity',
    'Community Outreach',
    'Health and Wellness',
    'Student Achievements',
    'Educational Events',
    'Classroom Innovations',
    'School Celebrations',
    'Teacher Spotlight',
    'Exams and Assessments',
    'Career Guidance',
    'School Programs',
    'Cultural Events',
    'Community Engagement',
    'School Projects',
    'Parent-Teacher Collaboration',
    'STEM Education',
    'Literacy Initiatives',
    'Environmental Awareness',
    'Learning Resources',
    'School Clubs and Societies',
    'Sports and Athletics',
    'Student Leadership',
    'Global Education',
    'Diversity and Inclusion',
    'Arts and Music Programs',
    'Field Trips and Excursions',
    'School Policies and Procedures',
    'Educational Technologies',
    'School Safety',
    'Volunteer Opportunities',
    'Health and Nutrition Programs',
    'Partnerships and Collaborations',
  ];
  

const  Addblog = ({ user }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, tags, category, trending, description } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };
console.log("FILE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",file)
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleTrending = (e) => {
    setForm({ ...form, trending: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && tags && title && description && trending) {
      if (!id) {
        try {
          await addDoc(collection(db, "blogs"), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog created successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "blogs", id), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }

    navigate("/");
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6 mt-[87px]">
        <div className="text-2xl font-semibold mb-4">
          {id ? "Update Blog" : "Create Blog"}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Title"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
        
          <div>
            <p className="mb-2">Is it a trending blog?</p>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                value="yes"
                name="radioOption"
                checked={trending === "yes"}
                onChange={handleTrending}
              />
              <label htmlFor="radioOption" className="mr-4">
                Yes
              </label>
              <input
                type="radio"
                value="no"
                name="radioOption"
                checked={trending === "no"}
                onChange={handleTrending}
              />
              <label htmlFor="radioOption">No</label>
            </div>
          </div>
          <div>
            <select
              value={category}
              onChange={onCategoryChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option>Please select category</option>
              {categoryOption.map((option, index) => (
                <option value={option || ""} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="py-3">
            <textarea
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Description"
              value={description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="file"
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              type="submit"
              disabled={progress !== null && progress < 100}
            >
              {id ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};                                                       

export default Addblog;
