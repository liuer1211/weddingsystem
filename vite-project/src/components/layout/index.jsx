import React from 'react'
import Nav from './components/nav'
import Model from './components/model'
import Footer from '../footer/index'

import layoutStyle from './index.module.less'

export default class Layout extends React.Component{

  render() {
    return (
      <div className={layoutStyle.layout}>
        <div className='left'>
          <Nav></Nav>
        </div>
        <div className='right'>
          <div className='model'>
            <Model></Model>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  }
}