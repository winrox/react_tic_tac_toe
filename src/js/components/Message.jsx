import React from 'react';

 const Message = (props) => (
  <div className="center-text">
    <h2 className="alert-message">
      {props.message}
    </h2>
  </div>
)
export default Message;
