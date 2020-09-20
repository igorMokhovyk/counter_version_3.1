import React, {useState} from "react";

function AddButton (props) {

    const [value, setValue] = useState('');

    const inputValue = (event) => {
        setValue(+event.target.value);
    }




    const addCounter = () => {
        props.addButton(value)
        setValue('');
    }




    return (
        <div>

            <button onClick={addCounter} >Add</button>
            <hr/>
            <input type='text' onChange={inputValue} value={value}/>
        </div>
    )
}

export default AddButton;