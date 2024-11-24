import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../component/Navbar';
import data from "../data.json";

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
    tags?: string;
}

const Achievment = () => {
    const [gambar, setGambar] = useState<Sertifikat[]>([]);
    const [activeTag, setActiveTag] = useState("all");
    const allTags = ["javascript", "css", "all", "other", "html"];

    useEffect(() => {
        const dataGambar = data[0]?.Sertifikat || [];
        setGambar(dataGambar);
    }, []);

    const buttonHtml = (tag: string) => {
        setActiveTag(tag);
    };

    const filteredData = useMemo(() => {
        if (activeTag === "all") return gambar;
        return gambar.filter((item) => item.tags && item.tags === activeTag);
    }, [gambar, activeTag]);

    return (
        <>
            <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black to-gray-700">
                <Navbar />
                <div className='mt-20 gap-20 pt-10 rounded-lg bg-gradient-to-br from-black to-gray-600 mx-20 items-center justify-evenly shadow-gray-500 shadow-lg h-auto'>
                    <div className='w-full flex justify-center mt-10'>
                        <h1 className='text-center align-middle text-4xl bg-gray-800 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg hover:text-sky-400'>
                            My Certificate
                        </h1>
                    </div>

                    <div className='flex justify-center gap-4 mt-10'>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-4 py-2 rounded hover:bg-sky-400 ${activeTag === tag ? "bg-sky-500 text-white" : "bg-sky-300 text-black"}`}
                                onClick={() => buttonHtml(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className='flex flex-wrap mt-20 gap-20 pt-10 rounded-lg mx-20 items-center justify-evenly mb-12 pb-12'>
                        {filteredData.map((item, index) => (
                            <div key={index} className='bg-gradient-to-br from-black to-blue-200 rounded-md text-white font-bold overflow-hidden shadow-4xl'>
                                <img src={item.img} alt="" className='h-60 w-60' />
                                <div className='text-center'>
                                    <h2>{item.title}</h2>
                                    <small className='text-xs text-gray-700'>from</small>
                                    <p>{item.company}</p>
                                </div>
                                <hr />
                                <small className='text-end pl-2 text-gray-100'>{item.date}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievment;
