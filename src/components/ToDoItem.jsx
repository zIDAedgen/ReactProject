import React, { Fragment } from 'react';

class ToDoItem extends React.Component {
    


    handleClick = () => {
        this.props.deleteItem(this.props.fatherIndex);
    }

    render() {
        return (
            <Fragment>
                <div>
                    {this.props.passInfo} <button onClick={this.handleClick.bind(this)}>Delete</button>
                </div>
            </Fragment>
        );
    }
}

export default ToDoItem;