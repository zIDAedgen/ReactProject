import React from 'react';
import {Fragment} from 'react';
import ToDoItem from './ToDoItem';






class Original extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue : '',
            created : []
        }
    }
    handleInput = (e) => {
        const values = e.target.value
        this.setState(() => ({
            inputValue : values
        }))
        // asynchronous !!!
        console.log(this.state.inputValue);
    }

    handleSubmit = () => {
        this.setState({
            created : [...this.state.created, this.state.inputValue],
            inputValue : ''

        })
    }
    
    handleDelet = (index) => {
        const newList = this.state.created;
        newList.splice(index, 1);
        this.setState({
            create : newList
        })
    }


    render() {
        return(
            <Fragment>
                This is Original Component
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInput}/><button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div>
                    {/*How to handle the list : map to the List*/}
                    {this.state.created.map((item, index) => {
                        return (<div key={index}><ToDoItem passInfo={item} fatherIndex={index} deleteItem={this.handleDelet.bind(this)} /></div>);
                    })}

                </div>
                
            </Fragment>

        );
    }
}

export default Original;