// 3 - Alterando Context

import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const { counter, setCounter} = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Adicione +1</button>
    </div>
  )
}

export default ChangeCounter