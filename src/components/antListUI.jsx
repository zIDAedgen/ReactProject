import React, { Fragment } from 'react';
import {Input, Button, List} from 'antd';
import 'antd/dist/antd.css';




const AntListUI = (props) => {
    return(
        <Fragment>
            <div style={{marginTop : '10px', marginLeft : '15px'}}>
                <Input value = {props.inputValue} placeholder="Input Value Here"  onChange={props.handleChange} style={{width : '300px', marginRight : '15px'}} />
                <Button  onClick={props.handleSubmit} type="danger">Submit</Button>
            <div>
                <List
                    style={{width : '300px'}}
                    size="large"            
                    bordered
                    dataSource={props.created}
                    renderItem={(item, index) => <List.Item>{item} + {index}<Button style={{leftWidth : '150px'}} type="primary" onClick={() => {props.handleDelete(index)} }>Delete</Button></List.Item>}
                />  
            </div>
            </div>
        </Fragment>
    );
}

/*
class AntListUI extends React.Component {
    render() {
        return(
            <Fragment>
             
            </Fragment>
        );

    }
}
*/
export default AntListUI;