import React from "react";

const QuickReply = props => {
  if (props.reply.structValue.fields.payload) {
    return (
      <a
        href="#"
        style={{ margin: 3 }}
        className="btn-floating btn-large waves-effect waves-light darkblue"
        onClick={event => {
          props.click(
            event,
            props.reply.structValue.fields.payload.stringValue,
            props.reply.structValue.fields.text.stringValue
          );
        }}
      >
        {props.reply.structValue.fields.text.stringValue}
      </a>
    );
  } else {
    return (
      <a
        href={props.reply.structValue.fields.link.stringValue}
        className="btn-floating btn-large waves-effect waves-light"
        style={{ background: "darkblue", margin: 3 }}
      >
        {props.reply.structValue.fields.text.stringValue}
      </a>
    );
  }
};

export default QuickReply;
