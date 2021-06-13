import React,{useState} from "react"
import "./NewBoxForm.css"
import { v4 as uuid } from 'uuid'
const NewBoxForm = ({updateBoxes})=>{
    const INITIAL_VALUES = {
        id:"",
        width:"",
        height:"",
        backgroundColor:""
    }

    const [boxVal,setBoxVal] = useState(INITIAL_VALUES)

    const handleChange = (e)=>{
        let {name,value} = e.target

        setBoxVal(boxVal => ({
            ...boxVal,
            id:uuid(),
            [name]:value,
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        updateBoxes(boxVal)
        setBoxVal(val=>INITIAL_VALUES)
    }

    const {width,height,backgroundColor} = boxVal

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Box</h1>
            <label htmlFor="background">Background_Color:
                <input 
                type="text" 
                name="backgroundColor" 
                id="background" 
                value={backgroundColor} 
                placeholder="background color"
                data-testid="color"
                onChange={handleChange}/>
            </label>

            <label htmlFor="width">Box_width:
                <input type="text" 
                name="width" id="width" 
                placeholder="box width" 
                value={width} 
                data-testid="width"
                onChange={handleChange}/>
            </label>

            <label htmlFor="height">Box_height:
                <input type="text" 
                name="height" 
                id="height" 
                placeholder="box height" 
                value={height} 
                data-testid="height"
                onChange={handleChange}/>
            </label>

            <button data-testid="submit">Add Now Box</button>
        </form>
    )
}

export default NewBoxForm