import React, { Component } from 'react';
import Aux from '../../hoc/Aux1'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Loyout.module.css'

class Loyout extends Component {
  state = {
    showSideDrawer: false
  }
  SideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }
  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar clickedToggle={this.SideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Loyout;