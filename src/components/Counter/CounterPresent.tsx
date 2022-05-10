import React from 'react';

type CounterPresentPropsType = {
    startValue: number,
    maxValue: number,
    counter:string | number,
    setCounterFromStartValueHandler:() => void,
    changeStartValue:(newValue:number) => void,
    changeMaxValue:(newValue:number) => void,
}

const CounterPresent: React.FC<CounterPresentPropsType> = (props) => {
    const {
        maxValue,
        startValue,
        counter,
        setCounterFromStartValueHandler,
        changeStartValue,
        changeMaxValue
    } = props
    return (
        <>
            <div>
                startValue: <input type={"number"} value={startValue} onChange={(e) => changeStartValue(+e.currentTarget.value)}/>
            </div>
            <div>
                MaxValue: <input type={"number"} value={maxValue} onChange={(e) => changeMaxValue(+e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={setCounterFromStartValueHandler}>Set</button>
            </div>
            <div>
                Counter: {counter}
            </div>
        </>

    );
};

export default CounterPresent;