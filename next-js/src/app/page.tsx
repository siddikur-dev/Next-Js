"use client";
export default function Home() {
  const alertFun = () => {
    alert("Hey this is Next Js");
  };
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <button onClick={alertFun}>Show Alert</button>
    </main>
  );
}
