import React, { Component, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route, Redirect, 
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

  const PrivateRoute = ({component:Component, ...rest }) => (
                        <Route {...rest} render = {(props) => user ? 
                                (< Component {...props} />) : 
                                (<Redirect to={{
                                                pathname:'/auth',
                                                state: {
                                                  from:props.location,
                                                },
                                              }}
                                  />)
                              } />
                          );

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route  exact path="/auth" component={Auth} />
          <PrivateRoute exact path="/question" component={ViewQuestion} />
          <PrivateRoute exact path="/add-question" component={Question} />
          <Route exact path="/" component={StackOverflow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 