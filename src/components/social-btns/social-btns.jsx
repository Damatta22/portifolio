import "./social-btns.css";
import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/invites/contact/?i=1kj4nxbg92dyl&utm_content=obrb7d9">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/fl%C3%A1viodamata/">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/Damatta22">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default SocialBtns;
