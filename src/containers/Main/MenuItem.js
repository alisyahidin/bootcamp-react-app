import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const menuItems = [
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    link: '/'
  },
  {
    name: 'Restaurant',
    icon: StoreIcon,
    link: '/restaurants'
  },
  {
    name: 'Food',
    icon: RestaurantIcon,
    link: '/foods'
  },
  {
    name: 'Order',
    icon: ShoppingCartIcon,
    link: '/orders'
  }
]

const MenuItem = props => {
  return (
    <List>
      { menuItems.map((menu, index) => {
        return (
          <Link to={menu.link} style={{ textDecoration: 'none' }}>
            <ListItem key={index} button>
              <ListItemIcon>
                  <menu.icon />
              </ListItemIcon>
              <ListItemText primary={ menu.name } />
            </ListItem>
          </Link>
        )
      }) }
    </List>
  )
}

export default MenuItem