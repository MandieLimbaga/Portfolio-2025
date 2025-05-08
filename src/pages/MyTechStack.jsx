import TechStack from "../components/TechStack";
import bash from '../assets/bash.svg';
import btstrpImg from '../assets/boostrap.svg';
import cssImg from '../assets/css.svg';
import gitImg from '../assets/git.svg';
import githubImg from '../assets/github.svg';
import htmlImg from '../assets/html.svg';
import javaImg from '../assets/java.svg';
import jsImg from '../assets/javascript.svg';
import sqlImg from '../assets/mysql.svg';
import nodeJsImg from '../assets/nodejs.svg';
import npmImg from '../assets/npm.svg';
import phpImg from '../assets/php.svg'
import reactImg from '../assets/react.svg';
import vscodeImg from '../assets/vscode.svg';

export default function MyTechStack() {

    const style = {
        body: {
            backgroundColor: '#1E201E',
            borderRadius: '16px',
            color: 'white',
            padding: '10px'
        },
    }
    return(
        <div style={style.body} className="container h-auto">
            <div className="page-title text-center p-5 my-5 mx-auto mb-5">
                <h1>My Tech Stack</h1>
            </div>

            <div className="my-tech-stack container">
                <div className="row gap-sm-5 gap-lg-0 m-5 d-flex align-items-center justify-content-center">
                    <div className="col-sm-2">
                        <TechStack title="BASH" text="helo" img={bash} />
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="REACT" img={reactImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="NODE JS" img={nodeJsImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="NPM" img={npmImg} />
                    </div>
                </div>

                <div className="row gap-sm-5 gap-lg-0 m-5 d-flex align-items-center justify-content-center">
                    <div className="col-sm-2">
                        <TechStack title="BOOSTRAP" text="helo" img={btstrpImg} />
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="HTML" img={htmlImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="CSS" img={cssImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="JAVASCRIPT" img={jsImg} />
                    </div>
                </div>

                <div className="row gap-sm-5 gap-lg-0 m-5 d-flex align-items-center justify-content-center">
                    <div className="col-sm-2">
                        <TechStack title="PHP" img={phpImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="MYSQL" text="helo" img={sqlImg} />
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="Java" img={javaImg} />
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="GIT" img={gitImg}/>
                    </div>
                </div>

                <div className="row gap-sm-5 gap-lg-0 m-5 d-flex align-items-center justify-content-center">
                    <div className="col-sm-2">
                        <TechStack title="GITHUB" img={githubImg}/>
                    </div>
                    <div className="col-sm-2">
                        <TechStack title="VS CODE" text="helo" img={vscodeImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}