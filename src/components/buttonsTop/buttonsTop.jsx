import "./buttonsTop.css";
import Whats from "../../assets/whats.png";
import { Link } from "react-scroll";

export function ButtonsTop() {
  return (
    <nav className="buttonsTop">
      <Link
        to="../projects/projects.jsx"
        spy={true}
        smooth={true}
        offset={-100}
        onClick={Link}
        className="projects"
      >
        Projects
      </Link>

      <a href="#about" className="myResume">
        My Resume
      </a>
      <a href="#btn-primary" className="talkToMe">
        Talk To Me
      </a>
      <a
        className="Flavio"
        href="https://drive.google.com/file/d/12cmFYFbYPq0E682ZdP5a1aR23DsKOIEu/view?usp=sharing"
      >
        Download-CV
      </a>

      <a
        className="link-app"
        href="https://api.whatsapp.com/send/?phone=31983597803&text&type=phone_number&app_absent=0"
      >
        <img src={Whats} width={60} height={60} alt="whatsapplink" />
      </a>
    </nav>
  );
}

export default ButtonsTop;
