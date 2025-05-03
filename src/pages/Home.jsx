import myProfile from '/me.webp';
import '../styles/Home.css'

export default function Home() {
    return(
        <>
        <div className="home container">
            <div className="row expand-sm h-100 justify-content-center align-items-center">
                <div className="col-5 p-3 text-inline text-light text" data-aos="zoom-out" data-aos-once="false" data-aos-duration="1200">
                    <h1 data-aos="fade-out" data-aos-duration="2000">Hello, I'm <span style={{color: "#1aa9c5"}}>Mandy</span>.</h1>
                    <h3>Aspiring <strong style={{color: "#1aa9c5"}}>Web Developer</strong></h3>
                </div>
                <div className="col-5 p-3 text-center image">
                    <img src={myProfile} alt="Mandie" style={{width: "240px"}} />
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1745644510">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>

        </>
    );
}