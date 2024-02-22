import "./contactMe.css";
import { EmailIcon } from "../icons/email-icon";

export function Contact() {
  return (
    <div className="links">
      <a className="btn-primary" href="mailto:flaviodamataflv@gmail.com">
        contact me
        <EmailIcon />
      </a>
    </div>
  );
}

export default Contact;
