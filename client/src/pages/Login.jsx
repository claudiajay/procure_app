import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import Logo from '../assets/logo1.png';
import LoginBg from '../assets/journal entries.png';
import RegisterBg from '../assets/premium photo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    password: "",
    confirmPassword: "",
    role: "",
    termsAccepted: false
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Login submitted", loginData);
      setIsLoading(false);
    }, 3000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Register submitted", registerData);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="w-full flex p-4 justify-between min-h-screen font-sans">
      {/* Left side: Form */}
      <div className="w-full flex gap-3.5 flex-col justify-center items-center bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>

        {/* Tabs */}
        <div className="flex mb-6 gap-2 bg-blue-600/40 p-1 rounded-md w-full max-w-md mx-auto">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 px-4 py-2 cursor-pointer font-medium rounded-md transition-all duration-200 ${
              isLogin ? 'bg-white text-black shadow' : 'bg-transparent'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 px-4 py-2 cursor-pointer font-medium rounded-md transition-all duration-200 ${
              !isLogin ? 'bg-white text-black shadow' : 'bg-transparent'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          {isLogin ? (
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="text-right text-sm text-blue-500 cursor-pointer">
                Forget Password?
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-black/80"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader size={20} className="animate-spin" />
                    <span>Please wait...</span>
                  </div>
                ) : (
                  'LOGIN'
                )}
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={registerData.fullName}
                onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  value={registerData.company}
                  onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })}
                  className="w-1/2 px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={registerData.workEmail}
                  onChange={(e) => setRegisterData({ ...registerData, workEmail: e.target.value })}
                  className="w-1/2 px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
                />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />

              {/* Role selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Role</label>
                <div className="flex gap-4">
                  {['Employee', 'Manager', 'Procurement Team'].map((role) => (
                    <label key={role} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={registerData.role === role}
                        onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={registerData.termsAccepted}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, termsAccepted: e.target.checked })
                  }
                />
                I agree to the
                <span className="text-blue-500 ml-1 cursor-pointer">Terms and Conditions</span>
              </label>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-black/80"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader size={20} className="animate-spin" />
                    <span>Please wait...</span>
                  </div>
                ) : (
                  'REGISTER'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right side: Banner */}
      <div className="w-full max-md:hidden flex justify-center items-center p-10 relative">
        <img
          src={isLogin ? LoginBg : RegisterBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-sm" />
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
