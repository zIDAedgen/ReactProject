import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM} from './actionTypes';

export const changeInputValue = (value) => ({
    type : CHANGE_INPUT_VALUE,
    value
})

export const changeSubmitValue = () => ({
    type : ADD_TODO_ITEM,
})