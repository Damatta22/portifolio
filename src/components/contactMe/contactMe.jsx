import "./contactMe.css";
import { EmailIcon } from "../icons/email-icon";
import { Link } from "react-scroll"; 

export function Contact() {
  return (
    <nav className="contactNav">
      <Link
        to="btn-primary" 
        spy={true}
        smooth={true}
        offset={-100}
        className="projects"
      ></Link>
      <div className="links">
        <a
          className="btn-primary"
          href="mailto:flaviodamataflv@gmail.com"
          aria-label="Enviar e-mail para Flávio"
        >
          Contact Me
          <EmailIcon />
        </a>
      </div>
    </nav>
  );
}

export default Contact;
