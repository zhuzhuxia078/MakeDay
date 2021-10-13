import React from 'react';
import axios from 'axios';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.getTypes = this.getTypes.bind(this);
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

  render() {
    return (
      <div>
        {this.state.list.map(product =>
            <div key = {product.id}>
              <img src={`${product.image_link}`}/>
              <div>{product.brand}`</div>
            </div>
        )}
      </div>
    )
  }
}

export default Type;