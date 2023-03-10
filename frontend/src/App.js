import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route, 
} from 'react-router-dom'
import StackOverflow from './components/StackOverflow'
import Question from './components/Add-Question/Question'
import ViewQuestion from './components/ViewQuestion'
import Auth from './components/Auth'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { display } from '@mui/system';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email,
        }))
      }else{
        dispatch(logout())
      }
    })
  },[ dispatch ])

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route  exact path="/auth" component={Auth} />
          <Route  exact path="/question" component={ViewQuestion} />
          <Route  exact path="/add-question" component={Question} />
          <Route  exact path="/" component={StackOverflow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 