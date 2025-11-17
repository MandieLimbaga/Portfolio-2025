import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
    
    const navigate = useNavigate();
    const handleUrl = (url) => {
        navigate(`${url}`);
    }

    const styles = {
        nav: {
            backgroundColor: "#1E201E",
            color: "white",
            opacity: "0.9"
        },
        navBrand: {
            fontWeight: "900",
            fontSize: '25px',
            fontFamily: "poppins, sans-serif"
        },
        navLinks: {
            color: 'white',
        },
    };

    return(
        <div className="sticky-top">
            <nav class="navbar navbar-expand-sm" style={styles.nav}>
                <div className="container">
                    <span class="navbar-brand mb-0 h1 text-white" style={styles.navBrand}>Mandz</span>
                </div>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link style={styles.navLinks} onClick={() => handleUrl('home')} className="nav-link" aria-current="page" to="home" smooth duration={10}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={styles.navLinks} onClick={() => handleUrl('about')} className="nav-link" to="about" smooth duration={10}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={styles.navLinks} onClick={() => handleUrl('techStack')} className="nav-link" to="techStack" smooth duration={10}>TechStack</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={styles.navLinks} onClick={() => handleUrl('projects')} className="nav-link" to="projects" smooth duration={10}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={styles.navLinks} onClick={() => handleUrl('contact')} className="nav-link" to="contact" smooth duration={10}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}