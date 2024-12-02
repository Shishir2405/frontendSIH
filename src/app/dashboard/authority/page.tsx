"use client"
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DocumentsPage = () => {
  // Simulated document verification data
  const [documents, setDocuments] = useState([
    {
      id: 1,
      userName: 'John Doe',
      aadhaarVerified: true,
      panCardVerified: false,
      passportVerified: true,
      drivingLicenseVerified: false,
      date: '2024-02-15'
    },
    {
      id: 2,
      userName: 'Jane Smith',
      aadhaarVerified: true,
      panCardVerified: true,
      passportVerified: false,
      drivingLicenseVerified: true,
      date: '2024-02-16'
    },
    {
      id: 3,
      userName: 'Mike Johnson',
      aadhaarVerified: false,
      panCardVerified: false,
      passportVerified: false,
      drivingLicenseVerified: false,
      date: '2024-02-17'
    }
  ]);

  // Prepare data for verification graph
  const verificationData = [
    { name: 'Aadhaar', verified: documents.filter(doc => doc.aadhaarVerified).length },
    { name: 'PAN Card', verified: documents.filter(doc => doc.panCardVerified).length },
    { name: 'Passport', verified: documents.filter(doc => doc.passportVerified).length },
    { name: 'Driving License', verified: documents.filter(doc => doc.drivingLicenseVerified).length }
  ];

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Document Verification Dashboard</h1>
      
      {/* Verification Graph */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Document Verification Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={verificationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="verified" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Documents Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">User Name</th>
              <th className="px-4 py-3 text-center">Aadhaar</th>
              <th className="px-4 py-3 text-center">PAN Card</th>
              <th className="px-4 py-3 text-center">Passport</th>
              <th className="px-4 py-3 text-center">Driving License</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {documents.length > 0 ? (
              documents.map((doc) => (
                <tr 
                  key={doc.id} 
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-3">{doc.userName}</td>
                  <td className="px-4 py-3 text-center">
                    {doc.aadhaarVerified ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {doc.panCardVerified ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {doc.passportVerified ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {doc.drivingLicenseVerified ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{doc.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No documents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsPage;
