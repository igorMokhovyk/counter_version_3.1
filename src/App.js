import React, {useState} from 'react';

import './App.css';
import ButtonPlusMinus from "./ButtonsPlusMinus";

function App() {


    const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);

    const buttonPlus = (index) => {
        const newArr = counters.map((el, i) => {
            if (i === index) {
                return el + 1;
            }
            return el;
        })
        setCounters(newArr);

    }

    const buttonMinus = (index) => {
        const newArr2 = counters.map((el, i) => {
            if (i === index) {
                return el - 1;
            }
            return el;
        })
        setCounters(newArr2);
    }

    const buttonReset = (index) => {
        const newArr3 = counters.map((el, i) => {
            if (i === index) {
                return 0;
            }
            return el;
        })
        setCounters(newArr3);
    }

    const deleteCounter = (index) => {
        const deleter = counters.filter((el, i) => i !== index);
        setCounters(deleter)
    }





    return (
        <div className="App">
            <header className="App-header">

                {counters.map((el, index) => <ButtonPlusMinus deleteCounter={deleteCounter}  buttonReset={buttonReset} buttonMinus={buttonMinus} buttonPlus={buttonPlus}
                                                              index={index} el={el}
                                                              key={Math.random()}/>)}

            </header>
        </div>
    );
}

export default App;
