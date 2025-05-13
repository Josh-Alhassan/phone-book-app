import React, {useState} from 'react'


function Child( {setCount}) {
    return <Grandchild setCount={setCount} />
}

function Grandchild({setCount}) {
    return <button onClick={() => setCount(c => c + 1)}>Increment</button>
}

const AppTest = () => {
    const [count, setCount] = useState(0);
  return (

     <div>
        <h2>Parent Count: {count} </h2>
        <Child setCount={setCount} />
    </div> 
  )
}

export default AppTest