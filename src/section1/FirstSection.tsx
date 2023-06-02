import "./firstsection.css";
import Ai from "./ai.png";
import people from "./people.png";
import google from "./google.png";
import slack from "./slack.png";
import shopify from "./shopify.png";
import dropbox from "./dropbox.png";
import atlassian from "./atlassian.png";

function FirstSection() {
  return (
    <div className="first-section" id="home">
      <div className="introduction">
        <div className="content-wrapper">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="input-section">
            <input type="text" placeholder="Your email adress" />
            <button className="get-started-button"> Get Started</button>
          </div>
          <div className="people-section">
            <img src={people} alt="People" />
            <span>
              {" "}
              1,600 people requested access a visit in last 24 hours{" "}
            </span>
          </div>
        </div>
        <img className="ai-image" src={Ai} alt="Ai" />
      </div>
      <div className="footer">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopifu" />
      </div>
    </div>
  );
}

export default FirstSection;
