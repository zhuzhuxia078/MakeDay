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

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><Button variant="primary" onClick = {this.props.getBox}>My box</Button></Col>
            <Col><Button onClick = {this.props.hideBox}>Hide box</Button></Col>
          </Row>
        </Container>
          <Grid container>
            {this.props.box.map(box =>

                <EachBox key = {box.id} box = { box } deleteProduct = {this.props.deleteProduct}/>

            )}
          </Grid>


      </div>
    )
  }
}

export default Box;