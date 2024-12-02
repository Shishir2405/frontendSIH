"use client";
import React, { useState } from "react";

const Verifier = () => {
  // Explicitly define the type of file as File | null
  const [file, setFile] = useState<File | null>(null);
  const [verificationData, setVerificationData] = useState({
    documentNumber: "",
    name: "",
    verificationAccuracy: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 dark:text-white">
        Document Verification
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side: File Upload */}
        <div className="border-r-2 border-gray-200 dark:border-gray-700 pr-8">
          <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
            <input
              type="file"
              className="hidden"
              id="fileInput"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
            />
            <svg
              className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Drag & Drop your document document or{" "}
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-blue-500 hover:underline"
              >
                browse
              </label>{" "}
              to upload.
            </p>
            {file && (
              <div className="mt-4 text-sm text-green-600">
                {file.name} uploaded
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Verification Details */}
        <div className="pl-8">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="documentNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Document Number
              </label>
              <input
                type="text"
                id="documentNumber"
                value={verificationData.documentNumber}
                disabled
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={verificationData.name}
                disabled
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>

            {verificationData.verificationAccuracy !== null && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Verification Accuracy:
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-2">
                  <div
                    className={`h-4 rounded-full ${
                      verificationData.verificationAccuracy >= 90
                        ? "bg-green-500"
                        : verificationData.verificationAccuracy >= 80
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${verificationData.verificationAccuracy}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-center">
                  {verificationData.verificationAccuracy}% Verified
                </p>
              </div>
            )}

            <button
              disabled={!file}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifier;
