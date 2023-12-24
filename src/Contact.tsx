import {motion} from 'framer-motion'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <motion.h2
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            Contact Me
        </motion.h2>
        <motion.div
            className="contact__container"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <motion.div
            className='contact__item'
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{translateY: -10}}
            >
                <div className="email">
                <SiGmail />
                </div>
                <a href="mailto:upasnagupta3333@gmail.com">upasnagupta3333@gmail.com</a>
            </motion.div>
            <motion.div
            className='contact__item'
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{translateY: -10}}
            >
                <div className="outlook">
                <PiMicrosoftOutlookLogoFill />
                </div>
                <a href="mailto:s.arti@iitg.ac.in">s.arti@iitg.ac.in</a>
            </motion.div>
            <motion.div
            className='contact__item'
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{translateY: -10}}
            >
                <div className="linkedin">
                <FaLinkedin />
                </div>
                <a href="https://www.linkedin.com/in/artisahu/" target="_blank" rel="noreferrer">artisahu</a>   
            </motion.div>
            <motion.div
            className='contact__item'
            initial={{opacity: 1, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{translateY: -10}}
            >
                <div className="instagram">
                <FaInstagram />
                </div>
                <a href="https://www.instagram.com/arti.sahu2020/" target="_blank" rel="noreferrer">arti.sahu2020</a>

            </motion.div>
            
        </motion.div>
    </section>
  )
}

export default Contact