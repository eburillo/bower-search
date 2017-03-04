import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
