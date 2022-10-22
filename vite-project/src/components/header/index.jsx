import React from 'react'
import { withRouter } from "react-router-dom";
import headStyle from './index.module.less'
import logo from '../../assets/img/1.png'

import {token, removeToken} from '../../utils'

class Header extends React.Component{
  // 退出
  toBack = () => {
    removeToken('username');
    removeToken('tokenId');
    this.props.history.push('/login');
  }

  render() {
    const username = token('username') || '';
    
    return (
      <div className={headStyle.head}>
        <img src={logo} />
        <div className='right'>
          <span>{username}</span>|
          <span onClick={this.toBack}>退出</span>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);