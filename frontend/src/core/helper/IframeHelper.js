import React from "react";
import { IMAGE_URL } from "../../Backend";

const IframeHelper = ({ topic }) => {
  const iframeurl = topic
    ? topic.link
    : "";
  return (
    <div>
      <div className="rounder border border-success p-2">
        <iframe
          id="videoFrame"
          src={iframeurl}
          height="350%"
          width="100%"
          title="Iframe Example"
        ></iframe>
      </div>
    </div>
  );
};
export default IframeHelper;
