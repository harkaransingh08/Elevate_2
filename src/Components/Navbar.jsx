import React, { Children } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import logo from '../Images/logo.png';

export default function Navbar() {

    const Items = [
        { icon: <IoHome className='text-3xl font-extralight underline-none' />, path: '/' },
        { name: 'New & Hot', path: '/new-and-hot' },
        { name: 'Web Series', path: '/web-series' },
        { name: 'Comedy', path: '/comedy' },
        { name: 'Horror', path: '/horror' },
        {
            name: 'Hollywood',
            path: '/hollywood',
            hot: true,
            children: [
                { name: "Action", path: "/hollywood/action" },
                { name: "Romantic", path: "/hollywood/romantic" },
                { name: "Sci-Fi", path: "/hollywood/sci-fi" },
                { name: "Thriller", path: "/hollywood/thriller" },
            ]
        },


        { name: 'Bollywood', path: '/bollywood' },
    ];
    const Icons = [
        { icon: <CiSearch className='text-2xl' />, path: '/search' },
        { icon: <FaRegUserCircle className='text-2xl font-extralight' />, path: '/profile' },
        { icon: <IoSettings className='text-2xl font-extralight' />, path: '/settings' },
    ];



    return (
        <div>
            <div className='bg-white/10 h-20  text-gray-300 rounded-3xl  flex items-center cursor-pointer justify-center'>
                <div>
                    <nav className='flex items-center gap-20 justify-evenly '>
                        <ul className='w-40 ml-8'>
                            <li>
                                <img src={logo} alt="logo" />
                            </li>
                        </ul>
                        <ul className='flex gap-5 font-light text-xl'>
                            {Items.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group hover:text-yellow-700 transition-all duration-300 hover:scale-110"
                                >
                                    <a href={item.path} className="flex items-center gap-1">
                                        {item.icon}
                                        {item.name}
                                        {item.hot && <FaFire className="text-red-500 text-xl animate-bounce" />}
                                    </a>
                                    <hr />

                                    {/* DROPDOWN START */}
                                    {item.children && (
                                        <ul className="absolute top-full left-0 bg-black/70 backdrop-blur-sm text-gray-200 mt-2 p-3 rounded-md shadow-lg
          opacity-0 scale-95 pointer-events-none transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
        ">
                                            {item.children.map((child, cIndex) => (
                                                <li key={cIndex} className="py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200">
                                                    <a href={child.path}>{child.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {/* DROPDOWN END */}
                                </li>
                            ))}
                        </ul>

                        <ul className='flex justify-evenly gap-5 text-xl mr-15 '>
                            {
                                Icons.map((icon, index) => (
                                    <li key={index} className='hover:text-pink-500 duration-300 hover:scale-120'>
                                        <a href={icon.path}>{icon.icon}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <ul className='flex justify-center text-5xl hover:text-yellow-600 transition-all mt-15 duration-200 text-gray-500 hover:scale-110 hover:underline'>
                <li>
                    The Top Movies of the Year
                </li>
            </ul>
        </div>
    )
}
