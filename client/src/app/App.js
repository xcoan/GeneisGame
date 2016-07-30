import React, { Component, PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    return (
      <div>
        <h2>App Container</h2>
        {this.props.children}
        <router-view></router-view>
      </div>
    );
  }
}

export default App;
