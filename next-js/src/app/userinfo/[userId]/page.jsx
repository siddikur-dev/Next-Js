import React from "react";

const page = ({params}) => {
  return (
    <div>
      <h4>User Info Is: {params.userId}</h4>
    </div>
  );
};

export default page;
