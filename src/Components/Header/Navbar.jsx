import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links=<>
       <NavLink to='/' className={({isActive})=>
           isActive ? 'mr-5 font-semibold text-[#6ab2bd] border-b-2 border-[#6ab2bd]' 
                         : 'mr-5 font-semibold'
       }>Home</NavLink>
        <NavLink 
            to='/readlist' 
            className={({ isActive }) => 
                isActive ? 'mr-5 font-semibold text-[#6ab2bd] border-b-2 border-[#6ab2bd]' 
                         : 'mr-5 font-semibold'
            }>
            Listed Books
        </NavLink>

        <NavLink 
            to='/pages' 
            className={({ isActive }) => 
                isActive ? 'font-semibold text-[#6ab2bd] border-b-2 border-[#6ab2bd]' 
                         : 'font-semibold'
            }>
            Pages To Read
        </NavLink>
    </>
       
    
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <h1 className='text-2xl font-bold '>BooKs Vibe</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
    <a className="btn bg-[#6ab2bd] text-white">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;