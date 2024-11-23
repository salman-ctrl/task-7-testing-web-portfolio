import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import logo from "../../public/assets/logo.png"



const Navbar = () => {
    const navigate = useNavigate();

    const handleHire = () => {
        navigate('/hire')
    }
    const handleHome = () => {
        navigate("/")
    }
    const handleAchievment = () => {
        navigate("/achievment")
    }

    return (
        <>
            <nav className="w-full h-20 flex flex-row pt-20 px-16 justify-between items-center text-white text-2xl z-50">
                <div className="flex items-center space-x-12 justify-evenly w-[70vh] h-20">
                    <div>
                        <img src={logo} alt="logo" onClick={handleHome} className="logo h-20 w-20 cursor-pointer " />
                    </div>

                    <div className='border-2 border-white px-16 py-3 rounded-[50px]' >
                        <ul className="flex space-x-16 font-medium">
                            <li>
                                <a onClick={handleAchievment} className="hover:text-blue-500 transition duration-200 cursor-pointer">Achievment</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition duration-200">Showcase</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <button onClick={handleHire} className="h-14 px-8 bg-white shadow-md shadow-sky-200 text-black transition duration-500 rounded-lg hover:bg-gray-700 shadow-gray-500 shadow-md hover:scale-105 ">
                    Hire Me!
                </button>

            </nav >

        </>
    )
}

export default Navbar
