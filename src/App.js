import React from 'react';
import './App.css';
import Signup from './Signup';

function App() {
  return (

      <container maxWidth="md">
        <div className="App">
        
          <Signup/>
          {/* <Login/> */}
        </div>
      </container>
   
  );
}

export default App;


  {/* <Switch>
            <Route path="/signin" exact component={Signup} />
            <Route path="/login " exact component={Login} />
          </Switch>    */}