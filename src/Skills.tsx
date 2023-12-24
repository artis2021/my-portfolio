import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills__container">
                <h2
                >Languages</h2>
                <div className="languages">

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />


                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />


                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />



                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />


                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                </div>
                <h2
                >Frameworks</h2>
                <div className="frameworks">
                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />


                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />

                </div>
                <h2
                >Databases</h2>
                <div className="databases">
                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />

                </div>
                <h2
                >Tools</h2>
                <div className="tools">
                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

                    <motion.img
                        initial={{translateY: 100}}
                        whileInView={{translateY: 0}}
                        transition={{ duration: 0.5 }}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                </div>

            </div>
        </section>
    )
}

export default Skills