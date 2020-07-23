import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__flash">
      <img className="imagen" src={url} alt={title} />
      <p className="text">{title}</p>
    </div>
  );
};
