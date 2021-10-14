import React from 'react';
//import axios from 'axios';
import EachBox from './eachBox.jsx';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';


class Box extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getBox()
  }

  render() {
    return (
      <div>
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