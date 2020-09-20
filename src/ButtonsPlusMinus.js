import React from "react";

function ButtonPlusMinus(props) {

    const counterElements = props.el;

    const buttonPlus = () => {
        props.buttonPlus(props.index);
    }

    const buttonMinus = () => {
        props.buttonMinus(props.index)
    }

    const buttonReset = () => {
        props.buttonReset(props.index)
    }

    const buttonDeleter = () => {
        props.deleteCounter(props.index)
    }

    return (
        <div>
            <button onClick={buttonPlus}>+</button>
            {counterElements}
            <button onClick={buttonMinus}>-</button>
            <button onClick={buttonReset}>Reset</button>
            <button onClick={buttonDeleter}>Delete</button>
        </div>
    );
}

export default ButtonPlusMinus;