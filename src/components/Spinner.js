import React from "react";

function Spinner() {
  return (
    <div className="ui">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );
}

export default Spinner;
