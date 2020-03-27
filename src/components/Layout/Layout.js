import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Toolbar/Toolbar';
export const Layout = props => {
  return (
    <Aux>
      <Navbar></Navbar>
      <div>SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
