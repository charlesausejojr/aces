import React, {useEffect} from 'react';
import './App.css';
import './components/Header.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Header  from './components/Header'
import Home from './pages/Home'
import Interact from './pages/Interact'
import {useSelector,useDispatch} from 'react-redux';
import Login from "./components/Login";
import {auth} from "./firebase";
import { selectUser, login, logout} from './features/userSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
 
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else{
        dispatch(logout());
      }
    });
  }, [dispatch]);
  
  return (
    
    <Router>

    <div className="app">
      {user? (<>
        <div className="app__header">
        <Header/>
      </div>

        <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/interact" component={Interact}/>
        </Switch>
      </>): <Login/> }
      
    </div>
    </Router>
  );
}

export default App;
