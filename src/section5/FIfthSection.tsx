import "./fifthsection.css";
import Blog from "../blog/Blog";
import blog1 from "./blog01.png";
import blog2 from "./blog02.png";
import blog3 from "./blog03.png";
import blog4 from "./blog04.png";
import blog5 from "./blog05.png";

function FIfthSection() {
  return (
    <div className="fifth-section" id="blog">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="blog-list">
        <div className="first-blog">
          <Blog
            title={
              "GPT-3 and Open  AI is the future. Let us explore how it is?"
            }
            imageUrl={blog1}
            date={"Sep 26, 2021"}
          />
        </div>
        <div className="second-blog">
          <Blog
            title={
              "GPT-3 and Open  AI is the future. Let us explore how it is?"
            }
            imageUrl={blog2}
            date={"Sep 26, 2021"}
          />
          <Blog
            title={
              "GPT-3 and Open  AI is the future. Let us explore how it is?"
            }
            imageUrl={blog3}
            date={"Sep 26, 2021"}
          />
          <Blog
            title={
              "GPT-3 and Open  AI is the future. Let us explore how it is?"
            }
            imageUrl={blog4}
            date={"Sep 26, 2021"}
          />
          <Blog
            title={
              "GPT-3 and Open  AI is the future. Let us explore how it is?"
            }
            imageUrl={blog5}
            date={"Sep 26, 2021"}
          />
        </div>
      </div>
    </div>
  );
}

export default FIfthSection;
