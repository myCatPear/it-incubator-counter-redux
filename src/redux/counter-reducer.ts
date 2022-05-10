import {ActionType, ACTIONS_TYPE} from "./actions"

export type CounterType = {
    startValue: number,
    maxValue: number,
    counter: string | number
}

const initialState: CounterType = {
    startValue: 0,
    maxValue: 0,
    counter:"Set the value"
}

export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case ACTIONS_TYPE.COUNTER_REDUCER_INCREMENT_COUNTER:
            return {...state, startValue: state.startValue + 1}
        case ACTIONS_TYPE.COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE: {
            return {...state, counter:state.startValue}
        }
        case ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_START_VALUE: {
            return {...state, startValue:action.payload.newValue}
        }
        case ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_MAX_VALUE: {
            return {...state, maxValue:action.payload.newValue}
        }
        default:
            return state
    }
}

