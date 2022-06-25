export enum ACTIONS_TYPE{
    COUNTER_REDUCER_INCREMENT_COUNTER_VALUE = 'COUNTER_REDUCER/INCREMENT_COUNTER_VALUE',
    COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE = 'COUNTER_REDUCER/SET_COUNTER_FROM_START_VALUE',
    COUNTER_REDUCER_CHANGE_START_VALUE = 'COUNTER_REDUCER/CHANGE_START_VALUE',
    COUNTER_REDUCER_CHANGE_MAX_VALUE = 'COUNTER_REDUCER/CHANGE_MAX_VALUE',
    COUNTER_REDUCER_RESET_COUNTER_VALUE = 'COUNTER_REDUCER/RESET_COUNTER_VALUE',
}


export const incrementCounterValueAC = () => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_INCREMENT_COUNTER_VALUE,
    } as const
}

export type incrementCounterValueACType = ReturnType<typeof incrementCounterValueAC>


export const setCounterFromStartValueAC = () => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_SET_COUNTER_FROM_START_VALUE,
    } as const
}

type setCounterFromStartValueACType = ReturnType<typeof setCounterFromStartValueAC>

export const changeStartValueAC = (newValue: number) => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_START_VALUE,
        payload:{
            newValue
        }
    } as const
}

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>

export const changeMaxValueAC = (newValue: number) => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_CHANGE_MAX_VALUE,
        payload:{
            newValue
        }
    } as const
}

type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const resetCounterValueAC = () => {
    return {
        type: ACTIONS_TYPE.COUNTER_REDUCER_RESET_COUNTER_VALUE,
    } as const
}

type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>



export type ActionType =
    incrementCounterValueACType |
    setCounterFromStartValueACType |
    ChangeStartValueACType |
    changeMaxValueACType |
    resetCounterValueACType