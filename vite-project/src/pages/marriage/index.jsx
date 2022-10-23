import React from 'react'
import { Button, Form, Input, Col, Row, Table, Pagination } from 'antd';

class Marriage extends React.Component {

  state={
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
        },
      },
      {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
          compare: (a, b) => a.math - b.math,
        },
      },
      {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
        },
      },
    ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
      },
      {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
      },
      {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
      },
      {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
      {
        key: '5',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
      {
        key: '6',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
      {
        key: '7',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
    ]
  }

  // 排序
  onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  // 提交
  onFinish = (values) => {
    console.log('Success:', values);
  };
  
  render() {
    const {columns, data} = this.state;
    return (
      <div>
        {/* 搜索内容 */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={this.onFinish}
          autoComplete="off"
          style={{marginTop:24}}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label="Username"
                name="username"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label="Password"
                name="password"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* 按钮 */}
        <div style={{padding: 12}}>
          <Button>新增</Button>&nbsp;&nbsp;&nbsp;
          <Button>修改</Button>&nbsp;&nbsp;&nbsp;
          <Button>删除</Button>&nbsp;&nbsp;&nbsp;
          <Button>上传</Button>&nbsp;&nbsp;&nbsp;
          <Button>导出</Button>&nbsp;&nbsp;&nbsp;
          <Button>打印</Button>&nbsp;&nbsp;&nbsp;
        </div>
        {/* table */}
        <Table 
          columns={columns} 
          dataSource={data} 
          onChange={this.onChange} 
          pagination={false}
        />
        <Pagination 
          total={600}
          showTotal={(total) => `总条数 ${total}`}
          defaultPageSize={20}
          defaultCurrent={1}
          style={{marginTop:24}}
        />
      </div>
    )
  }
}

export default Marriage;