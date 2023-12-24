import { motion } from 'framer-motion'
import './Projects.css'
import { FaGithub, FaLink } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            name: 'Project 1',
            image: 'https://picsum.photos/200/300',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            github: 'https://github.com',
            live: 'https://github.com',
            technologies: ['React', 'Node', 'Express', 'MongoDB']
        },
        {
            name: 'Project 2',
            image: 'https://picsum.photos/200/300',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            github: 'https://github.com',
            live: 'https://github.com',
            technologies: ['React', 'Node', 'Express', 'MongoDB']
        },
        {
            name: 'Project 3',
            image: 'https://picsum.photos/200/300',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            github: 'https://github.com',
            live: 'https://github.com',
            technologies: ['React', 'Node', 'Express', 'MongoDB']
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
                                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
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