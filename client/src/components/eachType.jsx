import React from 'react';

class EachType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box_name: '',
      product_url: '',
      price: "0.0"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleClick() {
    this.setState({
      box_name: this.props.product.product_type,
      product_url: this.props.product.image_link,
      price: this.props.product.price
    })
    // this.props.addBox({
    //   box_name: this.state.box_name,
    //   product_url: this.state.product_url,
    //   price: this.state.price
    // })
  }

  handleAdd() {
    this.props.addBox({
      box_name: this.state.box_name,
      product_url: this.state.product_url,
      price: this.state.price
    })
  }

  render() {
    return (
      <div>
        <img src={`${this.props.product.image_link}`}/>
        <div onClick = {this.handleClick}>
          {this.props.product.brand}
        </div>
        <button onClick = {this.handleAdd}>Add to Box</button>
      </div>
    )
  }
}

export default EachType;