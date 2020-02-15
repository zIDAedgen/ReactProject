import React from 'react';
import { Input } from 'antd';
const { Search } = Input;



class InputLine extends React.Component {
    
    onClicked = (value) => {
        this.passValue(value);
        
    }

    passValue = (value) => {
        this.props.fatherLine = value;
        console.log(this.props.fatherLine);
    }
    
    render() {
        return(
            <div>
                <div>
                    <Search
                    placeholder="input created"
                    enterButton="Submit" 
                    size="large"
                    onSearch={value => this.onClicked(value)}
                    />
                </div>
            </div>
        );
    }
}

export default InputLine;