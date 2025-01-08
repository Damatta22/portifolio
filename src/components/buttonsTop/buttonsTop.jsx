import "./buttonsTop.css";
import Whats from "../../assets/whats.png";
import { Link } from "react-scroll";

export function ButtonsTop() {
  return (
    <nav className="buttonsTop">
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        className="projects"
      >
        Resume
      </Link>

      <Link
        to="projectsPage"
        spy={true}
        smooth={true}
        offset={-100}
        className="projects"
      >
        Projects
      </Link>

      <Link
        to="social"
        spy={true}
        smooth={true}
        offset={-100}
        className="projects"
      >
        SOCIAL
      </Link>

      <a
        className="Flavio"
        href="https://drive.google.com/file/d/1RfUvxdZ9zSzmORebOBwOLMVB93Mfe8kl/view?usp=drive_link"
        aria-label="Baixar Currículo"
      >
        Download Resume
      </a>

      <a
        className="link-app"
        href="https://api.whatsapp.com/send/?phone=31983597803&text&type=phone_number&app_absent=0"
        aria-label="Link para WhatsApp"
      >
        <img src={Whats} width={60} height={60} alt="Ícone do WhatsApp" />
      </a>
    </nav>
  );
}

export default ButtonsTop;
