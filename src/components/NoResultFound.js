import React from "react";

function NoResultFound() {
  return (
    <div className=" ui centered row">
      <img
        className="ui large  image"
        style={{ margin: "50px 0px" }}
        src="./noResult.png"
        alt="No result found"
      />
    </div>
  );
}

export default NoResultFound;
