import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>
        <a href="./hotels/" target="popup" onClick={() => {window.open('./hotels','popup','width=600,height=800'); return false;}}>
          Open Link in Popup
        </a>
      </h1>
    );
  }
}

export default App;
