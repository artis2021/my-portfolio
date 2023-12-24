import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div className="about__container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      >
        <motion.h2
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >About Me</motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >I'm currently in my final year pursuing a <span>B. Tech </span>degree in Mathematics & Computing at <span>IIT Guwahati</span>. Proficient in a range of programming languages, including C++, Java, C, Python, JavaScript, HTML, SQL, and CSS, I have dedicated the past 4 years to mastering <span>Data Structures and Algorithms</span>. During my second year, I had the privilege of being selected for the <span>Microsoft Engage program.</span>
        </motion.p>

        <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        In addition to my coding proficiency, I possess a solid understanding of Computer Fundamentals and hands-on experience with technologies such as ReactJS, NodeJS, and MongoDB. <span>Serving as a core team member for Alcheringa</span>, the cultural fest at IITG, has provided me with valuable insights into teamwork and organizational dynamics. Outside of academic pursuits, I am an avid <span>badminton player.</span>
        </motion.p>
        
        <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        I am eager to contribute my diverse skill set and experiences to your team and would welcome the opportunity to discuss how I can add value.</motion.p>
      </motion.div>
    </section>
  )
}

export default About