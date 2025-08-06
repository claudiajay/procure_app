// src/pages/LandingPage.jsx
import React from "react";
import HeroDashboardImg from '../assets/dashboard-preview.jpg';
import SeeInActionImg from "../assets/see-in-action.jpg";


const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-700">ProcuraHub</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#">Features</a></li>
          <li><a href="#">Demo</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <button className="text-blue-700 font-semibold">Sign In</button>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Effortless Procurement for <br /> <span className="text-yellow-400">Modern Teams</span>
            </h1>
            <p className="text-lg mb-8">
              Transform your procurement workflow with intelligent request management,
              approval tracking, and budget analytics. Built for modern teams.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold">
                Get Started
              </button>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white font-semibold">
                See Demo
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div>
            <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={HeroDashboardImg}
                alt="dashboard preview"
                className="w-full h-auto object-cover"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-20 bg-white px-6 md:px-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Everything You Need for Smart Procurement
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Powerful features designed to simplify your procurement process and enhance team collaboration.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Approval Flow</h3>
      <p className="text-gray-600">Streamlined approval process with automated workflows and notifications.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Vendor Tracking</h3>
      <p className="text-gray-600">View vendor performance with performance insights and ratings.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Budget Analytics</h3>
      <p className="text-gray-600">Real-time spending insights with budget monitoring and reporting.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Management</h3>
      <p className="text-gray-600">Built-in compliance checks and tools for all requests.</p>
    </div>

    {/* Card 5 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Tracking</h3>
      <p className="text-gray-600">Track orders from request to delivery in real time.</p>
    </div>

    {/* Card 6 */}
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Insights</h3>
      <p className="text-gray-600">Use data to improve vendor relationships and cut costs.</p>
    </div>
  </div>
</section>

{/* SEE IN ACTION SECTION */}
<section className="py-20 bg-gray-100 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">See ProcuraHub in Action</h2>
    <p className="text-gray-600 mb-10">
      Get a glimpse of how our intuitive interface makes procurement management effortless.
    </p>
    <div className="flex justify-center">
      <img
        src={SeeInActionImg}
        alt="See in Action"
        className="rounded-xl shadow-lg w-full max-w-4xl"
      />
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="py-20 bg-white px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Flexible Pricing
    </h2>
    <p className="text-gray-600 mb-12">
      Choose the plan that fits your business best.
    </p>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Basic Plan */}
      <div className="border border-gray-200 rounded-xl p-8 shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic</h3>
        <p className="text-4xl font-bold text-gray-900 mb-4">$20</p>
        <p className="text-gray-600 mb-6">Perfect for small teams getting started.</p>
        <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
          <li>✔️ 1 Project</li>
          <li>✔️ Community Support</li>
          <li>✔️ Basic Features</li>
        </ul>
        <button className="bg-black text-white w-full py-2 rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Pro Plan */}
      <div className="border-2 border-blue-600 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all scale-105">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Pro</h3>
        <p className="text-4xl font-bold text-gray-900 mb-4">$50</p>
        <p className="text-gray-600 mb-6">For growing teams and full access.</p>
        <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
          <li>✔️ Unlimited Projects</li>
          <li>✔️ Priority Support</li>
          <li>✔️ All Features</li>
        </ul>
        <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:opacity-90 transition">
          Upgrade Now
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="border border-gray-200 rounded-xl p-8 shadow hover:shadow-lg transition-all">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise</h3>
        <p className="text-4xl font-bold text-gray-900 mb-4">Custom</p>
        <p className="text-gray-600 mb-6">For large organizations with custom needs.</p>
        <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
          <li>✔️ Everything in Pro</li>
          <li>✔️ Dedicated Manager</li>
          <li>✔️ Custom Integrations</li>
        </ul>
        <button className="bg-black text-white w-full py-2 rounded-lg hover:opacity-90 transition">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>
{/* Footer Section */}
<footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <h3 className="text-lg font-semibold mb-3">ProcuraHub</h3>
      <p className="text-gray-400 text-sm">
        Streamline your procurement process with ease.
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Company</h4>
      <ul className="text-gray-400 space-y-1 text-sm">
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Support</h4>
      <ul className="text-gray-400 space-y-1 text-sm">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Contact</h4>
      <ul className="text-gray-400 space-y-1 text-sm">
        <li>Email: support@procurepro.com</li>
        <li>Phone: +233 205-296-583</li>
        <li>Accra, Ghana.</li>
      </ul>
    </div>
  </div>

  <div className="text-center text-gray-500 text-sm mt-10">
    &copy; {new Date().getFullYear()} ProcuraHub. All rights reserved.
  </div>
</footer>
    </div>
  );
};

export default LandingPage;