import { title } from "process";
import React from "react";

const page = ({ params }) => {
  return <div>Student Name From Dynamic URL: {params.student}</div>;
};

export default page;

export function generateMetadata({ params }) {
  return {
    title: ` Hey Mamma ${params.student}`,
  };
}
