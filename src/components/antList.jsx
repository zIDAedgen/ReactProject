import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import store from '../store';



class AntList extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStateChange);
        
    }

    handleChange = (e) => {
        const action = {
            type : 'chage_input',
            value : e.target.value
        }
        store.dispatch(action);
    }


    handleStateChange = () => {
        this.setState(() => (store.getState()));
    }


    handleSubmit = () => {
        const action = {
            type : 'change_todoList',
        }
        store.dispatch(action);
    }


    handleDelete = (index) => {
        const action = {
            type : 'delete',
            index 
        }
        store.dispatch(action);
    }



    render() {
        return(
            
            <div style={{marginTop : '10px', marginLeft : '15px'}}>
                <Input value = {this.state.inputValue} placeholder="Input Value Here"  onChange={this.handleChange} style={{width : '300px', marginRight : '15px'}} />
                <Button  onClick={this.handleSubmit} type="danger">Submit</Button>
                <div>
                <List
                    style={{width : '300px'}}
                    size="large"            
                    bordered
                    dataSource={this.state.created}
                    renderItem={(item, index) => <List.Item>{item}<Button style={{leftWidth : '150px'}} type="primary" onClick={this.handleDelete.bind(this, index)}>Delete</Button></List.Item>}
    />  
                </div>
            </div>
        );
    }
}

export default AntList;