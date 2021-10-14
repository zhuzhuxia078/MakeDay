import React from 'react';
import axios from 'axios';

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      box: []
    }
    this.getBox = this.getBox.bind(this);
    this.addBox = this.addBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getBox();
  }

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

  addBox(product) {
    axios.post('/boxes', product)
      .then((res) => {
        console.log('react post success: ', res)
        this.getBox();
      })
      .catch((error) => {
        throw error;
      })
  }

  onSubmit(e) {
    e.preventDefault();
    this.addBox({
      box_name: 'bronzer',
      product_url:  'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328',
      price: 15.99
    })
  }

  render() {
    return (
      <div>
        <button onClick = {this.getBox}>My box</button>
        {this.state.box.map(box =>
            <div key = {box.id}>{box.id}</div>
        )}
        <button onClick = {this.onSubmit}>Add to box</button>
      </div>
    )
  }
}

export default Box;