import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

class AntList extends React.Component {
    render() {
        return(
            <Fragment>
                <Input placeholder="Input Value Here" />
            </Fragment>
        );
    }
}

export default AntList;