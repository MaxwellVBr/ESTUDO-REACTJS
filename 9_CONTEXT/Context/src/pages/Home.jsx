import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 5 - Contexto mais Complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  const {counter} = useContext(CounterContext);

  // 5 - Contexto mais Complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - Alterando State Complexo
const setTitleColor = (color) => {
  dispatch ({type: color});
};

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando Context */}
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home