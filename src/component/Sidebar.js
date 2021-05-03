import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <span className="heading1">Dev</span>chanallenge.io
      </div>
      <div className="menu-item">
        <ul>
          <li>Color</li>
          <li>Typography</li>
          <li>Buttons</li>
          <li>Input</li>
          <li>Grid</li>
        </ul>
      </div>
    </div>
  );
};
export { Sidebar };
