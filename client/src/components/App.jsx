import React from 'react';
import axios from 'axios';
import Box from './box.jsx';
import Type from './type.jsx';
import { Container, Row } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

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

  componentDidMount() {
    this.getBox();
  }

  // componentDidUpdate() {
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
        <h1 className = 'title'>MakeDay</h1>
        <div className = 'text'>
          We have spent a lot of time deciding what we have in our Make-up box. This App will help you have a look at what you have in your box based according to types. Will also tell you how much you have spent.
        </div>
        <Container>
          <Row>
            <Box getBox = {this.getBox} hideBox = {this.hideBox} updateBox = {this.updateBox} deleteProduct = {this.deleteProduct} box={this.state.box}/>
          </Row>
        <Type addBox = {this.addBox} getBox = {this.getBox}/>
        </Container>
      </div>
    )
  }
}

export default App;