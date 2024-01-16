import { useEffect } from "react"
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from "./Header"
import Feedback from './Feedback'
import Maincard from "./Maincard"
import Projects from "./Projects";
import Services from "./Services";
import Skill_section from "./Skill_section"
import About from "./About";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";



function App() {

  const desktop = useMediaQuery({minWidth:1024})
  const mobile = useMediaQuery({maxWidth:700})
  const screen_size = [desktop,mobile]
  useEffect(() => {
    Aos.init({
    });
  }, []);
  return (
    <>
      <Header/>
      
      <main>
          <Maincard
           screen_size={screen_size}
          />
          <Skill_section
           screen_size={screen_size}
          />
          <Services
           screen_size={screen_size}
          />
          <Projects
          screen_size={screen_size}
          />
          <About
          screen_size={screen_size}
          />
          <Feedback/>
          <Footer/>

      </main>
    </>
  )
}

export default App
