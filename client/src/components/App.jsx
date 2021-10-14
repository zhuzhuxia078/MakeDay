import React from 'react';
import axios from 'axios';
import Box from './box.jsx';
import Type from './type.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: []
    }
    this.getBox = this.getBox.bind(this);
    this.addBox = this.addBox.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }

  // componentDidMount() {
  //   this.getBox();
  // }

  getBox() {
    axios.get('/boxes')
      .then((res) => {
        console.log('react get box success: ', res);
        this.setState({
          box: res.data
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  hideBox() {
    this.setState({
      box: []
    })
  }

  addBox(product) {
    axios.post('/boxes', product)
      .then((res) => {
        console.log('react post success: ', product)
        // this.getBox();
      })
      .catch((error) => {
        throw error;
      })
  }



  render() {
    return (
      <div>
        <h1>MakeDay</h1>
        <Box getBox = {this.getBox} hideBox = {this.hideBox} box={this.state.box}/>
        <Type addBox = {this.addBox}/>
      </div>
    )
  }
}

export default App;