"use client"
import { useState } from "react";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen">
      <Menu color="black" />
      <Counter />
    </main>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  }

  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">{counter}</h1>
      <form className="flex flex-col items-center justify-center p-4 space-y-4">
        <button onClick={handleDecrement} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Reducir numero</button>
        <button onClick={handleIncrement} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Incrementar numero</button>
      </form>
    </div>
  );
}
