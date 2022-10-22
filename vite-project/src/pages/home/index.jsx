import React from 'react'

import {token} from '../../utils'

export default class Home extends React.Component{



  render() {
    const tokenId = token();
    // console.log('tokenId=',tokenId);
    // console.log('props=',this.props);

    if(!tokenId){
      this.props.history.push('/login');
      return;
    }

    return (
      <div>
        qqqqqqqq
      </div>
    )
  }
}