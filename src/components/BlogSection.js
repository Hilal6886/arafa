import React from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import { FaTrash, FaEdit } from "react-icons/fa";

const BlogSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  handleDelete,
}) => {
  const userData = localStorage.getItem("USER");
  const currentUser = userData ? JSON.parse(userData) : null;
  const isAdmin = currentUser?.isAdmin || false;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden  ">
      <div className="relative h-58 overflow-hidden">
        <img className="w-full h-full object-cover" src={imgUrl} alt={title} />
      </div>
      <div className="p-6">
        <h6 className="text-sm text-indigo-500 font-semibold tracking-wide uppercase">
          {category}
        </h6>
        <h2 className="mt-2 text-xl font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center mt-2">
          <p className="text-sm text-gray-700">
            {author} - {timestamp.toDate().toDateString()}
          </p>
        </div>
        <p className="mt-3 text-gray-600">{excerpt(description, 120)}</p>
        <Link to={`/arfa/detail/${id}`}>
          <button className="mt-4 bg-indigo-500 text-white px-4 py-2  focus:outline-none focus:shadow-outline-indigo">
            Read More
          </button>
        </Link>
        {isAdmin && (
          <div className="mt-4 flex justify-end">
            <FaTrash
              className="mr-4 cursor-pointer"
              onClick={() => handleDelete(id)}
            />
            <Link to={`/arfa/update/${id}`}>
              <FaEdit className="mr-4 cursor-pointer" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
