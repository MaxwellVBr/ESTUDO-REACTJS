import { useState } from 'react'
import './App.css'

import City from "./assets/city.jpg"
import ManageData from './component/ManageData'
import ListRender from './component/ListRender'
import ConditionalRender from './component/ConditionalRender'
import ShowUserName from './component/ShowUserName'
import CarDetails from './component/CarDetails'
import Container from './component/Container'
import ExecuteFunction from './component/ExecuteFunction'
import Message from './component/Message'
import ChangeMessageState from './component/ChangeMessageState'
import UserDetail from './component/UserDetail'

function App() {
  const [count, setCount] = useState(0)

  const [userName] = useState("Pedro");
  const userName1 = "Joao";
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 32423},
    {id: 3, brand: "Renault", color: "Azul", newCar: true, km: 2323},
  ];

  function showMessage () {
    console.log("Mensagem da função");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const dadosCliente = [
    {id: 1, nome: "Maxwell", idade: 29, profissao: "Desempregado"},
    {id: 2, nome: "Pedro", idade: 14, profissao: "Estudante"},
    {id: 3, nome: "Isabelle", idade: 22, profissao: "Atendente"},
  ]

  return (
    <>
      <div>
        <h1>Avancando React</h1>
      </div>
      {/* IMAGEM PUBLICA */}
      <div>
        <img src="/img1.jpg" alt="imagem1" />
      </div>
      {/* IMAGEM IMPORTADA */}
      <div>
        <img src={City} alt="Imagem2" />
      </div>
      <div>
      <ManageData/>
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <ShowUserName name={userName1}/>
      <CarDetails brand="VW" km={10000} cor="azul" />
      {/* Rendereização por LOOT em Array */}
      {cars.map((car) =>(
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        km={car.km} 
        cor={car.color}/>
      ))}
      {/* Container com Children */}
      <Container meuValor={100}>
        <p>Conteudo do Children</p>
      </Container>
      {/* Executando Função */}
      <ExecuteFunction showMessage={showMessage} />
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

      {dadosCliente.map((user) => (
        <UserDetail 
        key={user.id}
        nomeUser={user.nome}
        idadeUser={user.idade}
        profissaoUser={user.profissao}
        />
      ))}
        
    </>
  )
}

export default App
