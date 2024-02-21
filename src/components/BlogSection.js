import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const BlogSection = ({ id, title, description, category, imgUrl, userId, author, timestamp, handleDelete }) => {
  const userData = localStorage.getItem("USER");
  let currentUser = null;
  let isAdmin = false;
  if (userData) {
    currentUser = JSON.parse(userData);
    isAdmin = currentUser.isAdmin;
  }

  return (
    <div className="pb-4">
      <div className="flex flex-wrap gap-[px] ">
        <div className="w-full md:w-5/12">
          <div className="hover-blogs-img">
            <div className="blogs-img">
              <img src={imgUrl} alt={title} className="w-full" />
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <Link to={`/arfa/detail/${id}`}>
            <button className="btn btn-read">Read More</button>
          </Link>
          {isAdmin && (
            <div className="float-right">
              <i className="ri-delete-bin-line" style={{ margin: "15px", cursor: "pointer", color: "red" }} size="2x" onClick={() => handleDelete(id)}></i>
              <Link to={`/update/${id}`}>
                <i className="ri-edit-box-line" style={{ cursor: "pointer" }} size="2x"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
