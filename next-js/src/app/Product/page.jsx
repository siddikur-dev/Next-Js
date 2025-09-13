"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
    const router=useRouter()
  const placeOrder = () => {
    // alert("done");
    router.push("/")
  };
  return (
    <div>
      <h2>Product Page:</h2>
      <li>Buy For Mou</li>
      <button onClick={placeOrder}>Confirm For Mou</button>
    </div>
  );
};

export default page;
