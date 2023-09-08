import React, { useState } from 'react'

function UseState() {
    const [count, setCount]=useState(0)


    function updateCount(){setCount(count+1)}
  return (
    <div>
        <h1>
        Counter value:{count}
        <button onClick={()=>updateCount()}>Increment</button>
        <button onClick={()=>setCount(count=>count-1)}> Decrement</button>
       
        </h1>
       
    </div>
  )
}

export default UseState