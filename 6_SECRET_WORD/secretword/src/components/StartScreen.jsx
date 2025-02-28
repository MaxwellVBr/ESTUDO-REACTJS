import "./StartScreen.css";

const StartScreen = ({ startgame }) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão para começar</p>
        <button onClick={startgame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen