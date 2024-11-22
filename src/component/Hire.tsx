import Navbar from "./Navbar"
import { Send, Linkedin, Github, Mail, Clock } from 'lucide-react';

const Hire = () => {
    return (
        <>
            <div className="relative bg-cover bg-center h-screen opacity-black-2 w-full overflow-hidden bg-gradient-to-br from-black  to-blue-300" >
                <Navbar />

                <div className="h-full">
                    <div className="w-1/2 pt-64 pl-16">
                        <h1 className="text-white text-5xl text-bold pb-5">Contact Me</h1>
                        <p className="text-2xl text-gray-200">  I'm always excited to collaborate on new projects and hear fresh ideas.</p>
                        <div className="flex pt-32 gap-8">
                            <div className="gap-2 mb-4 bg-white h-40 w-80 rounded-lg shadow-2xl">
                                <div className="flex items-center gap-2 py-2 px-4">
                                    <Clock className="h-5 w-5 text-blue-500  " />
                                    <h1 className="text-xl font-semibold text-black" >Availability </h1>
                                </div>

                                <p className="text-gray-600 px-4">
                                    Currently available for freelance work and exciting opportunities.
                                    <br />
                                    Best time: Monday-Friday, 9 AM - 6 PM (GMT+7)
                                </p>
                            </div>
                            <div className="gap-2 mb-4 bg-white h-40 w-80 rounded-lg shadow-2xl">
                                <div className="flex items-center gap-2 py-2 px-4">
                                    <Mail className="h-5 w-5 text-blue-500  " />
                                    <h1 className="text-xl font-semibold text-black" >Quick Response </h1>
                                </div>

                                <p className="text-gray-600 px-4">
                                    I typically respond within 24 hours.
                                    <br />
                                    Your project is important to me!
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Hire;