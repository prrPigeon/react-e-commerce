import React from "react";

import "./menu.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`} // ova varijable {size } je kao dodatak ovoj klasi menu-item
  >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
