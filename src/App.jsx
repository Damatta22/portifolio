import "./App.css";
import ButtonsTop from "./components/buttonsTop/buttonsTop";
import Header from "./components/header/header";
import Experience from "./components/experience/experience";
import Info from "./components/information/information";
import SocialBtns from "./components/social-btns/social-btns";
import Contact from "./components/contactMe/contactMe";

function App() {
  return (
    <>
      <div className="wrapper">
        <ButtonsTop />
        <Header />
        <Info />
        <Experience />
        <SocialBtns />
        <Contact />
      </div>
    </>
  );
}

export default App;
