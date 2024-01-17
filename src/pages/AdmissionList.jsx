import React, { useState, useEffect } from "react";
import { getAllAdmissions } from "srevices/AdmissionService";

const AdmissionList = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const admissionsData = await getAllAdmissions();
      setAdmissions(admissionsData);
    };

    fetchData();
  }, []);

  const isNewAdmission = (timestamp) => {
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    return currentTime - timestamp < ONE_DAY_IN_MS;
  };

  return (
    <div className="mt-[6rem] px-4 py-8 max-w-screen-xl mx-auto overflow-x-auto">
      <div className="text-center mb-[4rem]">
        <h2 className="text-2xl hed md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6">
        Admission <span className="text-blue-500 hed">Enquiry</span> Data
        </h2>
       
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-indigo-900 text-white">
            <th className="px-6 py-3 uppercase">Date</th>
              <th className="px-6 py-3 uppercase">Parent Name</th>
              <th className="px-6 py-3 uppercase">Email</th>
              <th className="px-6 py-3 uppercase">Phone No</th>
              <th className="px-6 py-3 uppercase">Student Name</th>
              <th className="px-6 py-3 uppercase">Grade</th>
              <th className="px-6 py-3 uppercase">Hear About Us</th>
              <th className="px-6 py-3 uppercase">time</th>

            </tr>
          </thead>
          <tbody>
            {admissions.map((admission, index) => (
            <tr key={admission.id} className={isNewAdmission(admission.timestamp.toDate()) ? "bg-red-100" : index % 2 === 0 ? "bg-gray-100" : "bg-white" } >
                   <td className="p-4 text-center  text-gray-400">{admission?.timestamp ? new Date(admission.timestamp.toDate()).toLocaleDateString() : "N/A"}</td>
                <td className="p-4 text-center text-gray-400">{admission.parentName}</td>
                <td className="p-4 text-center  text-gray-400">{admission.email}</td>
                <td className="p-4 text-center  text-gray-400">{admission.phone}</td>
                <td className="p-4 text-center  text-gray-400">{admission.studentName}</td>
                <td className="p-4 text-center  text-gray-400" >{admission.grade}</td>
                <td className="p-4 text-center  text-gray-400">{admission.hearAboutUs}</td>
               
                <td className="p-4 text-center  text-gray-400">{admission?.timestamp ? new Date(admission.timestamp.toDate()).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }) : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionList;
