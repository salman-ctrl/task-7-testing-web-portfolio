import { useState, useEffect } from "react";
import data from "../data.json"
import { useNavigate } from 'react-router-dom'
import { Send, Linkedin, Github, Mail, ArrowRight, ShieldQuestion, UserRound, ShieldEllipsis } from 'lucide-react';
import Showcase from "./showCase";


interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}

const Achievment = () => {
    const [gambar, setGambar] = useState<Sertifikat[]>([]);
    const navigate = useNavigate();


    // useEffect untuk section Sertifikat
    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, [])

    const handleAchievment = () => {
        navigate("/achievment");
    }


    return (
        <>
            <section>
                <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black  to-gray-700" >
                    <div className='card-container mt-16 gap-20 pt-10 h-auto'>
                        <div className='w-full flex justify-center mt-10'>
                            <h1 className='text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg hover:text-sky-400  transition duration-1000 hover:scale-105'>My Certificate</h1>
                        </div>
                        <div className='flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12'>
                            {gambar.map((item, index) => (
                                <div key={index} className='bg-gradient-to-br from-black  to-gray-400 rounded-md text-white font-bold overflow-hidden transition duration-1000 cursor-pointer hover:scale-105 shadow-gray-800 shadow-md'>
                                    <img src={item.img} alt="" className='h-72 w-96' />
                                    <div className='text-center h-20 flex items-center justify-center'>
                                        <div>
                                            <h2>{item.title}</h2>

                                            <small className='text-xs  text-gray-300'>from</small>
                                            <p>{item.company}</p>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className='bg-gray-700 py-2'>
                                        <small className='text-end pl-2 text-gray-100 '>{item.date}</small>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='justify-center mt-12 flex'>
                        <button onClick={handleAchievment} className='z-20 text-center flex items-center text-xl bg-black gap-3 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-8 pb-2 pt-1 w-100 rounded-lg  transition duration-1000 hover:scale-105'> See More<ArrowRight className='mt-2' /> </button >
                    </div>
                    <hr className='mt-10' />
                    <div className='mt-20 '>
                    </div>

                    <Showcase />

                </div>

            </section>
        </>
    )
}

export default Achievment;