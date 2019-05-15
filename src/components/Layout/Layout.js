
import React from 'react';
import Aux from '../../hoc/Aux';
import LayoutStyle from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={LayoutStyle.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;