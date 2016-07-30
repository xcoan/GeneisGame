import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>App Container</h2>
        <router-view></router-view>
      </div>
    );
  }
}

export default App;
