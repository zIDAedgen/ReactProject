import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE} from './actionTypes';




const defaultState = {
    inputValue : '',
    created : [ ]
};

export default (state = defaultState, action) => {
    console.log(state)
    switch(action.type) {
        case CHANGE_INPUT_VALUE :
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            const newStateList = JSON.parse(JSON.stringify(state));
            newStateList.created.push(newStateList.inputValue);
            newStateList.inputValue = '';
            return newStateList;
        case DELETE:
            const newDelete = JSON.parse(JSON.stringify(state));
            newDelete.created.splice(action.index, 1);
            return newDelete;
        default : 
            return state;

    }

}