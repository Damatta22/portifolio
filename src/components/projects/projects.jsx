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
  const projects = [
    {
      title: "Hamburgeria front-end",
      link: "https://damatta22.github.io/hamburgueria-front-end/",
      imgSrc: Hamburgeria,
      imgAlt: "picture-hamburgeria",
    },
    {
      title: "Hamburgeria back-end",
      link: "https://github.com/Damatta22/hamburgueria-back-end.git",
      imgSrc: BackEndHamb,
      imgAlt: "picture-hamburgeria-back-end",
    },
    {
      title: "Landing page commerce",
      link: "https://flaviodamata-mariofreela.netlify.app/",
      imgSrc: Frella,
      imgAlt: "project-frella-mario",
    },
    {
      title: "Siemens project",
      link: "https://flaviodamata-siemenswebserver.netlify.app/",
      imgSrc: Estic,
      imgAlt: "picture-siemens-project",
    },
    {
      title: "Easy shopping",
      link: "https://flaviodamata-easyshop.netlify.app/",
      imgSrc: Easy,
      imgAlt: "Easy-Shop",
    },

    {
      title: "Body mass index",
      link: "https://flaviodamata-bodymassindex.netlify.app/",
      imgSrc: Imc,
      imgAlt: "project-imc",
    },
    {
      title: "Rocket games",
      link: "https://damatta22.github.io/rocket-games/",
      imgSrc: Rocket,
      imgAlt: "picture-rocket-games",
    },
    {
      title: "Find your cep",
      link: "https://flaviodamata-findyourcep.netlify.app/",
      imgSrc: CEP,
      imgAlt: "project-busca-cep",
    },
    {
      title: "Weather forecast",
      link: "https://flaviodamata-weatherforecast.netlify.app/",
      imgSrc: Prevision,
      imgAlt: "project-prevision",
    },
  ];

  return (
    <>
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="projectsPage">
        <div className="projectsContainer">
          {projects.map((project, index) => (
            <a
              key={index}
              className="link-projects-git"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{project.title}</p>
              <img
                src={project.imgSrc}
                alt={project.imgAlt}
                width={300}
                height={300}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
