import React from "react";

import Header from './component/Header.js';
import Main from "./Main.js";
import Footer from "./component/Footer.js";
import './App.css';
import data from './Assets/data.json';
import SelectedBeast from './component/Selectedbeast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
HEAD
      isModalDisplaying: false,
      beastName: 'test',
      clickedBeast: {}
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + <span role="img" aria-label="blackHeart">'🖤'</span>
    });
  }
  handleShowModal = (clickedBeast) => {
    this.setState({
      isModalDisplaying: true,
      clickedBeast: clickedBeast
    });
    console.log('modal was clicked');

  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    })
  }

  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Main
          addHearts={this.addHearts}
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <ClickedBeast
        show={this.state.isModalDisplaying}
        onHide={this.handleCloseModal}
        clickedBeast={this.state.clickedBeast}
        />
      </>
    )
  }
      selectedBeast: {},
      isModalDisplaying: false,
      beastName: 'test',
      clickedBeast: {}
    };
  }
  
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + <span role="img" aria-label="blackHeart">'🖤'</span>
    });
  }

  handleShowModal = (selectedBeast) => {
this.setState({
  isModalDisplaying: true,
  beastName: 'test',
  clickedBeast: {}
});
console.log('miodal was clicked');

} 

handleCloseModal = () => {
  this.setState({
    isModalDisplaying: false
  });
}
  

render() {
    return (
      <>
        <Header
        heasrt={this.state.hearts}
        />
        <Main 
          addHearts={this.addHearts}
          data={data} 
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast 
          show={this.state.showModal} 
          handleClose={this.handleClose}
          beast={this.state.selectedBeast}
        />
       <Footer />
        <SelectedBeast
        show={this.state.isModalDisplaying}
        onHide={this.handleCloseModal}
        clickedBeast={this.state.clickedBeast}
        />
      </>
    )
  }
};

export default App;




