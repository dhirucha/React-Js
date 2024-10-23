import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Dheeraj",
    age: 19
  }

  return (
    <>
      <h1 className="text-8xl bg-slate-400 text-black p-4 rounded-xl">
        Tailwind Test
      </h1>
      <Card name='Dheeraj'/>
    </>
  );
}

export default App;
