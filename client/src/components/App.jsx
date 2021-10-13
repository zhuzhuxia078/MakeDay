import React from 'react';
// import axios from 'axios';
import Box from './box.jsx';
import Type from './type.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   box: []
    // }

  }


  render() {
    return (
      <div>
        <h1>MakeDay</h1>
        <Box />
        <Type />
      </div>
    )
  }
}

export default App;