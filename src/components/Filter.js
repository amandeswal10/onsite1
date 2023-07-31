import { useState } from "react"

// Improve this rendering

export const Filter = () => {

    const input = ['a','b','c']

    const [found, setFound] = useState(0)

    const sortInput = (input) => {
        console.log(input.length)
        for(var i=0; i<input.length; i++){
            if(input[i]=== 'a'){
                setFound((found)=> found += 1);
            }
            else console.log(input[i] + " is not 'a'");
        }
    }

    return (
        <>
        <button style={{width:"250px", height:"250px"}} onClick={()=>sortInput(input)}>Check</button>
        <h1>{found}</h1>
        </>
    )
}