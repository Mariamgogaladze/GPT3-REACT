import "./blog.css";
type BlogProps = {
  imageUrl: string;
  title: string;
  date: string;
};

function Blog({ imageUrl, title, date }: BlogProps) {
  return (
    <div className="blog">
      <div className="imagediv">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="content">
        <span className="blogspan">{date}</span>
        <p>{title}</p>
        <span className="blogspan">Read full Article</span>
      </div>
    </div>
  );
}

export default Blog;
