import { Send, Linkedin, Github, Mail, ArrowRight, ShieldQuestion, UserRound, ShieldEllipsis } from 'lucide-react';

const About = () => {
    return (
        <>
            <section id='about' className='h-auto -mt-8 '>
                <div className='h-full w-full bg-gradient-to-br from-black  to-gray-700 pb-20'>
                    <div className='w-full flex justify-start ml-16 pt-40'>
                        <h1 className='text-center align-middle text-4xl bg-gray-900 cursor-pointer text-sky-300 shadow-sky-500 shadow-md border-sky-400 border-2 px-16 py-3 w-100 rounded-lg  transition duration-1000 flex hover:scale-105 gap-5'> About Me<UserRound className='mt-1 w-10 h-10' /></h1>
                    </div>
                    <div className='w-full h-full pl-16 pt-16 flex gap-8  justify-center mb-10 '>
                        <div className='w-1/2 px-10 bg-black py-10 border-2 border-sky-300 hover:border-white rounded-lg transition duration-1000 hover:scale-105'>
                            <h1 className='text-2xl py-5 text-blue-400 flex gap-2 items-center'> <ShieldQuestion className='h-7 w-7 text-blue-300' />Who I Am?</h1>
                            <p className='text-xs sm:text-xl text-fourth'>
                                Hi, I'm Salman Rizky, a passionate Front-End Web Developer and an Informatics student at Universitas Negeri Padang. I specialize in building interactive, user-friendly websites using HTML5, CSS3, JavaScript, and frameworks like React and Tailwind CSS. I’m driven by creating clean, efficient, and visually appealing web experiences that work seamlessly across devices.
                                <br /> <br />
                                As a student, I’m constantly learning new technologies and keeping up with the latest trends in web development. My goal is to combine my technical skills with my creativity to build impactful websites that users love to engage with..</p>
                        </div>
                        <div className='px-10 w-1/2 border-2 mr-10 bg-black border-sky-300 hover:border-white  py-10 rounded-lg transition duration-1000 hover:scale-105'>
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
        </>
    )
}

export default About;