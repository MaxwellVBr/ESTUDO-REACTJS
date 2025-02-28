const UserDetail = ({ nomeUser, idadeUser, profissaoUser}) => {
  return (
    <div>
        <ul>
            <li>Nome: {nomeUser}</li>
            <li>Idade: {idadeUser}</li>
            <li>Profissão: {profissaoUser}</li>
            <li>{idadeUser >= 18 ? (
                <p>Autorizado emissão de CNH</p>
            ) : (
                <p>Negado emissão de CNH</p>
            )}</li>
        </ul>
    </div>
  )
}

export default UserDetail