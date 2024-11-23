import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../component/Navbar'
import data from "../data.json"


interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}

const Achievment = () => {

    const [gambar, setGambar] = useState<Sertifikat[]>([]);


    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, [])

    return (
        <>
            <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black  to-gray-700" >
                <Navbar />
                <div className='mt-20 gap-20 pt-10 rounded-lg bg-gradient-to-br from-black  to-gray-600 mx-20 items-center justify-evenly shadow-gray-500 shadow-lg h-auto'>
                    <div className='w-full flex justify-center mt-10'>
                        <h1 className='text-center align-middle text-4xl bg-gray-800 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg hover:text-sky-400 '>My Certificate</h1>
                    </div>
                    <div className='flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12'>
                        {gambar.map((item, index) => (
                            <div key={index} className='bg-gradient-to-br from-black  to-blue-200 rounded-md text-white font-bold overflow-hidden shadow-4xl'>
                                <img src={item.img} alt="" className='h-60 w-60' />
                                <div className='text-center'>
                                    <h2>{item.title}</h2>

                                    <small className='text-xs  text-gray-700'>from</small>
                                    <p>{item.company}</p>
                                </div>
                                <hr />
                                <small className='text-end pl-2 text-gray-100 '>{item.date}</small>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Achievment
