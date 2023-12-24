import { motion } from 'framer-motion'
import './Projects.css'
import { FaGithub, FaLink } from 'react-icons/fa'
import codezone from './assets/codezone.png'
import codecontribute from './assets/codecontribute.png'
import nasaproject from './assets/nasaproject.png'
import opencv from './assets/opencv.jpg'

const Projects = () => {
    const projects = [
        {
            name: 'Code Zone',
            image: codezone,
            description: 'A web application inspired by platforms like Leetcode. Users can create account ans make their coding problems at a single intergrated platform. This also allows users to make daily coding challenges and track their progress. Also this provides a library where user can store their notes and code snippets. THis also provides an online compiler for multiple languages.',
            github: 'https://github.com/artis2021/code-zone',
            live: 'https://code-zone-project.vercel.app/',
            technologies: ['React', 'Material UI', 'Firebase', 'Compiler API', 'NPM Packages']
        },
        {
            name: 'Code Contribute',
            image: codecontribute,
            description: 'A full stack web application where users can create their account and then able to create and read the blogs on coding topics. This acts as a platform where users can share their knowledge and experience with others.',
            github: 'https://github.com/artis2021/code-contribute/',
            live: 'https://codeshareapp.vercel.app/',
            technologies: ['React', 'Node', 'Express', 'MongoDB', 'CSS', 'NPM Packages']
        },
        {
            name: 'Nasa Project',
            image: nasaproject,
            description: 'A ReactJS app interfacing with a NASA-powered API featuring an elegant design using styled-components. Enables users to engage with NASA’s Daily Picture, Mars weather and explore curated rover-taken images. Provides Picture of any Day and a compilation of videos, audio, and blogs from the extensive NASA Library.',
            github: 'https://github.com/artis2021/nasa',
            live: 'https://nasa-space-project.vercel.app/',
            technologies: ['React', 'Styled-Components', 'NASA API', 'Axios', 'NPM Packages']
        },

        {
            name: 'Face Recognition Tracking Attendance',
            image: opencv,
            description: 'Unleash the potential of our OpenCV-based app, used for attendance management. Beyond recording attendance in a CSV file, it seamlessly integrates face detection, verification, age and gender detection, landmark analysis, and even offers a touch of creativity with face makeup. Elevate your experience with real-time features like video face detection and alignment. The app is a one-stop solution for all your attendance management needs',
            github: 'https://github.com/artis2021/Face-Recognition-Tracking-Attendance',
            readme: 'https://github.com/artis2021/Face-Recognition-Tracking-Attendance/blob/main/README.md',
            technologies: ['OpenCV', 'Python', 'CSV', 'PIP']
        }
    ]
    return (
        <section className="projects" id="projects">
            <motion.h2
                initial={{ translateY: 100 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1 }}
            >My Projects</motion.h2>
            <div className="projects__container">
                {projects.map(project => (
                    <motion.div
                        className="project"
                        key={project.name}
                        initial={{ translateY: 50 }}
                        whileInView={{ translateY: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={
                            {
                                translateY: [0, -10, 0],
                                rotate: [0, 5, -5, 0],
                            }
                        }

                    >
                        <div className="project__image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project__info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="links">
                                <div className="link">
                                    <FaGithub />
                                    <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                                </div>
                                <div className="link">
                                    <FaLink />
                                    {
                                        project.live ? (
                                            <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                                        ) : (
                                            <a href={project.readme} target="_blank" rel="noreferrer">Readme</a>
                                        )

                                    }
                                </div>
                            </div>
                            <div className="technologies">
                                {project.technologies.map(technology => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects