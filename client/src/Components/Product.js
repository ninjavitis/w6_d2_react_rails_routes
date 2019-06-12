import React from 'react'
import axios from 'axios'
import {Card, Header, Button, Icon, Table, Form,} from 'semantic-ui-react'
import {link} from 'react-router-dom'
import ProductForm from './ProductForm';

class Product extends React.Component{
  state = {name:"",tempName:"", tempDesc:"", tempPrice:0, editing:false,product:{}}

  deleteRecord=()=>{
    axios.delete(`/api/departments/${this.props.department_id}/products/${this.props.id}`)}

    toggleEdit=()=>{
      this.setState({editing:!this.state.editing})
    }

    handleChange = (tempName) => (e) => {
      this.setState({...this.state, [tempName]: e.target.value})
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      axios.patch(`/api/products/${this.props.id}`)
      // .then( res => {
      //   this.props.history.push("/admin")})
    }
    
    componentDidMount=()=>{
      this.setState({name: this.props.name})
    }

    editForm=()=>{
      if(this.state.editing){
        return(
          <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="Name"  value={this.state.tempName} onChange={this.handleChange('tempName')} required/>
            <Form.Input placeholder="Description"  value={this.state.tempDesc} onChange={this.handleChange('tempDesc')} required/>
            <Form.Input placeholder="Price"  value={this.state.tempPrice} onChange={this.handleChange('tempPrice')} required/>
          </Form>
        )    
        } else {
          return(
            <Table.Cell>
              <Header as="h3">{this.props.name}</Header>
              <p>{this.props.description}</p>
              <p>{this.props.price}</p>
            </Table.Cell>
          )          
        }
      }

  render(){
      return(
        <Table.Row>
          <Table.Cell collapsing>
            {
            this.state.editing ?
            <Button icon color='grey' onClick={this.toggleEdit}><Icon name="cancel"/></Button>
            :
            <Button icon color='blue' onClick={this.toggleEdit}><Icon name="pencil"/></Button>
            }
          </Table.Cell>
        <Table.Cell collapsing>
          {
            this.state.editing ?
            <Form.Button icon color='green' onClick={this.updateRecord}><Icon name="save"/></Form.Button>
            :
            <Button icon color='red' onClick={this.deleteRecord}><Icon name="trash"/></Button>
          }
          
        </Table.Cell>
        <Table.Cell>
        
          {this.editForm()}
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Product