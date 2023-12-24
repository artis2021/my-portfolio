import { motion } from 'framer-motion'
import './Hero.css'
import hero from './assets/hero.jpeg'
// import heroUrl from './assets/hero_2.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {SiLeetcode} from "react-icons/si" 
import resume from './assets/resume.pdf'

const heroData = {
    name: "Arti Sahu",
    title: "Competitive Programmer & Web Developer | Senior at IIT Guwahati",
    socials: [
        {
            name: "Github",
            url: "https://github.com/artis2021",
            icon: <FaGithub />
        },
        {
            name: "Leetcode",
            url: "https://leetcode.com/Arti_Sahu/",
            icon: <SiLeetcode />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/artisahu/",
            icon: <FaLinkedin />
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/arti.sahu2020/",
            icon: <FaInstagram />
        },
    ],
    imageUrl: hero,
    resumeUrl: resume
}

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className='hero__main'>
                <div className="hero__image">
                    <motion.img
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 30, scale: 1.4 }}
                        transition={{ duration: 1 }}
                        src={heroData.imageUrl} alt="Hero" 
                        />
                        
                </div>
                <div className="hero__text">
                    <div className="hero__name">
                        <motion.h1
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            {heroData.name}
                        </motion.h1>
                    </div>
                    <div className="hero__title">
                        <motion.h2
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 2 }}
                        >
                            {heroData.title}
                        </motion.h2>
                    </div>
                    <div className="hero__resume">
                        <motion.div
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 2.5 }}
                        >
                            <a href={heroData.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
                        </motion.div>
                    </div>
                </div>

            </div>
            <div className='socials__container'>
                <motion.ul
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 3 }}
                    className="hero__socials"
                >
                    {heroData.socials.map((social, index) => (
                        <li key={index}>
                            <motion.div
                                whileHover={{
                                    rotate: [0, 10, -10, 10, -10, 0],
                                    transition: { duration: 0.5 }
                                }}
                                className='social__icon'
                            >
                                {social.icon}
                            </motion.div>
                            <a href={social.url} target="_blank" rel="noreferrer">
                                {social.name}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}

export default Hero