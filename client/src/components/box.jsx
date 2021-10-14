import React from 'react';
//import axios from 'axios';
import Buy from './boxEntry.jsx';

class Box extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick = {this.props.getBox}>My box</button>
        {this.props.box.map(box =>
            <div key = {box.id}>{box.id}</div>
        )}
        <Buy addBox = {this.addBox}/>
      </div>
    )
  }
}

export default Box;