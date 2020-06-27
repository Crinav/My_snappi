import React from 'react';
import Home from './components/home'
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import List from './components/list';
import Timing from './components/timing';
import Receive from './components/receive';
import Snap from './components/snap';
import ModalScreen from './components/modal';
import Delet from './components/delet';
import { Router, Scene } from 'react-native-router-flux'


const Routes = () => (
  <Router>
    <Scene key="root">

      <Scene key="login" component={LoginForm} title="My Snapi - connexion" />
      <Scene key="register" component={RegisterForm} title="My Snapi - register" />
      <Scene type="reset" key="home" component={Home} title="My Snapi"/>
      <Scene key="list" component={List} title="My Snapi - send to"/>
      <Scene key="timing" component={Timing} title="My Snapi - timing"/>
      <Scene key="receive" component={Receive} title="My Snapi - Receive"/>
      <Scene key="snap" component={Snap} title="My Snapi - view"/>
      <Scene key="modal" direction="vertical" component={ModalScreen} title="My Snapi" />
      <Scene key="delet" component={Delet} title="My Snapi - end"/>
    
    </Scene>
  </Router>
)

export default Routes