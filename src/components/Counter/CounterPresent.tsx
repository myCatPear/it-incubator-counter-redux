import { Button, TextField } from '@mui/material';
import React from 'react';
import s from './CounterPresent.module.css'


type CounterPresentPropsType = {
    startValue: number,
    maxValue: number,
    counter: string | number,
    setCounterFromStartValueHandler: () => void,
    changeStartValue: (newValue: number) => void,
    changeMaxValue: (newValue: number) => void,
    incrementCounterValue: () => void,
    errorInput: boolean,
    isDisabledButtonSet: boolean,
    isDisabledButtonReset: boolean,
    isDisabledButtonIncrementCount: boolean,
    maxCountValue:boolean,
    resetCounterValue:() => void
}

const CounterPresent: React.FC<CounterPresentPropsType> = (props) => {
    const {
        maxValue,
        startValue,
        counter,
        setCounterFromStartValueHandler,
        changeStartValue,
        changeMaxValue,
        incrementCounterValue,
        errorInput,
        isDisabledButtonSet,
        isDisabledButtonReset,
        isDisabledButtonIncrementCount,
        maxCountValue,
        resetCounterValue
    } = props
    return (
        <>
            <div className={s.container}>
                <div>
                    startValue: <input
                    type={"number"}
                    value={startValue}
                    onChange={(e) => changeStartValue(+e.currentTarget.value)}
                />
                </div>
                <div>

                    MaxValue: <input
                    type={"number"}
                    value={maxValue}
                    onChange={(e) => changeMaxValue(+e.currentTarget.value)}
                />
                </div>
                <div>
                    <Button variant="contained" onClick={setCounterFromStartValueHandler} disabled={isDisabledButtonSet}>Set</Button>
                    <Button variant="contained" onClick={incrementCounterValue} disabled={isDisabledButtonIncrementCount || maxCountValue}>+</Button>
                    <Button variant="contained" onClick={resetCounterValue} disabled={isDisabledButtonReset}>reset</Button>
                </div>
                <div>
                    {counter}
                </div>
            </div>

        </>

    );
};

export default CounterPresent;