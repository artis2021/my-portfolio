import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MdCancel } from "react-icons/md";
import './Navbar.css';


{/* 
    Resume sections
    1. Hero (name, title, socials)
    2. About (description)
    3. Academics (education)
    4. Experience (work)
    5. Projects (projects)
    6. Skills (skills)
    7. Achievements (achievements)
    8. Contact (contact)
    8756314954
*/}

const Navbar = () => {
    // get the current screen width and based on that decide whether to show the hamburger menu or notand it should get updated on window resize
    const [isOpen, setIsOpen] = useState(false);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

    // add event listener for window resize
    window.addEventListener('resize', () => {
        // if the screen width is less than 768px, set smallScreen to true
        if (window.innerWidth < 768) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    });

    return (
        <div className="navbar">
            <div className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <MdCancel className="hamburger__icon" /> : <GiHamburgerMenu className="hamburger__icon" />}
            </div>
            {
                smallScreen ? (
                    <div className={isOpen ? "navbar__links show" : "navbar__links"}>
                        <a href="#about"
                            onClick={() => setIsOpen(!isOpen)}
                        >About</a>
                        <a href="#academics"
                            onClick={() => setIsOpen(!isOpen)}
                        >Education</a>
                        <a href="#projects"
                            onClick={() => setIsOpen(!isOpen)}
                        >Projects</a>
                        <a href="#skills"
                            onClick={() => setIsOpen(!isOpen)}
                        >Skills</a>
                        <a href="#contact"
                            onClick={() => setIsOpen(!isOpen)}
                        >Contact</a>
                    </div>
                ) : (
                    <div className="navbar__links show">
                        <a href="#about">About</a>
                        <a href="#academics">Education</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar