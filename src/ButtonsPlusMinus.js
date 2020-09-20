import React from "react";

function ButtonPlusMinus(props) {


    const buttonsCounters = props.el;

    const buttonPlus = () => {
        props.buttonPlus(props.index)
    }

    const buttonMinus = () => {
        props.buttonMinus(props.index)
    }

    const buttonReset = () => {
        props.buttonReset(props.index)
    }

    const buttonDelete = () => {
        props.buttonDelete(props.index)
    }


    return (
        <div>
            <button onClick={buttonPlus}>+</button>
            {buttonsCounters}
            <button onClick={buttonMinus}>-</button>
            <button onClick={buttonReset}>Reset</button>
            <button onClick={buttonDelete}>Delete</button>
        </div>
    );
}

export default ButtonPlusMinus;