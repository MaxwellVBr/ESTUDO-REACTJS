import { useState } from 'react'
import './App.css'
import Title from './component/Title';

function App() {
  const [count, setCount] = useState(0)
  const n = 15;
  const redTitle = true;

  return (
    <>
      <div>
        {/* Dinâmico css */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
      <h1 className="title">Este não recebe título do CSS modules</h1>

      </div>
    </>
  )
}

export default App
