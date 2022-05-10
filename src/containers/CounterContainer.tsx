import React from 'react';
import CounterPresent from "../components/Counter/CounterPresent";
import {StateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {CounterType} from "../redux/counter-reducer";
import {changeMaxValueAC, changeStartValueAC, setCounterFromStartValueAC} from "../redux/actions";

export const CounterContainer = () => {
    const dispatch = useDispatch()

    const {
        startValue,
        maxValue,
        counter
    } = useSelector<StateType, CounterType>(state => state.counter)

    const setCounterFromStartValueHandler = () => dispatch(setCounterFromStartValueAC())

    const changeStartValue = (newValue:number) => dispatch(changeStartValueAC(newValue))
    const changeMaxValue = (newValue:number) => dispatch(changeMaxValueAC(newValue))

    return (
        <div>
            <CounterPresent
                startValue={startValue}
                maxValue={maxValue}
                counter={counter}
                setCounterFromStartValueHandler={setCounterFromStartValueHandler}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
            />
        </div>
    );
};