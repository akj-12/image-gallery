import React from "react";
import "../App.css";

function Card({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="ui card ui-card-shadow">
      <div className="image">
        <img src={image.webformatURL} alt="" />
      </div>
      <div className="content">
        <div className="header ui teal">
          <strong>Photo By : </strong>
          {image.user}
        </div>

        <div className="description">
          <div>
            <strong>Views : </strong>
            {image.views}
          </div>
          <div>
            <strong>Downloads : </strong>
            {image.downloads}
          </div>
          <div>
            <strong>Likes : </strong>
            {image.likes}
          </div>
        </div>
      </div>
      <div className="extra content ui labels">
        {tags.map((tag, index) => (
          <div className="ui label" key={index}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
