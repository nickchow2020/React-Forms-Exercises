import React,{useState} from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"
const BoxList = () =>{

    const [boxes,setBoxes] = useState([])

    const updateBoxes = (box)=>{
        setBoxes(boxes => ([...boxes,box]))
    }


    const deleteBox = (id) =>{
        setBoxes(boxes => (
            boxes.filter(box => box.id !== id)
        ))
    }


    return (
        <div className="boxesWrapper">
            <NewBoxForm updateBoxes={updateBoxes} />
            <div className="boxesContent">
                {
                    boxes.map( 
                        ({width, height,backgroundColor,id}) => <Box 
                        width={width} 
                        height={height} 
                        backgroundColor={backgroundColor} 
                        key={id}
                        id={id}
                        deleteBox={deleteBox}
                        />)
                }
            </div>
        </div>
    )
}   

export default BoxList