import React from 'react';
import axios from 'axios';

class Buy extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      list: []
    })
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.addBox({
  //     box_name: 'bronzer',
  //     product_url:  'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328',
  //     price: 15.99
  //   })
  // }


  render() {
    return (
      <div>
        {/* <button onClick = {this.onSubmit}>Add to box</button> */}
        Add to box
      </div>
    )
  }
}

export default Buy;
