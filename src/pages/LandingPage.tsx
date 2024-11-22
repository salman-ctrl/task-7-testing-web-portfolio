import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import foto from '../../public/assets/foto ku.png'
import background from '../../public/assets/background.jpg'
import data from "../data.json"

interface Skill {
    img: string;
}

const LandingPage = () => {

    const headlineText = "Wwho Am I..?";
    const paragraphText = "Ii’m Salman, as a Frontend Web developer, passionate about turning ideas into stunning, functional, and user-friendly digital experiences."

    const [headline, setHeadline] = useState(" ");
    const [paragraph, setParagraph] = useState(" ");
    const [skills, setSkills] = useState<Skill[]>([]);


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

    useEffect(() => {
        typeText(headlineText, setHeadline, 50);
        typeText(paragraphText, setParagraph, 100);
    }, [])

    useEffect(() => {
        const skillData = data[0]?.Skill || [];
        setSkills(skillData);
    }, [])



    return (
        <>
            <section className='h-auto'>
                <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
                    <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
                    <Navbar />
                    <div className="flex h-full">
                        <div className="w-1/2 ml-10 flex flex-col justify-center px-12">
                            <h1 className="text-5xl text-white font-bold mb-2">
                                {headline}
                            </h1>
                            <p className="text-4xl text-gray-300 mt-4">
                                {paragraph}
                            </p>
                            <button className="px-8 mt-16 py-4 text-black text-2xl bg-white rounded-xl w-max z-20">
                                Learn More!
                            </button>
                        </div>

                        <div className="relative w-1/2 flex justify-center items-end">
                            <img
                                src={foto}
                                alt="fotosaya"
                                className="fotoku absolute bottom-0 max-h-full h-[950px] w-[700px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-auto -mt-8 '>
                <div className='h-full w-full bg-black pb-20'>
                    <div className='w-full flex justify-center pt-40'>
                        <h1 className='text-center align-middle text-4xl bg-gray-500 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg'>About Me</h1>
                    </div>
                    <div className='w-full h-full pl-16 pt-16 flex gap-10  justify-center'>
                        <div className='w-1/2 px-10'>
                            <h1 className='text-2xl py-5 text-third'>Who I Am?</h1>
                            <p className='text-xl text-fourth'>   Hi, I'm Salman Rizky, a passionate Front-End Web Developer and an Informatics student at Universitas Negeri Padang. I specialize in building interactive, user-friendly websites using HTML5, CSS3, JavaScript, and frameworks like React and Tailwind CSS. I’m driven by creating clean, efficient, and visually appealing web experiences that work seamlessly across devices.
                                <br /> <br />
                                As a student, I’m constantly learning new technologies and keeping up with the latest trends in web development. My goal is to combine my technical skills with my creativity to build impactful websites that users love to engage with..</p>
                        </div>
                        <div className='px-10 w-1/2'>
                            <h1 className='text-2xl py-5 text-third'>
                                Why me?
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
            <section className='h-auto bg-black pt-10'>
                <div className='bg-gray-900'>
                    <div className='w-full flex justify-center pt-20'>
                        <h1 className='text-center align-middle text-4xl bg-gray-500 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg'>My Skill</h1>
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



        </>

    )
}

export default LandingPage
