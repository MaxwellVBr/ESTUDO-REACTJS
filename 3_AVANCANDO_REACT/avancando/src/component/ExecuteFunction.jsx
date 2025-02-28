const ExecuteFunction = ({ showMessage }) => {
  return (
    
    <div>
        {/*Não inserir as () Pois executaria a função ao carregar a página */}
        <button onClick={showMessage}>Clique aqui!</button>
    </div>
  )
}

export default ExecuteFunction