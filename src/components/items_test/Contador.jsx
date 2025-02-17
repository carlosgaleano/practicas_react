import { useState } from "react";

const Contador = () => {

    const [Count, setCount]=useState(0);

    return (

        <>
        <h1>Contador</h1>
        <h2>{Count}</h2>
        <button onClick={()=>setCount(Count+1)}  >+</button>
        <button onClick={()=>setCount(Count-1)}  >-</button>
        
        </>
    )


};


export default Contador;