import "./buttonsTop.css";
import FlavioDaMata from "../../assets/Flávio da Mata.pdf";

export function ButtonsTop() {
  return (
    <div className="buttonsTop">
      <button className="projects">Projects</button>
      <button className="myResume">My Resume</button>
      <button className="talkToMe">Talk To Me</button>
      <a
        className="Flavio"
        href="/src/assets/Flávio da Mata.pdf"
        download={FlavioDaMata}
      >
        Download my resume
      </a>
    </div>
  );
}

export default ButtonsTop;
