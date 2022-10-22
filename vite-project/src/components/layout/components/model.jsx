import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Welcome from '../../../pages/welcome'
import Chat from '../../../pages/chat'
import Wedding from '../../../pages/wedding'
import Marriage from '../../../pages/marriage'
import User from '../../../pages/user'

class Model extends React.Component{

  render() {
    return (
      <div>
        <Switch>
          <Route path='/welcome' component={Welcome}></Route>
          <Route path='/marriage' component={Marriage}></Route>
          <Route path='/wedding' component={Wedding}></Route>
          <Route path='/chat' component={Chat}></Route>
          <Route path='/user' component={User}></Route>
          <Redirect to='/welcome'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default Model;