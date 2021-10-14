import React from 'react';
import axios from 'axios';
import EachType from './eachType.jsx';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.getTypes = this.getTypes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getTypes()
  }

  getTypes() {
    const params = {
      product_type: 'Blush'
    }
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json', { params })
      .then((res) => {
        console.log('get by types success: ', res.data);
        this.setState ({
          list: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.addBox({
      box_name: 'bronzer',
      product_url:  'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328',
      price: 15.99
    })
  }


  render() {
    return (
      <div>
        {this.state.list.map(product =>
            <EachType key = {product.id} product = {product} addBox = {this.props.addBox}/>
        )}
      </div>
    )
  }
}

export default Type;