import React, {Component} from 'react';

const Test = (props) => {
  console.log('Rendering <Message />');
  return (
    <div className="mui-container">
      <div className="mui-panel">
        <h1>Example Card</h1>
        <div className="mui-dropdown">
          <button className="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
            Dropdown
            <span className="mui-caret"></span>
          </button>
          <ul className="mui-dropdown__menu">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
            <li><a href="#">Option 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Test;
