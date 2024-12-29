import "./experience.css";
import CssImage from "../../assets/css.png";
import ReactImage from "../../assets/react.png";
import HtmlImage from "../../assets/html.png";
import JsImage from "../../assets/js.png";
import TsImage from "../../assets/ts.png";

export function Experience() {
  return (
    <div className="experience">
      <hr className="divisor" />
      <br />
      <p>
        <h2 className="about">ABOUT ME</h2> <br></br>
        I have a degree in Electrical Technician and Industrial Automation
        Technician, with more than five years of experience in the automation
        area. I'm currently studying Systems Analysis and Development, where I
        started my studies in web programming and discovered a great passion for
        software development. Since then, I have been dedicating myself to
        improving in this area, taking parallel courses focused on full-stack
        development and deepening my knowledge in mobile development, especially
        with React Native. My goal is to combine my previous technical skills
        with programming skills, contributing to the creation of innovative and
        functional solutions. I'm motivated by challenges and excited to
        continue learning and evolving as a developer.
        <br />
        Technologies: Java Script/ Html/ Css/ React JS/ React Native/Node
        JS/Nodemon/Axios/Git/ Git Hub/Insomnia/Styled Components/Typescript/
        Docker...
      </p>
      <br />
      <hr className="divisor" />
      <br />
      <div className="experience-time">
        <div className="experience-languages">
          <img src={HtmlImage} alt="Html Logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <img src={CssImage} alt="Css Logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <img src={ReactImage} alt="React Logo" width={40} height={40} />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <img src={JsImage} alt="Js Logo" width={40} height={40} />

          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>2 year</span>
            </div>
          </div>
        </div>

        <div className="experience-languages">
          <img src={TsImage} alt="Ts Logo" width={40} height={40} />

          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>1 year</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr className="divisor" />
    </div>
  );
}

export default Experience;
