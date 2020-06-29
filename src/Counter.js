import React, {useState, useEffect} from 'react'

function Counter(){
  const [count, setCount] = useState(0);

  function IncreaseCount(){
    setCount(count + 1);
  }

  function DecreaseCount(){
    setCount(count - 1);
  }

  useEffect(() => {
    alert(`A conta é ${count}`)
  },[]);

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={IncreaseCount}>Aumentar</button>
      <button onClick={DecreaseCount}>Diminuir</button>
    </div>
  )
}

export default Counter