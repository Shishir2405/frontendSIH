'use client';

import { useState } from 'react';
import { Eye, EyeOff, UserCheck, Shield, Mail } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    role: 'Individual',
    showPassword: false 
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password, 
          role: formData.role 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Signup successful!');
        setFormData({ email: '', password: '', role: 'Individual', showPassword: false }); 
      } else {
        setError(true);
        setMessage(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError(true);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center">
            <Shield className="mr-3 text-white" size={32} />
            Document Verifier
          </h2>
          <p className="text-blue-100 mt-2">Secure and Intelligent Document Authentication</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center">
              <Mail className="mr-2 text-blue-500" size={20} />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 flex items-center">
              <Shield className="mr-2 text-blue-500" size={20} />
              Password
            </label>
            <div className="relative">
              <input
                type={formData.showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Create a strong password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
              >
                {formData.showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div>
            <label htmlFor="role" className="block text-gray-700 font-semibold mb-2 flex items-center">
              <UserCheck className="mr-2 text-blue-500" size={20} />
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="Individual">Individual</option>
              <option value="Issuer">Issuer</option>
              <option value="Verifier">Verifier</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 flex items-center justify-center disabled:opacity-50"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
        
        {message && (
          <div
            className={`p-4 text-center ${error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
