import "./projects.css";
import Hamburgeria from "../../assets/hamburgueria-front.png";
import BackEndHamb from "../../assets/Back-end the Hamburgeria.png";
import Frella from "../../assets/frella-mario.png";
import Imc from "../../assets/imc-project.png";
import Rocket from "../../assets/Rocket Games.png";
import CEP from "../../assets/cep.png";
import Prevision from "../../assets/prevision.png";
import Easy from "../../assets/easyshop.png";
import Estic from "../../assets/medidorEstic.png";

function Projects() {
  return (
    <div className="projectsPage">
      <h1 className="My projects">Projects</h1>
      <div className="firstLineLink">
        <a
          className="link-projects-git"
          href="https://damatta22.github.io/hamburgueria-front-end/"
        >
          Hamburgeria front-end
          <img
            src={Hamburgeria}
            width={300}
            height={300}
            alt="picture-hamburgeria"
          />
        </a>

        <a
          className="link-projects-git"
          href="https://github.com/Damatta22/hamburgueria-back-end.git"
        >
          Hamburgeria back-end
          <img
            src={BackEndHamb}
            width={300}
            height={300}
            alt="picture-hamburgeria-back-end"
          />
        </a>

        <a
          className="link-projects-git"
          href="https://flaviodamata-mariofreela.netlify.app/"
        >
          Landing page comerce
          <img
            src={Frella}
            width={300}
            height={300}
            alt="project-frella-mario"
          />
        </a>
      </div>

      <div className="secondLineLink">
        <a
          className="link-projects-git"
          href="https://flaviodamata-bodymassindex.netlify.app/"
        >
          Body mass index
          <img src={Imc} width={300} height={300} alt="project-imc" />
        </a>

        <a
          className="link-projects-git"
          href="https://damatta22.github.io/rocket-games/"
        >
          Rocket games
          <img
            src={Rocket}
            width={300}
            height={300}
            alt="picture-rocket-games"
          />
        </a>

        <a
          className="link-projects-git"
          href="https://flaviodamata-findyourcep.netlify.app/"
        >
          Find your cep
          <img src={CEP} width={300} height={300} alt="project-busca-cep" />
        </a>
      </div>

      <div className="thirdLineLink">
        <a
          className="link-projects-git"
          href="https://flaviodamata-weatherforecast.netlify.app/"
        >
          Weather forecast
          <img
            src={Prevision}
            width={300}
            height={300}
            alt="project-prevision"
          />
        </a>

        <a
          className="link-projects-git"
          href="https://flaviodamata-siemenswebserver.netlify.app/"
        >
          Siemens project
          <img
            src={Estic}
            width={300}
            height={300}
            alt="picture-rocket-games"
          />
        </a>

        <a
          className="link-projects-git"
          href="https://flaviodamata-easyshop.netlify.app/"
        >
          Easy shopping
          <img src={Easy} width={300} height={300} alt="Easy-Shop" />
        </a>
      </div>
      <hr className="divisor" />
    </div>
  );
}

export default Projects;
