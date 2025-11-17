import myProfile from '/me.webp';
import '../styles/Home.css'

export default function Home() {
    return(
        <>
        <div className="home container">
            <div className="row expand-sm h-100 justify-content-center align-items-center">
                <div className="col-5 p-3 text-inline text-light text" data-aos="zoom-in" data-aos-once="false" data-aos-duration="1000">
                    <h1 data-aos="fade-out-right" data-aos-duration="1000">Hello, I'm <span style={{color: "#1aa9c5"}}>Mandz</span>.</h1>
                    <h3>Aspiring <strong style={{color: "#1aa9c5"}}>Web Developer</strong></h3>
                </div>
                <div className="col-5 p-3 text-center image" data-aos="flip-left" data-aos-duration="800">
                    <img src={myProfile} alt="Mandie" style={{width: "240px"}} />
                </div>
            </div>
        </div>

        </>
    );
}