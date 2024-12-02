'use client'
import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
} from 'lucide-react';

// Define a union type for status
type StatusType = 'verified' | 'pending' | 'rejected' | string;

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
  documentStatus: StatusType;
  verificationProgress: number;
}

interface Document {
  id: number;
  userName: string;
  documentType: string;
  status: StatusType;
  uploadDate: string;
  documentNumber: string;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      registrationDate: '2024-02-15',
      documentStatus: 'pending',
      verificationProgress: 60
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+91 8765432109',
      registrationDate: '2024-02-16',
      documentStatus: 'verified',
      verificationProgress: 100
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+91 7654321098',
      registrationDate: '2024-02-17',
      documentStatus: 'rejected',
      verificationProgress: 30
    }
  ]);

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      userName: 'John Doe',
      documentType: 'Aadhaar Card',
      status: 'pending',
      uploadDate: '2024-02-15',
      documentNumber: 'XXXX XXXX 1234'
    },
    {
      id: 2,
      userName: 'Jane Smith',
      documentType: 'PAN Card',
      status: 'verified',
      uploadDate: '2024-02-16',
      documentNumber: 'ABCDE1234F'
    },
    {
      id: 3,
      userName: 'Mike Johnson',
      documentType: 'Passport',
      status: 'rejected',
      uploadDate: '2024-02-17',
      documentNumber: 'L1234567'
    }
  ]);

  const getStatusColor = (status: StatusType): string => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center">
        <Users className="mr-3" /> Admin Dashboard
      </h1>

      {/* Users Section */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2" /> User List
          </h2>
          <span className="text-sm text-gray-500">
            Total Users: {users.length}
          </span>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-center">Registration Date</th>
              <th className="p-3 text-center">Document Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3 text-center">{user.registrationDate}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.documentStatus)}`}>
                    {user.documentStatus}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    View
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Documents Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center">
            <FileText className="mr-2" /> Document Verification
          </h2>
          <span className="text-sm text-gray-500">
            Total Documents: {documents.length}
          </span>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Document Type</th>
              <th className="p-3 text-left">Document Number</th>
              <th className="p-3 text-center">Upload Date</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr 
                key={doc.id} 
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{doc.userName}</td>
                <td className="p-3">{doc.documentType}</td>
                <td className="p-3">{doc.documentNumber}</td>
                <td className="p-3 text-center">{doc.uploadDate}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    View
                  </button>
                  {doc.status === 'pending' && (
                    <>
                      <button className="text-green-500 hover:text-green-700 mr-2">
                        Approve
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
