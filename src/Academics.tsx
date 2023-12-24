import { motion } from 'framer-motion'
import './Academics.css'
import iitg from './assets/iitg.png'
import jnv from './assets/jnv.jpg'

const Academics = () => {
    const data = [
        {
            logo: iitg,
            school: 'Indian Institute of Technology, Guwahati',
            degree: 'B.Tech, Mathematics and Computing',
            start: 'July 2020',
            end: 'May 2024',
        },
        {
            logo: jnv,
            school: 'Jawahar Navaodaya Vidyalaya, Jaunpur',
            degree: 'Senior Secondary Education',
            start: 'July 2018',
            end: 'May 2019',
        },
        {
            logo: jnv,
            school: 'Jawahar Navaodaya Vidyalaya, Jaunpur',
            degree: 'Secondary Education',
            start: 'July 2017',
            end: 'May 2018',
        },
    ]
    return (
        // Build a timeline using the data above and frame motion
        <section className="academics" id="academics">
            <div className="academic-container">
                <h2>
                    My Academic Journey
                </h2>
                <div
                    className="timeline"
                >
                    {data.map((item, index) => (
                        <>
                            {
                                    <motion.div
                                        className={`timeline__item ${index % 2 === 0 ? 'left' : 'right'}`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ 
                                            rotate: [0, 10, -10, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                        whileTap={{
                                            translateY: [0, -15, 15, 0],
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="timeline__image">
                                            <img
                                                src={item.logo}
                                                alt="logo"
                                            />
                                        </div>
                                        <div className="timeline__info">
                                            <h3 className='school'>{item.school}</h3>
                                            <p  className='degree'>{item.degree}</p>
                                            <p className='duration'>{item.start} - {item.end}</p>
                                        </div>
                                    </motion.div>
                                
                            }
                        </>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Academics