import React, { Fragment } from 'react';
import store from '../store';
import {changeInputValue, changeSubmitValue, deleteItem, initItem, getToDoList} from '../store/actionCreator';
import AntListUI from './antListUI';
import axios from 'axios';


class AntList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStateChange);
        
    }

    handleChange = (e) => {
        const action = changeInputValue(e.target.value);
        store.dispatch(action);
    }


    handleStateChange = () => {
        this.setState(() => (store.getState()));
    }


    handleSubmit = () => {
        const action = changeSubmitValue();
        store.dispatch(action);
    }


    handleDelete = (index) => {
        console.log(index);
        const action = deleteItem(index);
        store.dispatch(action);
    }

    componentDidMount = () => {
        axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        .then(res => {console.log(res.banner)});
        
    }



    render() {
        return(
            <AntListUI 

            inputValue={this.state.inputValue}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            handleDelete = {this.handleDelete}
            created = {this.state.created}
            />
        );
    }
}

export default AntList;