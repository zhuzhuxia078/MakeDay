import React from 'react';
//import axios from 'axios';
import EachBox from './eachBox.jsx';


class Box extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick = {this.props.getBox}>My box</button>
        {this.props.box.map(box =>
            <EachBox key = {box.id} box = { box } deleteProduct = {this.props.deleteProduct}/>
        )}
        <button onClick = {this.props.hideBox}>Hide box</button>
      </div>
    )
  }
}

export default Box;