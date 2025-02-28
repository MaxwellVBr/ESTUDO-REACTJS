import React from 'react'

const Container = ({ children, meuValor }) => {
  return (
    <div>
        <h2>Container com Children</h2>
        {children}
        <p>Esse é o valor: {meuValor}</p>
    </div>
  )
}

export default Container