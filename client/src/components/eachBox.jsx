import React from 'react';

class EachBox extends React.Component {



  render() {
    const box = this.props.box;
    const deleteProduct = this.props.deleteProduct;
    return (
      <div key = {box.id}>
        <img src = {`${box.product_url}`}/>
        {box.id}
        {box.price}
        <button id={box.id} onClick = {(e) => deleteProduct(e.target.id)}>Delete me</button>
      </div>
    )
  }
}

export default EachBox;