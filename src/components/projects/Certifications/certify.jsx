import "./certify.css";
import Preply from "../../../assets/30hours.png"
import EnSant from "../../../assets/englishSantander.png"
import Backend from "../../../assets/backEnd.png"
import Front from "../../../assets/cursoemvideo.png"
import Senaifront from "../../../assets/senaiFront.png"


function Certify (){


    const certify = [
        {
          title: "English preply",
          imgSrc: Preply,
          imgAlt: "Preplycertificadoimg",
        },
        {
            title: "English Santander",
            imgSrc: EnSant,
            imgAlt: "Santandercertificadoimg",
          },
          {
            title: "Back-end Course",
            imgSrc: Backend,
            imgAlt: "Backcertificadoimg",
          },
          {
            title: "Front-end Course",
            imgSrc: Front,
            imgAlt: "Front-endcertificadoimg",
          },
          {
            title: "Front-end Senai",
            imgSrc: Senaifront,
            imgAlt: "Senaicertificadoimg",
          },
        ]




return (
    <>
     <div className="divisor">
        {" "}
        <hr className="divisor" />
      </div>
      <div className="title">
        <h1>CERTIFICATIONS</h1>
      </div>
      <div className="certifyPage">
        <div className="certifyContainer">
          {certify.map((certify, index) => (
            <a
              key={index}
              className="link-certify-git"
              href={certify.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{certify.title}</p>
              <img
                src={certify.imgSrc}
                alt={certify.imgAlt}
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





export default Certify;