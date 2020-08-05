import React from "react";

export default function Images(props) {
  return (
    <div>
      <img src={props.imgURL} alt={"searchImg"} className="Product-Image" />
    </div>
  );
}
