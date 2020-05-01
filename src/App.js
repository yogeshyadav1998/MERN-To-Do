import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render(){
    return(
      <div className="landing">
        <div className="backgroud-video">
            <video autoPlay loop muted className="video" >
              <source src='v.mp4' type='video/mp4' />
            </video>
        </div>
        <div className="heading1">
          <p>To-Do</p>
        </div>
        <div className="heading2">
          <p>Schedule Your Beautiful Life</p>
        </div>
        <div className="auth">
          <button>Authenticate</button>
        </div>
      </div>
    )
  }
}

export default App;
