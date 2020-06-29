import React from 'react'

function Carro(props){
  return(
    <>
      <h1>Tipo: {props.tipo}</h1>
      <h1>Cor: {props.cor}</h1>
      <h1>Ano: {props.ano}</h1>
      <h1>Modelo: {props.modelo}</h1>
    </>
  )
}

export default Carro