import 'antd/dist/antd.less'
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

import './assets/index.less'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Home}></Route>
          <Redirect to='/'/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
