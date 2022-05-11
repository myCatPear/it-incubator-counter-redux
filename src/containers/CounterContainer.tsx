import React from 'react';
import CounterPresent from "../components/Counter/CounterPresent";
import {StateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {CounterType} from "../redux/counter-reducer";
import {
    changeMaxValueAC,
    changeStartValueAC,
    incrementCounterValueAC,
    resetCounterValueAC,
    setCounterFromStartValueAC
} from "../redux/actions";

export const CounterContainer = () => {
    const dispatch = useDispatch()

    const {
        startValue,
        maxValue,
        counter,
        isDisabledButtonSet,
        isDisabledButtonReset,
        isDisabledButtonIncrementCount
    } = useSelector<StateType, CounterType>(state => state.counter)

    const setCounterFromStartValueHandler = () => dispatch(setCounterFromStartValueAC())

    const changeStartValue = (newValue: number) => dispatch(changeStartValueAC(newValue))
    const changeMaxValue = (newValue: number) => dispatch(changeMaxValueAC(newValue))
    const incrementCounterValue = () => dispatch(incrementCounterValueAC())
    const resetCounterValue = () => dispatch(resetCounterValueAC())


    const errorInput =
        maxValue <= 0 ||
        startValue < 0 ||
        startValue > maxValue ||
        maxValue === startValue ||
        typeof startValue === 'string'

    //Если ввели неверное значение, то счетчик будет показывать Error Input, если изменили вводные цифры или приложение только запустилось то в счетчике будет Enter the value
    const counterValue = errorInput ? 'Error input' :
        isDisabledButtonSet ? counter : "Enter the value"

    const maxCountValue = counter === maxValue

    return (
        <div>
            <CounterPresent
                startValue={startValue}
                maxValue={maxValue}
                counter={counterValue}
                setCounterFromStartValueHandler={setCounterFromStartValueHandler}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                incrementCounterValue={incrementCounterValue}
                errorInput={errorInput}
                isDisabledButtonSet={isDisabledButtonSet}
                isDisabledButtonReset={isDisabledButtonReset}
                isDisabledButtonIncrementCount={isDisabledButtonIncrementCount}
                maxCountValue={maxCountValue}
                resetCounterValue={resetCounterValue}
            />
        </div>
    );
};