import "./buttonsTop.css";
import FlavioDaMata from "../../../public/FlaviodaMata.pdf";

export function ButtonsTop() {
  return (
    <div className="buttonsTop">
      <button className="projects">Projects</button>
      <button className="myResume">My Resume</button>
      <button className="talkToMe">Talk To Me</button>
      <a
        className="Flavio"
        href="/public/FlaviodaMata.pdf"
        download={FlavioDaMata}
      >
        Download my resume
      </a>
    </div>
  );
}

export default ButtonsTop;
