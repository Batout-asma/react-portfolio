import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>batoutivaatbake@gmail.com</p>
            <p>+213 000 000 000</p>
            <div className="social-icons">
              <a href="">
                <FontAwesomeIcon icon={faFacebook} className="" />
              </a>
              <a href="https://www.instagram.com/batout_asma/">
                <FontAwesomeIcon icon={faInstagram} className="" />
              </a>
              <a href="https://github.com/Batout-asma">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="text"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6 "
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
