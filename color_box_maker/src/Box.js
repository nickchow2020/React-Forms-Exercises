import React from "react"
import "./Box.css"
const Box = ({width,height,backgroundColor,id,deleteBox})=>{


    const handleClick = ()=>{
        deleteBox(id)
    }

    return(
        <div>
            <div 
            className="box" 
            id={id}
            style={{
                width:`${width}px`,
                height:`${height}px`,
                backgroundColor}}>
            </div>
            <button onClick={handleClick} data-testid="remove">X</button>
        </div>
    )
}


export default Box;