import {GET_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE, INIT} from './actionTypes';

export const changeInputValue = (value) => ({
    type : CHANGE_INPUT_VALUE,
    value
})

export const changeSubmitValue = () => ({
    type : ADD_TODO_ITEM,
})

export const deleteItem = (index) => ({
    type : DELETE,
    index
})

export const initItem = (dataList) => ({
    type : INIT,
    dataList
})

export const getToDoList = () => {
    return (dispatch) => {
        let copy = [];
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        .then(res => res.json())
        .then(data => {
            data.banner.forEach(item => {
                copy.push(item.title)
            })
        const action = initItem(copy);
        dispatch(action);
        })
        

    }
}

export const sagaList = () => ({
    type : GET_LIST
})

