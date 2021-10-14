import React from 'react';
//import axios from 'axios';
import EachBox from './eachBox.jsx';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';


class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      matched: this.props.box
    }
    this.handleFliter = this.handleFliter.bind(this);
  }

  componentDidMount() {
    this.props.getBox();
    this.props.getPrice();
  }

  handleFliter(e) {
    e.preventDefault();

    if (e.target.value.length >=2) {
      const matched = [];
      for (var i = 0; i < this.props.box.length; i++){
        if(this.props.box[i].box_name.toLowerCase().includes(e.target.value)) {
          matched.push(this.props.box[i]);
        }
      }
      this.setState({
        matched: matched
      })
    } else {
      this.setState ({
        matched: this.props.box
      })
    }

  }

  render() {
    return (
      <div>
        {/* <div>
          <input
            className = 'searchBar'
            type = 'text'
            placeholder = 'find in my box'
            onChange = {(e) => {this.handleFliter(e)}}>
          </input>
        </div> */}
        <div className='price'>You have spent: ${this.props.price}</div>
        <Container>
          <Row>
            <Col><button className = 'titleButton' onClick = {this.props.getBox}>My box</button></Col>
            <Col><button className = 'titleButton' onClick = {this.props.hideBox}>Hide box</button></Col>
          </Row>
        </Container>
          <Grid container>
            {this.props.box.map(box =>
                <Grid item xs={3} key = {box.id}>
                 <EachBox key = {box.id} box = { box } deleteProduct = {this.props.deleteProduct}/>
                </Grid>
            )}
          </Grid>


      </div>
    )
  }
}

export default Box;