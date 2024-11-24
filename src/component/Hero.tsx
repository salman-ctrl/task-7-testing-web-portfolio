import foto from '../../public/assets/foto ku.png'
import { Send, Linkedin, Github, Mail, ArrowRight, ShieldQuestion, UserRound, ShieldEllipsis } from 'lucide-react';
import { useEffect, useState } from 'react'


const Hero = () => {

    const headlineText = "Wwho Am I..?";
    const paragraphText = "Ii’m Salman, as a Frontend Web developer, passionate about turning ideas into stunning, functional, and user-friendly digital experiences."

    const [headline, setHeadline] = useState(" ");
    const [paragraph, setParagraph] = useState(" ");


    const typeText = (text: string, setDisplayedText: React.Dispatch<React.SetStateAction<string>>, speed: number) => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + text.charAt(i));
            i++;
            if (i === text.length) {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval)
    };
    // useEffect untuk animasi head dan paragraf di hero
    useEffect(() => {
        typeText(headlineText, setHeadline, 50);
        typeText(paragraphText, setParagraph, 100);
    }, [])


    return (
        <>
            <div className="flex h-full z-20">
                <div className="w-1/2 ml-10 flex flex-col justify-center px-12">
                    <h1 className="text-5xl text-white font-bold mb-2">
                        {headline}
                    </h1>
                    <p className="text-4xl text-gray-300 mt-4">
                        {paragraph}
                    </p>
                    <button className="px-8 mt-16 py-4 text-black text-2xl bg-white rounded-xl hover:text-white hover:bg-black  hover:bg-black transition duration-500 w-max z-20 flex items-center gap-2 transition duration-300 hover:scale-110">
                        <a href="#about">Learn More!</a> <ArrowRight />
                    </button>
                </div>

                <div className="relative w-1/2 flex justify-center items-end">
                    <img
                        src={foto}
                        alt="fotosaya"
                        className="fotoku absolute bottom-0 max-h-full h-[850px]  w-[700px] object-cover  rounded-xl hover:scale-105  transition duration-1000"
                    />
                </div>
            </div>
        </>
    )
}

export default Hero;