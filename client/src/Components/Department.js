import React from 'react'
import axios from 'axios'
import {Card, Header, Button, Icon, Table, Form} from 'semantic-ui-react'
import {link} from 'react-router-dom'
import DepartmentForm from './DepartmentForm';

class Department extends React.Component{
  defaultValues ={name:"", tempName:"", editing:false, department:{}}  
  state = {name:"",tempName:"",editing:false,department:{}}

  deleteRecord=()=>{
    axios.delete(`/api/departments/${this.props.id}`)
    this.setState({ state: this.state });
  }

    toggleEdit=()=>{
      this.setState({editing:!this.state.editing})
    }

    // handleChange = (e) => {
    //   this.setState({ [this.state.name]: e.target.value,})
    // }
    
    handleChange = (tempName) => (e) => {
      this.setState({...this.state, [tempName]: e.target.value})
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      this.toggleEdit();
      axios.patch(`/api/departments/${this.props.id}`, {name:this.state.tempName})
    }
    
    componentDidMount=()=>{
      this.setState({name: this.props.name})
    }

    editForm=()=>{
      if(this.state.editing)
        return(
          <Form onSubmit={this.handleSubmit}>
            <Form.Input placeholder="Name"  value={this.state.tempName} onChange={this.handleChange('tempName')} required/>
          </Form>
        ) 
      return this.state.name
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

export default Department