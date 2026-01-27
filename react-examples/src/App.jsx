import { useState } from "react";
import night from "./assets/night.jpg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Avancando em react</h1>
      <img src="/img.jpg" alt="" />

      <img src={night} alt="algo" />
    </div>
  );
}

export default App;
