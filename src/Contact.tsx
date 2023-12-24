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
                <a href="mailto:a.gmail.com">abhishekku20022002@gmail.com</a>
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
                <a href="mailto:a.iitg.ac.in">abhi200101006@iitg.ac.in</a>
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
                <a href="https://www.linkedin.com/in/a">abhishekiitg</a>   
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
                <a href="saajda" target="_blank" rel="noreferrer">abhishekkumar___006</a>

            </motion.div>
            
        </motion.div>
    </section>
  )
}

export default Contact