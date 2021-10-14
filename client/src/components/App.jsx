import React from 'react';
import axios from 'axios';
import Box from './box.jsx';
import Type from './type.jsx';
import { Container, Row, Accordion } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: [],
      price: ''
    }
    this.getBox = this.getBox.bind(this);
    this.addBox = this.addBox.bind(this);
    this.hideBox = this.hideBox.bind(this);
    this.updateBox = this.updateBox.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getPrice = this.getPrice.bind(this);
  }

  componentDidMount() {
    this.getBox();
    this.getPrice();
  }

  // componentDidUpdate() {
  //   this.getBox();
  // }

  getBox() {
    axios.get('/boxes')
      .then((res) => {
        //console.log('react get box success: ', res);
        this.setState({
          box: res.data
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  getPrice() {
    axios.get('/price')
      .then((res) => {
        console.log('react get price success: ', res);
        this.setState({
          price: res.data[0]["SUM(price)"]
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
        this.getBox();
        this.getPrice();
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
        this.getPrice();
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
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>See my box</Accordion.Header>
                <Accordion.Body>
                <div className='box'>
                  <Box
                    getBox = {this.getBox}
                    hideBox = {this.hideBox}
                    updateBox = {this.updateBox}
                    deleteProduct = {this.deleteProduct}
                    getPrice = {this.getPrice}
                    box={this.state.box}
                    price = {this.state.price}/>
                </div>
                </Accordion.Body>
               </Accordion.Item>
             </Accordion>
          </Row>
        </Container>

        <Container>
        <Type addBox = {this.addBox} getBox = {this.getBox}/>
        </Container>

      </div>
    )
  }
}

export default App;