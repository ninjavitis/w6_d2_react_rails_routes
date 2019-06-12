import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Admin from './Components/Admin'
import DepartmentForm from './Components/DepartmentForm'

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/hoverboards" render={(props) => <Products id="9" name="Hoverboards" />}/>
        <Route exact path="/department/:new" component={DepartmentForm} />
        <Route exact path="/department/:id" component={Products} />
      </Switch>
    </Container>
  </>
)

export default App;
