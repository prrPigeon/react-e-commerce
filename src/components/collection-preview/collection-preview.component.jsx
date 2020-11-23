import React from "react";

import "./collection-preview.style.scss";

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {/* this filter and map will be executed every time,
        so it can be very bad if ther is a lot of item  */}
      {items
      .filter((item, index) => index < 4) // to display four items per section, not everything
      .map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} { ...otherItemProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
