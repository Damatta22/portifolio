import "./buttonsTop.css";
import Whats from "../../assets/whats.png";

export function ButtonsTop() {
  return (
    <div className="buttonsTop">
      <a className="projects">Projects</a>
      <a className="myResume">My Resume</a>
      <a href="mailto:flaviodamataflv@gmail.com" className="talkToMe">
        Talk To Me
      </a>
      <a
        className="Flavio"
        href="https://drive.google.com/file/d/1uJzavHkagm5W138zIKz8Ir-Vt83tBCOp/view?usp=sharing"
      >
        Download-CV
      </a>

      <a
        className="link-app"
        href="https://api.whatsapp.com/send/?phone=31983597803&text&type=phone_number&app_absent=0"
      >
        <img src={Whats} width={60} height={60} alt="whatsapplink" />
      </a>
    </div>
  );
}

export default ButtonsTop;
