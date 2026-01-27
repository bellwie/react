import { useState } from "react";
import night from "./assets/night.jpg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Data from "./components/Data";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avancando em react</h1>
      <img src="/img.jpg" alt="" />
      <img src={night} alt="algo" />
      <Data></Data>
    </div>
  );
}

export default App;
