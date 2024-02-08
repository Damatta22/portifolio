import "./contactMe.css";
import { EmailIcon } from "../icons/email-icon";

export function Contact() {
  return (
    <a className="btn-primary" href="mailto:flaviodamataflv@gmail.com">
      contact me
      <EmailIcon />
    </a>
  );
}

export default Contact;
