import React from "react";

const page = ({ params }) => {
  return <div className="content-height">Hello ror {params.name}</div>;
};

export default page;
