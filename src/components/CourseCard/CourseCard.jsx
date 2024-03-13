import AccImg from "../../assets/Blog2.png";
import DateImg from "../../assets/Blog1.png";

export default function CourseCard(props) {
    return (
      <>
        <div className="blog-card">
        <div className="blog-topic">{props.BlogTopic}</div>
          <img src={props.BlogImg} alt="" />
          <div className="date">
            <img src={DateImg} alt="" />
            <span>{props.date}</span>
          </div>
          <div className="blog-heading">
            <h3>{props.BlogHeading}</h3>
          </div>
          <div className="blog-card-footer">
            <div className="publisher">
              <img src={AccImg} alt="" />
              <span>{props.Account}</span>
            </div>
            <div className="read-more">
              <a href={props.BlogLink} target="blank">
                Read More <span>+</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  