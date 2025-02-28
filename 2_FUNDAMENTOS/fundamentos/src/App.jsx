import { useState } from "react";

// Compenentes
import FirstComponent from "./components/FirstCompenent.jsx";
import TemplateExpressions from "./components/TemplateExpressions.jsx";
import Events from "./components/Events.jsx";
import Challenge from "./components/Challenge.jsx";

// CSS
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge/>
    </>
  );
}

export default App;
