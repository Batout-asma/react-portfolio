import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="row">
          <div className="contact-left basis-[35%]">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <FontAwesomeIcon
                icon={["fas", "paper-plane"]}
                className="mr-4 text-[25px] text-[#65B741]"
              />
              batoutivaatbake@gmail.com
            </p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={["fas", "square-phone"]}
                className="mr-4 text-[25px] text-[#65B741]"
              />
              +213 000 000 000
            </p>
            <div className="social-icons mt-[30px]">
              <a href="https://www.instagram.com/batout_asma/">
                <FontAwesomeIcon icon={["fab", "instagram"]} className="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100074857811104&locale=fr_FR">
                <FontAwesomeIcon icon={["fab", "facebook"]} className="" />
              </a>
              <a href="https://github.com/Batout-asma">
                <FontAwesomeIcon icon={["fab", "github"]} className="" />
              </a>
              <a href="https://www.linkedin.com/in/batout-asma-675887229/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="" />
              </a>
            </div>
            <a href="/images/my-cv.pdf" download className="btn btn2 ">
              Download CV
            </a>
          </div>
          <div className="contact-right basis-[60%]">
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
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2 bg-[#65B741]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
