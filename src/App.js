import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Checkout from './components/Checkout';
import { StateProvider } from './StateProvider';
import reducer,{ initialState} from './reducer';


function App() {
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <div className="">
        {/* Header */}
        <Header/>
        <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        </Switch>
      </div>
    </Router>
    </StateProvider>
  );
}

export default App;
