import React from 'react';
import axios from 'axios';

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      box: []
    }
    this.getBox = this.getBox.bind(this);
  }

  // componentDidMount() {
  //   this.getBox();
  // }

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

  render() {
    return (
      <div>
        <button onClick = {this.getBox}>My box</button>
        {this.state.box.map(box =>
            <div key = {box.id}>{box.id}</div>
        )}
      </div>
    )
  }
}

export default Box;