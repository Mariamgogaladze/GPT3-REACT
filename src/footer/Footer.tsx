import "./footer.css";
import logo from "./logo.svg";
function Footer({ author }: { author: string }) {
  return (
    <div className="footer-container">
      <div className="header-section">
        <h1>Do you want to step in to the future before others</h1>
      </div>
      <div className="footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="main-section">
        <div className="first-part">
          <img src={logo} alt="logo" />
          <span>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </span>
        </div>
        <div className="second-part">
          <p>Links</p>
          <ul className="footer-list">
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="third-part">
          <p>Company</p>
          <ul className="footer-list">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="fourth-part">
          <p>Get in touch</p>
          <ul className="footer-list">
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          @2021 GPT-3. All rights reserved. <br /> <br /> Author : {author}
        </p>
      </div>
    </div>
  );
}

export default Footer;
