import React from 'react';

class EachBox extends React.Component {



  render() {
    const box = this.props.box;
    return (
      <div key = {box.id}>
        <img src = {`${box.product_url}`}/>
        {box.id}
        {box.price}
      </div>
    )
  }
}

export default EachBox;