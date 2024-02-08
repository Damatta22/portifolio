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
        <h2>ABOUT ME</h2> <br></br>
        I´m passionate about creating intuitive and attractive interfaces.
        Throughout my freelance career, I´ve had the opportunity to work on a
        variety of challenging projects that have allowed me to hone my skills
        and develop a deep understanding of front-end design and development
        best practices. My previous experiences were essential for my
        professional and personal development, having a good relationship with
        co-workers and clientes. Completely open to constructive criticism,
        responsibility and corporate mentality. Working as a team is my focus
        for exchanging knowledge and learning.
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
