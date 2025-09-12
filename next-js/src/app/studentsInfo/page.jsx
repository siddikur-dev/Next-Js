import { title } from "process";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This Page Is Student Info</h1>
    </div>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "Hello Developer Mamma",
    description: "This Is Developer Website ",
  };
}
