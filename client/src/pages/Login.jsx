import React, { useState } from 'react';
import { Loader } from 'lucide-react'

// Import images from src/assets
import Logo from '../assets/logo1.png';
import LoginBg from '../assets/journal entries.png';
import RegisterBg from '../assets/premium photo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  })

    const [registerData, setRegisterData] = useState({
    FullName:"",
    password:"",
    ConfirmPassword:"",
    Workemail:"",
    employee:"",
    manager:"",
    ProcurementTeam:"",
    TermsandConditions:""
  })

 const handleRegister = () =>{
      setIsLoading(true)

    setTimeout(() => {
      console.log("Submitted", registerData)
      setIsLoading(false)
    }, 3000)

 }


  const handleLogin = () => {
    setIsLoading(true)

    setTimeout(() => {
      console.log("Submitted", loginData)
      setIsLoading(false)
    }, 3000)
    
  }

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
            className={`flex-1 px-4 py-2 cursor-pointer font-medium bg-blue-100 rounded-md transistion-all duration-200 ${
              isLogin
              ? '!bg-white text-black shadow' : '!bg-transparent'
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 px-4 py-2 font-medium cursor-pointer rounded-md transistion-all duration-200 ${
              !isLogin
              ? '!bg-white text-black shadow' : '!bg-transparent'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          {isLogin ? (
            <div className="space-y-4">
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData((prevState) => ({...prevState, email: e.target.value}))}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData((prevState) => ({...prevState, password: e.target.value}))}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
              />
              <div className="text-right text-sm text-blue-500 cursor-pointer">
                Forget Password?
              </div>
              <button
              onClick={handleLogin}
              className='cursor-pointer hover:!bg-black/80'
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
                {isLoading ? (
                  <div className='flex items-center gap-1 justify-center'>
                    <Loader size={20} className='animate-spin' />
                    <span>Please wait...</span>
                  </div>
                ) : (
                  'LOGIN'
                )}
                
              </button>
            </div>
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
                   value={loginData.email}
                onChange={(e) => setLoginData((prevState) => ({...prevState, email: e.target.value}))}
                  placeholder="Work email"
                  className="w-1/2 px-4 py-2 border rounded-md bg-gray-200 placeholder-gray-500"
                />
              </div>
              <input
                type="password"
                 value={loginData.password}
                onChange={(e) => setLoginData((prevState) => ({...prevState, email: e.target.value}))}
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
                     value={registerData.employee}
                     onChange={(e) => setRegisterData((prevState) => ({...prevState, employee: e.target.value}))}
                  </label>
                  <label>
                    <input type="radio" name="role" value="Manager" className="mr-1" />
                    Manager
                     value={registerData.manager}
                     onChange={(e) => setRegisterData((prevState) => ({...prevState, manager: e.target.value}))}
                  </label>
                  <label>
                    <input type="radio" name="role" value="Procurement" className="mr-1" />
                    Procurement Team
                    value={registerData.ProcurementTeam}
                    onChange={(e) => setRegisterData((prevState) => ({...prevState, ProcurementTeam: e.target.value}))}
                  </label>
                </div>
              </div>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                I agree to the{' '}
                value={registerData.TermsandConditions}
                onChange={(e) => setRegisterData((prevState) => ({...prevState, TermsandConditions: e.target.value}))}
                <span className="text-blue-500 ml-1 cursor-pointer">Terms and Conditions</span>
              </label>
              <button
              onClick={handleRegister}
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
      <div className="w-full flex max-md:hidden justify-center items-center p-10 relative">
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







