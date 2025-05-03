import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import MyTechStack from "./pages/MyTechStack"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from "aos";
import 'aos/dist/aos.css';


function App() {
  AOS.init({
    disable: false,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    debounceDelay: 500,
    throttleDelay: 50,
    startEvent: 'DOMContentLoaded',
    anchorPlacement: 'top-bottom',
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mytechstack" element={<MyTechStack />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
        <div className="container">
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About to="about" />
          </section>

          <section id="projects">
            <Projects/>
          </section>
          
          <section id="mytechstack">
            <MyTechStack />
          </section>

          <section id="contact">
            <Contact/>
          </section>
        </div>

    </>
  )
}

export default App
