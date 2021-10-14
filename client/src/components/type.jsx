import React from 'react';
import axios from 'axios';
import EachType from './eachType.jsx';
import { Form } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      list: []
    }
    this.getTypes = this.getTypes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.getTypes()
  // }

  componentDidUpdate() {
    this.getTypes()
  }

  getTypes() {
    const params = {
      product_type: this.state.type
    }
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json', { params })
      .then((res) => {
        console.log(params);
        console.log('get by types success: ', res.data);
        this.setState ({
          list: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleClick(e) {
    this.setState({
      type: e.target.name
    })
    this.getTypes();
  }

  handleChange(e) {
    this.setState({
      type: e.target.value
    })
    //this.getTypes();
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.addBox({
      box_name: 'bronzer',
      product_url:  'https://well.ca/products/maybelline-facestudio-master-contour_120303.html?cat=328',
      price: 15.99
    })
  }


  render() {
    return (
      <div>
        <Form.Select aria-label="Default select example" onChange={this.handleChange}>
              <option>Open to select type</option>
              <option value = 'Eyebrow'>Eyebrow</option>
              <option value = 'Blush'>Blush</option>
              <option value = 'Bronzer'>Bronzer</option>
              <option value = 'Eyeliner'>Eyeliner</option>
              <option value = 'Eyeshadow'>Eyeshadow</option>
              <option value = 'Foundation'>Foundation</option>
              <option value = 'Lip_liner'>Lip_liner</option>
              <option value = 'Lipstick'>Lipstick</option>
              <option value = 'Mascara'>Mascara</option>
              <option value = 'Nail polish'>polish</option>

        </Form.Select>
        {/* <button name = 'Eyebrow' onClick = {(e) => this.handleClick(e)}>Eyebrow</button>
        <button name = 'Blush' onClick = {(e) => this.handleClick(e)}>Blush</button>
        <button name = 'Bronzer' onClick = {(e) => this.handleClick(e)}>Bronzer</button>
        <button name = 'Eyeliner' onClick = {(e) => this.handleClick(e)}>Eyeliner</button>
        <button name = 'Eyeshadow' onClick = {(e) => this.handleClick(e)}>Eyeshadow</button>
        <button name = 'Foundation' onClick = {(e) => this.handleClick(e)}>Foundation</button>
        <button name = 'Lip_liner' onClick = {(e) => this.handleClick(e)}>Lip_liner</button>
        <button name = 'Lipstick' onClick = {(e) => this.handleClick(e)}>Lipstick</button>
        <button name = 'Mascara' onClick = {(e) => this.handleClick(e)}>Mascara</button>
        <button name = 'Nail polish' onClick = {(e) => this.handleClick(e)}>Nail polish</button> */}
        <Grid container>
        {this.state.list.map(product =>
            <Grid item xs={3} key = {product.id}>
            <EachType key = {product.id} product = {product} addBox = {this.props.addBox}/>
            </Grid>
        )}
        </Grid>
      </div>
    )
  }
}

export default Type;