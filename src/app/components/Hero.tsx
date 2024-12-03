import Link from 'next/link';

export default function Hero() {
  return (
    <header
      id="home"
      className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Secure. Instant. Verified.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revolutionize document verification with{" "}
            <span className="font-semibold text-blue-600">
              AI and blockchain technology
            </span>
            . Instant, secure, and tamper-proof document authentication.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition transform duration-200 text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition transform duration-200 text-lg"
            >
              Watch Demo
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/hero-image.jpg"
            alt="Document Verification Illustration"
            className="mt-20 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full blur-lg opacity-75"></div>
        </div>
      </div>
    </header>
  );
}
