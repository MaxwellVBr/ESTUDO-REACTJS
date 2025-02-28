const Challenge = () => {
    const valorPrimario = 5;
    const valorSecundario = 3;

    const valorTotal = () => {
        console.log (valorPrimario + valorSecundario);
    }

    return (
        <div>
            <div>
            <h1>Primeiro Valor: {valorPrimario}</h1>
            <h1>Segundo Valor: {valorSecundario}</h1>
            </div>
            <div>
                <button onClick={valorTotal}>Somar</button>
            </div>
        </div>
    )
}

export default Challenge;