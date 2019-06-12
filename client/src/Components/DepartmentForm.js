import React from 'react'
import axios from 'axios'
import {Form, Header, Icon} from 'semantic-ui-react'

class DepartmentForm extends React.Component{
  defaultValues ={name:""}
  state={...this.defaultValues}

  handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("/api/departments", {...this.state})
    .then( res => {
      this.props.history.push("/admin")
    })
    this.setState({...this.defaultValues})
  }

  handleChange=(e,{name,value}) => this.setState({[name]:value})

  render(){
    return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Button color="blue">Submit</Form.Button>
        </Form>
    )
  }
}

export default DepartmentForm
