import "./information.css";
import BRflag from "../../assets/BRAflag.png"
import USflag from "../../assets/USAflag.jpg"

export function Info() {
  return (
    <div className="infos">
      <div className="languages-info">
        <h1>Languages</h1>
       
        <span> <img src={USflag} width={30} height={30}alt="flagimg"></img> 🇺🇸 EN- Intermediary</span>
       
        <span> <img src={BRflag} width={30} height={30}alt="flagimg"></img>🇧🇷 PT-BR- Native Speaker</span>
      </div>

      <div className="educational-info">
        <h1>Graduation</h1>

        <span>
          🎓Analisis and Systems Development Degree- Faculdade Pitágoras
          Anhanguera Unopar
        </span>
      </div>
    </div>
  );
}

export default Info;
