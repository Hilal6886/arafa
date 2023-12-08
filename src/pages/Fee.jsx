// src/components/FeeStructure.js
import React from 'react';

const FeeStructure = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">School Fee Structure</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tuition Fee - Term Structure */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tuition Fee - Term Structure</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Term</td>
                  <td>At the time of Enrolment</td>
                </tr>
                <tr>
                  <td>2nd Term</td>
                  <td>10th August</td>
                </tr>
                <tr>
                  <td>3rd Term</td>
                  <td>10th October</td>
                </tr>
                <tr>
                  <td>4th Term</td>
                  <td>10th December</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Terms and Conditions */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Terms and Conditions</h3>
            <ul className="list-disc pl-6">
              <li>Any fee once paid is Non-Refundable.</li>
              <li>Any fee once paid is Non-Transferable to any other student.</li>
              <li>
                Any student leaving in between the term will have to pay the tuition fee in full for the applicable term.
              </li>
              <li>Post Dated Cheque Payments will not be accepted.</li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
            <ul className="list-disc pl-6">
              <li>Demand Drafts: Favouring “AL ARAFAH EDUCATIONAL TRUST”, payable at Bangalore.</li>
              <li>
                Online Transfers: Online transfers such as RTGS / IMPS / NEFT can be made to the following bank account.
                <br />
                Bank Name: HDFC Bank
                <br />
                A/c Name: Al Arafah Educational Trust
                <br />
                A/c Number: 50200016976145
                <br />
                Branch: Hennur Bande
                <br />
                IFS code: Hdfc0002815.
              </li>
              <li>
                HDFC Portal Payment through Credit Card and Debit Card, kindly use the below Link:
                <br />
                UPI Transfers: Kindly find the QR below, After UPI payment kindly share the screenshot to the school phone
                number with student name and grade
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p>If you have any queries, kindly contact us on: <a href="mailto:aisfinanceinfo@gmail.com" className="text-blue-500">aisfinanceinfo@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
