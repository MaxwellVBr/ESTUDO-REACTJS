import { useState } from "react"

const ConditionalRender = () => {

    const [name, setName] = useState("Joao");
  return (
    <div>
        <h1>IF Ternario</h1>
        {name === "Joao" ? (
            <div>
                <p>É Verdadeira</p>
            </div>
        ) : (
            <div>
                <p>É Falsa</p>
            </div>
        )}
        <div>
            <button onClick={() => setName ("Maxwell")}>Click!</button>
        </div>
    </div>
  )
}

export default ConditionalRender