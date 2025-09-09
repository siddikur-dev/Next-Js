import React from "react";

const page = ({ params }) => {
  return <div>Student Name From Dynamic URL: {params.student}</div>;
};

export default page;
