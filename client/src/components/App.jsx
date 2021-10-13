import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: []
    }
    this.getBox = this.getBox.bind(this);
  }

  componentDidMount() {
    this.getBox();
  }

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
    console.log(this.state)
    return (
      <div>
        <h1>MakeDay</h1>
        <div>
          {this.state.box.map(box =>
            <div key = {box.id}>{box.id}</div>
            )}
        </div>
      </div>
    )
  }
}

export default App;