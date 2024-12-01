import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Secure. Instant. Verified.</h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionize document verification with AI and blockchain technology. Instant, secure, and tamper-proof document authentication.
          </p>
          <div className="flex space-x-4">
            <Link href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg">
              Get Started
            </Link>
            <Link href="/demo" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition text-lg">
              Watch Demo
            </Link>
          </div>
        </div>
        <div>
          <img src="/hero-image.jpg" alt="Document Verification Illustration" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </header>
  );
}
