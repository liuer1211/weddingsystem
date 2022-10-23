import React from 'react'
import { Button, Form, Input, Col, Row, Table, Pagination, Select } from 'antd';

class Marriage extends React.Component {

  state={
    columns: [
      {
        title: '机构名',
        dataIndex: 'name',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '图片',
        dataIndex: 'img',
      },
      {
        title: '价格',
        dataIndex: 'price',
        sorter: {
          compare: (a, b) => a.price - b.price,
        },
      },
      {
        title: '星级',
        dataIndex: 'star',
        sorter: {
          compare: (a, b) => a.star - b.star,
        },
      },
      {
        title: '评价',
        dataIndex: 'evaluate',
      },
    ],
    data: [
      {
        key: '1',
        name: '上海婚姻登记所',
        address: '上海',
        img: '',
        price: '6',
        star: '4',
        evaluate: '很好',
      },
      {
        key: '2',
        name: '上海婚姻登记所',
        address: '上海',
        img: '',
        price: '6',
        star: '4',
        evaluate: '很好',
      },
      {
        key: '3',
        name: '上海婚姻登记所',
        address: '上海',
        img: '',
        price: '6',
        star: '4',
        evaluate: '很好',
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
  // 选择
  onGenderChange = (value) => {
    switch (value) {
      case '0.5':
        Form.useForm().setFieldsValue({
          note: '0.5',
        });
        return;
    }
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
                label="机构名"
                name="name"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item 
                label="星级"
                name="star"
              >
                <Select onChange={this.onGenderChange} allowClear>
                  <Select.Option value="5">非常好</Select.Option>
                  <Select.Option value="4">很好</Select.Option>
                  <Select.Option value="3">一般</Select.Option>
                  <Select.Option value="2">不好</Select.Option>
                  <Select.Option value="1">较差</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
                style={{textAlign: 'center'}}
              >
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button type="重置" style={{marginLeft: 12}}>
                  查询
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