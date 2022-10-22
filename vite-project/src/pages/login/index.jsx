import React from 'react'
import homeStyle from './index.module.less'
import { Button, Form, Input } from 'antd';

export default class Login extends React.Component{
  onFinish = (values) => {
    console.log('Success:', values);
  };
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    // 校验,其他写法
    const validatePwd = (rule, value, callBack)=> {
      if (value && value.length<4) {
        callBack('密码大于4位')
      } else if (value && value.length>12) {
        callBack('密码小于12位')
      } else if (value && !(/^[a-zA-Z0-9]+$/.test(value))) {
        callBack('必须数字英文')
      } else{
        callBack()
      }
    }
    return (
      <div className={homeStyle.login}>
        <div className='login-model'>
          <h2>登录</h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: '请输入用户名!', },
                { min: 6, message: '最小6位' },
                { max: 12, message: '最大12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '必须数字英文下划线' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: '请输入密码!' },
                { validator: validatePwd },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}