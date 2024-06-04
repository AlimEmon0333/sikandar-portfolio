import './style.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div>
        <div className="footer d-flex flex-column justify-content-center align-items-center mt-5 gap-4 p-5">
          <img src={require("../../images/logo.png")} alt="logo" />
          <p className="text-white text-center">
            Transform Your Business with Sikandar Panjwani Digital and <br />{" "}
            international marketing expertise
            <hr className="mt-4" />
          </p>
          <div className="icons m-3 d-flex">
                <FaFacebookF className="facebook-icon-footer" />
                <FaTiktok className="tiktok-icon-footer" />
                <FaLinkedinIn className="linkedin-icon-footer" />
                <FaYoutube className="youtube-icon-footer" />
              </div>
        </div>
      </div>
      <div className="bg-black">
        <p className="text-white text-center p-3" style={{ marginBottom:"0px" }}>
          Copyright &copy; {year} - Sikandar Panjwani - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;