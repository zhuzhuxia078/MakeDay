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
    this.updateBox = this.updateBox.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
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

  updateBox(product) {
    axios.put('/boxes/:price', product)
      .then((res) => {
        this.getBox();
      })
      .catch((error) => {
        throw error;
      })
  }

  deleteProduct(productID) {
    // const currProducts = this.state.box;
    axios.delete(`/boxes/${productID}`)
      .then((res) => {
        this.getBox();
      })
      .catch((error) => {
        console.log('error deleting in client: ', error)
      })
  }


  render() {
    return (
      <div>
        <h1>MakeDay</h1>
        <Box getBox = {this.getBox} hideBox = {this.hideBox} updateBox = {this.updateBox} deleteProduct = {this.deleteProduct} box={this.state.box}/>
        <Type addBox = {this.addBox}/>
      </div>
    )
  }
}

export default App;