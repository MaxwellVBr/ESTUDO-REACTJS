const TemplateExpressions = () => {

    const name = "Maxwell"
    const date = {
        age: 29,
        job: "Programador"
    }
       

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como {date.job}</p>
            <p>{4+4}</p>
        </div>
    )
}

export default TemplateExpressions;