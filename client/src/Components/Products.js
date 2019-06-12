import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Header, Button, Icon, Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Product from './Product'


const Products = (props) => {
  const [products, setProducts] =useState([])
  
  useEffect((id)=>{
    axios.get(`/api/departments/${props.id}/products`)
    .then(res =>(setProducts(res.data)))
  },[])
  
  const renderProducts=()=>{
    debugger
    if (products.length <= 0)
      return <Table.Row><Table.Cell>No products Found</Table.Cell></Table.Row>
    return products.map(product=>(
      <Product key={product.id} name={product.name} description={product.description} price={product.price} id={product.id}/>
    ))
  }

  return(
  <>
    <Header as='h1'>{props.name}</Header>
    <Table>
      <Table.Body>
        {renderProducts()}
      </Table.Body>
    </Table>
  </>
)
}

export default Products