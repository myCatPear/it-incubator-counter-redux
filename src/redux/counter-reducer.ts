import {ActionType, ACTIONS_TYPE} from "./actions"

export type CounterType = {
    startValue: number,
    maxValue: number,
    counter: number,
    isDisabledButtonSet: boolean,
    isDisabledButtonIncrementCount: boolean,
    isDisabledButtonReset: boolean,
}

const initialState: CounterType = {
    startValue: 0,
    maxValue: 1,
    counter: 0,
    isDisabledButtonIncrementCount: true,
    isDisabledButtonReset: true,
    isDisabledButtonSet: false
}

export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case ACTIONS_TYPE.COUNTER_REDUCER_INCREMENT_COUNTER_VALUE:
            return {
                ...state,
                counter: state.counter + 1,
                isDisabledButtonReset:false
            }
        case ACTIONS_TYPE.COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE: {
            return {
                ...state,
                counter: state.startValue,
                isDisabledButtonSet: true,
                isDisabledButtonIncrementCount:false,
            }
        }
        case ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_START_VALUE: {
            return {
                ...state,
                startValue: action.payload.newValue,
                isDisabledButtonSet:false,
                isDisabledButtonIncrementCount:true,
                isDisabledButtonReset:true,
            }
        }
        case ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.newValue,
                isDisabledButtonSet:false,
                isDisabledButtonIncrementCount:true,
                isDisabledButtonReset:true,
            }
        }
        case ACTIONS_TYPE.COUNTER_REDUCER_RESET_COUNTER_VALUE: {
            return {
                ...state,
                counter:state.startValue,
                isDisabledButtonReset:true
            }
        }
        default:
            return state
    }
}

