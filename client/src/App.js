import './App.scss';
import React from 'react';
import Header from './components/Header/Header'
import AppDrawer from './components/AppDrawer/AppDrawer';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    isDrawerOpen: false
  }

  toggleDrawer() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen 
    })
  }

  render () {
    return (
      <>
      <Header toggleDrawer={() => this.toggleDrawer()}/>
      <AppDrawer 
        isOpen={this.state.isDrawerOpen}
        toggleDrawer={() => this.toggleDrawer()}
      />
      <Footer/>
      </>
    );
  }
}

export default App;
