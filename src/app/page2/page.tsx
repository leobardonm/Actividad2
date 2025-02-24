"use client"
import { useState } from "react";
import Menu from "../components/Menu";

export default function Page2() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen">
      <Menu color="orange" />
      <RectangleColor />
    </main>
  );
}

function RectangleColor() {
  const [rectColor, setRectColor] = useState("bg-gray-500");

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className={`w-64 h-64 rounded ${rectColor}`}></div>
      <div className="grid grid-cols-2 gap-4 mt-4 w-64">
        <button onClick={() => setRectColor("bg-red-500")} className="bg-red-500 text-white p-2 rounded w-full">Rojo</button>
        <button onClick={() => setRectColor("bg-green-500")} className="bg-green-500 text-white p-2 rounded w-full">Verde</button>
        <button onClick={() => setRectColor("bg-blue-500")} className="bg-blue-500 text-white p-2 rounded w-full">Azul</button>
        <button onClick={() => setRectColor("bg-yellow-500")} className="bg-yellow-500 text-white p-2 rounded w-full">Amarillo</button>
      </div>
    </div>
  );
}

