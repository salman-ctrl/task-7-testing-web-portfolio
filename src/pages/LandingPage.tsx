import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import foto from '../../public/assets/foto ku.png'
import background from '../../public/assets/background.jpg'
import data from "../data.json"
import { useNavigate } from 'react-router-dom'
import { Send, Linkedin, Github, Mail, ArrowRight, ShieldQuestion, UserRound, ShieldEllipsis } from 'lucide-react';


interface Skill {
    img: string;
}

interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}

const LandingPage = () => {


    const headlineText = "Wwho Am I..?";
    const paragraphText = "Ii’m Salman, as a Frontend Web developer, passionate about turning ideas into stunning, functional, and user-friendly digital experiences."

    const [headline, setHeadline] = useState(" ");
    const [paragraph, setParagraph] = useState(" ");
    const [skills, setSkills] = useState<Skill[]>([]);

    const navigate = useNavigate();

    const [gambar, setGambar] = useState<Sertifikat[]>([]);
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

    // useEffect untuk section SKILL
    useEffect(() => {
        const skillData = data[0]?.Skill || [];
        setSkills(skillData);
    }, [])

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
            <div className='overflow-hidden'>
                <section className='h-auto'>
                    <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
                        <Navbar />
                        <div className="flex h-full z-20">
                            <div className="w-1/2 ml-10 flex flex-col justify-center px-12">
                                <h1 className="text-5xl text-white font-bold mb-2">
                                    {headline}
                                </h1>
                                <p className="text-4xl text-gray-300 mt-4">
                                    {paragraph}
                                </p>
                                <button className="px-8 mt-16 py-4 text-black text-2xl bg-white rounded-xl w-max z-20 flex items-center gap-2 transition duration-300 hover:scale-110">
                                    Learn More! <ArrowRight />
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
                    </div>
                </section>

                <section className='h-auto -mt-8 '>
                    <div className='h-full w-full bg-gradient-to-br from-black  to-blue-200 pb-20'>
                        <div className='w-full flex justify-center pt-40'>
                            <h1 className='text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg  transition duration-1000 flex hover:scale-105 gap-5'> About Me<UserRound className='mt-1 w-10 h-10' /></h1>
                        </div>
                        <div className='w-full h-full pl-16 pt-16 flex gap-8  justify-center mb-10 '>
                            <div className='w-1/2 px-10 bg-black py-10 border-2 border-sky-300 rounded-lg transition duration-1000 hover:scale-105'>
                                <h1 className='text-2xl py-5 text-blue-400 flex gap-2 items-center'> <ShieldQuestion className='h-7 w-7 text-blue-300' />Who I Am?</h1>
                                <p className='text-xs sm:text-xl text-fourth'>
                                    Hi, I'm Salman Rizky, a passionate Front-End Web Developer and an Informatics student at Universitas Negeri Padang. I specialize in building interactive, user-friendly websites using HTML5, CSS3, JavaScript, and frameworks like React and Tailwind CSS. I’m driven by creating clean, efficient, and visually appealing web experiences that work seamlessly across devices.
                                    <br /> <br />
                                    As a student, I’m constantly learning new technologies and keeping up with the latest trends in web development. My goal is to combine my technical skills with my creativity to build impactful websites that users love to engage with..</p>
                            </div>
                            <div className='px-10 w-1/2 border-2 mr-10 bg-black border-sky-300 py-10 rounded-lg transition duration-1000 hover:scale-105'>
                                <h1 className='text-2xl py-5 text-blue-400 flex gap-2 items-center'>
                                    <ShieldQuestion className='w-7 h-7 text-blue-300' /> Why me?
                                </h1>
                                <p className='text-xl text-fourth '>
                                    <ul className='custom-none'>
                                        <li> <span>Passion for Learning:</span> Always staying updated with new technologies and tools to deliver cutting-edge solutions.</li> <br />
                                        <li> <span>Attention to Detail:</span> From pixel-perfect designs to smooth transitions, I ensure every element is polished and well-crafted.</li> <br />
                                        <li> <span>Team-Oriented:</span> I work well both independently and as part of a team, always open to collaboration and feedback to improve the project.</li><br />
                                        <li><span>Modern Tech Skills: </span> Expertise in React, Tailwind CSS, and modern development tools, ensuring clean, efficient, and scalable code.</li><br />
                                        <li><span>User-Focused Design: </span> I create websites that are responsive, intuitive, and visually appealing. I focus on delivering smooth, seamless user experiences.</li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='h-auto w-screen -mt-10 pt-10 overflow-hidden'>
                    <div className='bg-gradient-to-br from-black to-gray-400 pb-20 shadow-lg'>
                        <div className='w-full flex justify-center pt-20'>
                            <h1 className='text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg  transition duration-1000 hover:scale-105'>My Skill</h1>
                        </div>
                        <div className='flex gap-12 py-5 z-20 animate-marquee overflow-hidden mt-20 pb-20'>
                            {skills.map((item, index) => (
                                <div key={index} className='flex-shrink-0 '>
                                    <img src={item.img} alt={`Skill ${index}`} className='w-20 h-20 skill' />
                                </div>
                            ))}
                            {skills.map((item, index) => (
                                <div key={index} className='flex-shrink-0'>
                                    <img src={item.img} alt={`Skill ${index}`} className='w-20 h-20 skill' />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
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
                        <div className='justify-center mt-20 flex'>
                            <button onClick={handleAchievment} className='z-20 text-center flex items-center text-4xl bg-black gap-3 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-8 pb-3 pt-1 w-100 rounded-lg  transition duration-1000 hover:scale-105'> See More<ArrowRight className='mt-3' /> </button >
                        </div>
                        <hr className='mt-10' />
                        <div className='mt-20 '>

                        </div>

                    </div>

                </section>
                {/* <section>
                    <div className="relative bg-cover bg-center h-auto opacity-black-2 w-full overflow-hidden bg-gradient-to-tr from-gray-900  to-gray-600" >
                        <div className='card-container mt-20 gap-20 pt-10 h-auto'>
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
                        <div className='justify-center  flex'>
                            <button onClick={handleAchievment} className='z-20 text-center flex items-center text-4xl bg-black gap-3 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-8 pb-3 pt-1 w-100 rounded-lg  transition duration-1000 hover:scale-105'> See More<ArrowRight className='mt-3' /> </button >
                        </div>
                        <hr className='mt-8' />
                        <div className='mt-20'>

                        </div>

                    </div>

                </section> */}


            </div>

        </>

    )
}

export default LandingPage
