import "./App.css";
import ButtonsTop from "./components/buttonsTop/buttonsTop";
import Header from "./components/header/header";
import Experience from "./components/experience/experience";
import Info from "./components/information/information";
import SocialBtns from "./components/social-btns/social-btns";
import Contact from "./components/contactMe/contactMe";
import Projects from "./components/projects/projects";
import Certify from "./components/projects/Certifications/certify";

function App() {
  return (
    <>
      <div className="wrapper">
        <ButtonsTop />
        <Header />
        <Info />
        <Experience />
        <Projects />
        <Certify />
        <SocialBtns />
        <Contact />
      </div>
    </>
  );
}

export default App;
