import React from 'react';

const Card = () => {
  return (
    <div>
      {/* Sign In Cards Section */}
      <div className="relative isolate px-6 pt-24 pb-12 lg:px-8 flex items-center justify-center bg-gray-50">
        {/* Background Blur Element */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-pulse">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {[
            {
              title: "Individual Sign",
              description: "Access your personal account and manage your profile.",
              details: [
                "Upload",
                "Verify",
                "Update",
                "Access Drive documents",
                "View and download",
                "Generate ID (TrueDocId)",
                "Sharing of #ID",
              ],
              buttonText: "Sign In as Individual",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              ),
            },
            {
              title: "Authority Sign",
              description: "Securely access administrative and organizational accounts.",
              details: [
                "View & Download",
                "Scan",
                "Accessing #ID of user",
                "Verify with Database or Institute",
                "Institute Request",
                "TrueDocID access of user",
              ],
              buttonText: "Sign In as Authority",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              ),
            },
            {
              title: "Institute Sign",
              description: "Manage and oversee organizational operations effectively.",
              details: [
                "Upload",
                "Search User ID",
                "View and download",
                "Verify (change name)",
                "Admin",
              ],
              buttonText: "Sign In as Institute",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto mb-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              ),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between items-center"
            >
              <div className="p-8 text-center">
                {card.icon}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <ul className="list-disc text-gray-600 text-left px-6 mb-6">
                  {card.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center w-3/4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 px-3 py-2 text-xs font-medium text-white shadow-sm hover:from-indigo-400 hover:to-indigo-600 transition-all duration-200 mb-4"
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
