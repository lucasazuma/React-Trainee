import React, {useState} from 'react'

function Form(){
  const [name, setName] = useState("");

  function handleName(event){
    setName(event.target.value);
  }

  return(
    <form>
      <input type="text" value={name} onChange={handleName}/>
      <h3>{name}</h3>
    </form>
  )

}


export default Form