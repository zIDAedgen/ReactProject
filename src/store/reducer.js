const defaultState = {
    inputValue : '',
    created : []
};

export default (state = defaultState, action) => {
    console.log(state)
    switch(action.type) {
        case 'chage_input' :
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case 'change_todoList':
            const newStateList = JSON.parse(JSON.stringify(state));
            newStateList.created.push(newStateList.inputValue);
            newStateList.inputValue = '';
            return newStateList;
        case 'delete':
            const newDelete = JSON.parse(JSON.stringify(state));
            newDelete.created.splice(action.index, 1);
            return newDelete;
        default : 
            return state;

    }

}