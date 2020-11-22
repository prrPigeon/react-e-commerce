import React from "react";

import { withRouter } from 'react-router-dom';

import "./menu.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
  <div
    className={`${size} menu-item`} // ova varijable {size } je kao dodatak ovoj klasi menu-item
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
  >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// with wraping with withRouter we have acess to history
export default withRouter(MenuItem);
