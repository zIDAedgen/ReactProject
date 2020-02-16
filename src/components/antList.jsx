import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';


const data = [100, 200];
class AntList extends React.Component {

    render() {
        return(

            <div style={{marginTop : '10px', marginLeft : '15px'}}>
                <Input placeholder="Input Value Here" style={{width : '300px', marginRight : '15px'}} />
                <Button type="danger">Submit</Button>
                <div>
                <List
                    style={{width : '300px'}}
                    size="large"            
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
    />
                </div>
            </div>
        );
    }
}

export default AntList;