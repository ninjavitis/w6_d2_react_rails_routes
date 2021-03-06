import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <Menu>
    <Menu.Header as={Link} to="/">
      SPACEMALL
    </Menu.Header>
    <Menu.Item as={Link} to="/hoverboards">
      Hoverboards
    </Menu.Item>
    <Menu.Item as={Link} to="/maidenmerch">
      Maiden Merch
    </Menu.Item>
    <Menu.Item as={Link} to="/admin">
      Admin
    </Menu.Item>
  </Menu>
)

export default Navbar