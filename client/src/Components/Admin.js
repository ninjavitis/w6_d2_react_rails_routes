import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import DepartmentForm from './DepartmentForm'
import {Button, Icon, Header, Table} from 'semantic-ui-react'
import axios from 'axios';
import Products from './Products';
import Department from './Department'

const Admin = () => {
  const [departments, setDepartments] = useState([])

  useEffect(()=>{
    axios.get('/api/departments')
    .then(res =>(
      setDepartments(res.data)
    ))
  },[])

  const renderDepartments=()=>{
    if (departments.length <= 0)
      return <Table.Row><Table.Cell>No Departments Found</Table.Cell></Table.Row>
    return departments.map(department=>(
      <Department key={department.id} name={department.name} id={department.id}/>
    ))
}

  return(
    <div>
    <Button as={Link} to="department/new"icon color="green"><Icon name="pencil"/>New Department</Button>
    <Table>
      <Table.Body>
      {renderDepartments()}
      </Table.Body>
    </Table>
    <br/>
    page needs to be refreshed after deleting :(

    </div>
  )

}


export default Admin