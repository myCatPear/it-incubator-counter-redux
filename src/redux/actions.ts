export const enum ACTIONS_TYPE {
    COUNTER_REDUCER_INCREMENT_COUNTER = 'COUNTER_REDUCER/INCREMENT_VALUE',
    COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE = 'COUNTER_REDUCER/SET_COUNTER_FROM_START_VALUE',
    COUNTER_REDUCER_CHANGE_START_VALUE = 'COUNTER_REDUCER/CHANGE_START_VALUE',
}

export const incrementValueAC = (value: number) => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_INCREMENT_COUNTER,
        payload: {
            value
        }
    }
}

type IncrementValueACType = ReturnType<typeof incrementValueAC>

export const setCounterFromStartValueAC = () => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE
    }
}

type setCounterFromStartValueACType = ReturnType<typeof setCounterFromStartValueAC>

export const changeStartValueAC = () => {
    return {
        type:ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_START_VALUE
    }
}

type changeStartValueACType = ReturnType<typeof changeStartValueAC>

export type ActionType = IncrementValueACType | setCounterFromStartValueACType | changeStartValueACType