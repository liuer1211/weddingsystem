import React from 'react'
import { withRouter } from "react-router-dom";
import { HeartOutlined, HomeOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('首页', 'sub1', <HomeOutlined />, [
    getItem('首页', '1'),
  ]),
  getItem('证 · 婚', 'sub2', <HeartOutlined />, [
    getItem('领证', '2'),
    getItem('婚庆', '3'),
  ]),
  getItem('话题', 'sub4', <CommentOutlined />, [
    getItem('话题', '4'),
  ]),
  getItem('用户', 'sub3', <UserOutlined />, [
    getItem('用户', '5'),
  ]),
];

class Nav extends React.Component{
  // 切换菜单
  onClick = (e) => {
    console.log('click ', e, this.props);
    switch(e.key) {
      case '1':
        this.props.history.push('/welcome')
        break;
      case '2':
        this.props.history.push('/marriage')
        break;
      case '3':
        this.props.history.push('/wedding')
        break;
      case '4':
        this.props.history.push('/chat')
        break;
      case '5':
        this.props.history.push('/user')
        break;  
      default:
        break;
    }
  };
  render() {
    // defaultSelectedKeys={['1']}
    // defaultOpenKeys={['sub1']}
    return (
      <div>
        <Menu
          onClick={this.onClick}
          style={{
            width: 200,
          }}
          mode="inline"
          items={items}
        />
      </div>
    )
  }
}

export default withRouter(Nav);