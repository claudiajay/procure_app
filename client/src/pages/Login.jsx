import React, { useState } from 'react';

// Import images from src/assets
import Logo from '../assets/logo.png';
import LoginBg from '../assets/journal entries.png';
import RegisterBg from '../assets/premium photo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left side: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>

        {/* Tabs */}
        <div className="flex w-full max-w-md border rounded-md overflow-hidden mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 text-sm font-medium ${
              isLogin ? 'bg-blue-200 text-black' : 'bg-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 text-sm font-medium ${
              !isLogin ? 'bg-blue-200 text-black' : 'bg-white'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          {isLogin ? (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="text-right text-sm text-blue-500 cursor-pointer">
                Forget Password?
              </div>
              <button
                type="submit"
                  style={{
                  width: '100%',
                  backgroundColor: 'black',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                }}
              >
                LOGIN
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-1/2 px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-1/2 px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
                />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium">Role</label>
                <div className="flex gap-4">
                  <label>
                    <input type="radio" name="role" value="Employee" className="mr-1" />
                    Employee
                  </label>
                  <label>
                    <input type="radio" name="role" value="Manager" className="mr-1" />
                    Manager
                  </label>
                  <label>
                    <input type="radio" name="role" value="Procurement" className="mr-1" />
                    Procurement Team
                  </label>
                </div>
              </div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                I agree to the{' '}
                <span className="text-blue-500 ml-1 cursor-pointer">Terms and Conditions</span>
              </label>
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                }}
              >
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right side: Banner */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-10 relative">
        <img
          src={isLogin ? LoginBg : RegisterBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-bl-[50px]"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-bl-[50px]" />
        <div className="z-20 text-center text-white">
          <img src={Logo} alt="Logo" className="w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">
            {isLogin ? 'Procure Hub' : 'Register Account'}
          </h2>
          <p className="mt-2 text-sm px-4">
            {isLogin
              ? 'Welcome to your Procure hub management system'
              : 'Join ProcuraHub and streamline your procurement process'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;







