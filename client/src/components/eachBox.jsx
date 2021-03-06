import React from 'react';

class EachBox extends React.Component {



  render() {
    const box = this.props.box;
    const deleteProduct = this.props.deleteProduct;
    return (
      <div key = {box.id}>
        <img className = 'img' src = {`${box.product_url}`}/>
        <div className='tag'>
        The type is : {box.box_name}
        <br />
        You have spent: ${box.price}
        <br/>
        Added on:
        <br/>
        {box.date.slice(0,10)}
        <br/>
        <button className = 'button' id={box.id} onClick = {(e) => deleteProduct(e.target.id)}>Delete me</button>
        </div>
      </div>
    )
  }
}

export default EachBox;