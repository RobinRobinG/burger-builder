
import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import LayoutStyle from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawClosedHandler} 
        />
        <main className={LayoutStyle.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;