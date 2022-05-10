import React from 'react';

type CounterPresentPropsType = {
    startValue: number,
    maxValue: number,
    counter:string | number,
    setCounterFromStartValueHandler:() => void
}

const CounterPresent: React.FC<CounterPresentPropsType> = (props) => {
    const {
        maxValue,
        startValue,
        counter,
        setCounterFromStartValueHandler
    } = props
    return (
        <>
            <div>
                startValue: <input type={"number"} value={startValue}/>
            </div>
            <div>
                MaxValue: <input type={"number"} value={maxValue}/>
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