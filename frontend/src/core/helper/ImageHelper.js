import React from "react";
import { IMAGE_URL } from "../../Backend";

const ImageHelper = ({ subject }) => {
  const imageurl = subject
    ? `${IMAGE_URL}/${subject.image}`
    : "http://127.0.0.1:8000/media/images/c_progamming.png";
  return (
    <div>
      <div className="rounder border border-success p-2">
        <img
          className="mb-3 rounded"
          src={imageurl}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          alt="Image"
        />
      </div>
    </div>
  );
};
export default ImageHelper;
