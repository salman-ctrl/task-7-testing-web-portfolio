import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import foto from '../../public/assets/foto ku.png'
import background from '../../public/assets/background.jpg'
import data from "../data.json"
import { useNavigate } from 'react-router-dom'
import Skill from '../component/Skill'
import About from '../component/about'
import Hero from '../component/Hero'
import Achievment from '../component/achievment'
import Showcase from '../component/showCase'




interface Sertifikat {
    img: string;
    title: string;
    date: string;
    company: string;
}

const LandingPage = () => {
    const navigate = useNavigate();
    const [gambar, setGambar] = useState<Sertifikat[]>([]);

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
                        <Hero />
                    </div>
                </section>
                <About />
                <Skill />
                <Achievment />
                <Showcase />
            </div>
        </>

    )
}

export default LandingPage
