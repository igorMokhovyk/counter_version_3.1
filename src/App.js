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


    const buttonDelete = (index) => {
        setCounters(counters.filter((el, i) => i !== index));
    }


    return (
        <div className="App">
            <header className="App-header">
                {counters.map((el, index) => <ButtonPlusMinus buttonDelete={buttonDelete} buttonReset={buttonReset} buttonMinus={buttonMinus} buttonPlus={buttonPlus} el={el}
                                                              index={index} key={Math.random()}/>)}
            </header>
        </div>
    );
}

export default App;
