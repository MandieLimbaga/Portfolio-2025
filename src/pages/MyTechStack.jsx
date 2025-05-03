import TechStack from "../components/TechStack";
import reactImg from '../assets/react.svg';
import javaImg from '../assets/Java.svg';
import jsImg from '../assets/js.svg';

export default function MyTechStack() {

    const style = {
        body: {
            height: '60px',
            backgroundColor: 'grey',
        },
    }

    return(
        <div style={style.body}>
            <div className="page-title">
                <h4>My Tech Stack</h4>
            </div>

            <div className="my-tech-stack">
                <div className="col">
                    <TechStack title="React" text="helo" img={reactImg} />
                </div>
            </div>
        </div>
    );
}