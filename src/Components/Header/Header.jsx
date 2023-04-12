import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <div className="">

            <div className="md:hidden">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink
                                    to={'/'}
                                    className={({ isActive }) => isActive ? "text-blue-600/100" : ''}
                                >
                                    Home
                                </NavLink></li>
                                <li><NavLink
                                    to={'Statistics'}
                                    className={({ isActive }) => isActive ? "text-blue-600/100" : ''}
                                >
                                    Statistics
                                </NavLink></li>
                                <li><NavLink
                                    to={'AppliedJobs'}
                                    className={({ isActive }) => isActive ? "text-blue-600/100" : ""}
                                >
                                    Applied Jobs
                                </NavLink></li>
                                <li><NavLink
                                    to={'Blog'}
                                    className={({ isActive }) => isActive ? "text-blue-600/100" : ""}
                                >
                                    Blog
                                </NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <Link className="btn btn-ghost normal-case text-xl">Start Your Job Feature</Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-around items-center mt-5 ">

                <div className="">
                    <h1 className='text-2xl font-semibold'>
                        Start Your Job Feature
                    </h1>
                </div>
                <div className={`flex gap-4`}>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ? "text-blue-600/100" : ''}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={'Statistics'}
                        className={({ isActive }) => isActive ? "text-blue-600/100" : ''}
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to={'AppliedJobs'}
                        className={({ isActive }) => isActive ? "text-blue-600/100" : ""}
                    >
                        Applied Jobs
                    </NavLink>
                    <NavLink
                        to={'Blog'}
                        className={({ isActive }) => isActive ? "text-blue-600/100" : ""}
                    >
                        Blog
                    </NavLink>
                </div>
                <div className="">
                    <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500">Star Applying</button>
                </div>
            </div>


        </div >
    );
};

export default Header;