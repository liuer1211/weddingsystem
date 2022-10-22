import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Header from '../../components/header'
import Layout from '../../components/layout/index.jsx';
import {token} from '../../utils'

export default class Home extends React.Component{

  render() {
    const tokenId = token('tokenId');
    
    if(!tokenId){
      // this.props.history.push('/login');
      // return;
      return <Redirect to='/login'/>
    }

    return (
      <div>
        <Header></Header>
        <Layout></Layout>
      </div>
    )
  }
}