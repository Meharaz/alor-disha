import React from 'react';
import logo from '../../assets/logo.svg';

const navItems = (
  <>
    <li><a href='http://localhost:5173/'>হোম</a></li>
    <li><a href='http://localhost:5173/about'>আমাদের সম্পর্কে</a></li>
    <li><a href='http://localhost:5173/works'>কার্যক্রমসমূহ</a></li>
    <li><a href='http://localhost:5173/gallary' >গ্যালারি</a></li>
    <li><a href='http://localhost:5173/join-us'>আমাদের সাথে যুক্ত হোন</a></li>
    <li><a href='http://localhost:5173/blogs'>ব্লগ</a></li>
    <li><a href='http://localhost:5173/contact'>যোগাযোগ</a></li>
  </>
);

const NavBar = () => {
  return (
    <div className="rounded-2xl mx-12">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Mobile Menu Toggle (hamburger icon) */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo (always visible) */}
          <a className="normal-case text-xl">
            <img src={logo} alt="Logo" className="w-auto h-16 px-6" />
          </a>
        </div>

        {/* Menu items on large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end px-6">
          <a href='http://localhost:5173/join-us' className="btn btn-success">দান করুন</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
