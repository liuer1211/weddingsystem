import 'antd/dist/antd.less'
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Redirect to='/home'/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
