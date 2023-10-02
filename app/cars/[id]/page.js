import React from "react";

const page = ({ params }) => {
  return <div className="content-height">Hello {params.id}</div>;
};

export default page;
