import React from "react";

const Loading: React.FC<{ center: boolean }> = ({ center }) => {
  return <div className={center ? "loading loading-center" : "loading"} />;
};

export default Loading;
