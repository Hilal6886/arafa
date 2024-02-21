import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUserGraduate } from "react-icons/fa";
import { MdGrade, MdHearing } from "react-icons/md";
import { db } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";

const Admission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      // Add a timestamp to the form data
      formDataObject.timestamp = new Date();

      const admissionsCollection = collection(db, "admissions");
      await addDoc(admissionsCollection, formDataObject);
      toast.success("Thank you! For Submitting This Form Our Team will Contact You With 24 Hours.");

      // Reset the form fields
      event.target.reset();
    } catch (error) {
      console.error("Error submitting data to Firestore:", error);
      toast.error("Error submitting data to Firestore. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r mt-8 from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white mx-[1rem] p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-[#163269]">
          Admission Enquiry Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <div>
              
              <input
                type="text"
                id="parentName"
                name="parentName"
               placeholder=" 
              Enter Parent Name"
                className="w-full border-2 border-gray-400 rounded p-3 outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
             
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" Enter Email"
                className="w-full border-2 rounded border-gray-400 p-3 outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Phone No"
                className="w-full border-2  rounded border-gray-400 p-3 outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Enter student Name"
                className="w-full border-2  rounded border-gray-400 p-3 outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="text-sm  text-gray-400">
         
              Looking for Grade:
            </label>
            <select
              id="grade"
              name="grade"
              placeholder="Looking for Grade"
              className="w-full border-2 border-gray-400 rounded p-3 outline-none focus:border-gray-400"
            >
              <option value="Daycare">Daycare</option>
              <option value="PreNursery">Pre Nursery</option>
              <option value="FullTimeHifz">Full Time Hifz</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="hearAboutUs" className="text-sm  text-gray-400">
         
              Where did you hear about us:
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              className="w-full border-2 border-gray-400 rounded p-3 outline-none focus:border-gray-400"
            >
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Google">Google</option>
              <option value="Friends">Friends and Acquaintance</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <button
              type="submit"
              className={`w-full bg-green-500 text-white rounded-md py-3 hover:bg-green-600 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Admission;
