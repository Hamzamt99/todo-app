import React from 'react';

import Todo from './Components/Todo';
import List from './Components/List';
import Context from './Context/Settings';
import NavTool from './Components/Header';
import Footer from './Components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <Context>
        <NavTool />
        <Todo />
        <List />
        <Footer />
      </Context>

    );
  }
}
