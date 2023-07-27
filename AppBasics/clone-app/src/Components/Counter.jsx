import { useState } from "react"

export default function Counter(){
    

    let [count,setcount]=useState(0);
function handleinc(){
setcount(count+1);
}

function handledec(){
    if(count<1){
        alert("Negative");
    }
    else{
        setcount(count-1);
    }

}

    
    return(
        <>
        <h1>Count is {count}</h1>
        <button onClick={handleinc}>Inc</button>
        <button onClick={handledec}>Dec</button>

        </>
        
    )
}