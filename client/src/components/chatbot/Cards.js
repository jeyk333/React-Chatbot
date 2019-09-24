import React from "react";

const Cards = props => {
  return (
    <div style={{ width: 270, paddingRight: 30, float: "left" }}>
      <div className="card">
        <div className="card-image" style={{ width: 240 }}>
          <img
            src={props.payload.fields.image.stringValue}
            alt={props.payload.fields.header.stringValue}
          />
          <span className="card-title">
            {props.payload.fields.header.stringValue}
          </span>
        </div>
        <div className="card-content">
          <p>{props.payload.fields.description.stringValue}</p>
          <p>
            <a>{props.payload.fields.price.stringValue}</a>
          </p>
        </div>
        <div className="card-action">
          <a target="_blank" href={props.payload.fields.link.stringValue}>
            Get Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
