import "./header.css";
import Image from "../../assets/profile-pic (3).png";

export function Header() {
  return (
    <>
      <div className="header">
        <h1>
          Hi!👋<br></br> I´m Flávio da Mata!<br></br>Front-end Developer
        </h1>

        <img
          src={Image}
          width={320}
          height={320}
          alt="Picture Perfil"
          title="picture perfil"
        />
      </div>
    </>
  );
}

export default Header;
