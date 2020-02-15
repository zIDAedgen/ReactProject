import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';



class Navibar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexNum : 1
        }
    }
    

    render() {
        return(
            <div
    style={{
      backgroundColor: '#F5F5F5',
      padding: 24,
    }}
  >
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="1" type="primary">
          Delete
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">{this.props.name}</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>{this.state.indexNum}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
        );
    }
}

export default Navibar;