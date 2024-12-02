import React from 'react';

const Card = () => {
  return (
    <div>
      {/* Sign In Cards Section */}
      <div className="relative isolate px-6 pt-24 pb-12 lg:px-8 flex items-center justify-center">
        {/* Background Blur Element */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Individual Sign In",
              description: "Access your personal account and manage your profile.",
              buttonText: "Sign In as Individual",
            },
            {
              title: "Authority Sign In",
              description: "Securely access administrative and organizational accounts.",
              buttonText: "Sign In as Authority",
            },
            {
              title: "Institute Sign",
              description: "Manage and oversee organizational operations effectively.",
              buttonText: "Sign In as Institute",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col justify-between items-center"
            >
              <div className="p-8 text-center">
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-6">{card.description}</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center w-3/4 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors mb-4"
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
