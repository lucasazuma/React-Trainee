import React, {useState} from 'react'
import Carro from './Props.js'

function State(){
  const [carro, setCarro] = useState({
    tipo: "fusca",
    Cor: "amarelo",
    Ano: "1970",
    Modelo: "gt",
  })

  function handleCarro(){
    setCarro({
      tipo: "camaro",
      Cor: "azul",
      Ano: "2000",
      Modelo: "ss",
    }
    )
  }

  return(
    <div>
      <Carro tipo={carro.tipo} cor={carro.Cor} ano={carro.Ano} modelo={carro.Modelo}/>
      <button onClick={handleCarro}>Mudar carro</button>
    </div>
  )
}

export default State;