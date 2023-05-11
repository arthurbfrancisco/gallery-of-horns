import React from "react";
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import './App.css';
import data from './data.json';
import SelectedBeast from './Selectedbeast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
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
    // SetState  will only  work inside the component.
    // if in App we call setState
this.setState({
  isModalDisplaying: true,
  beastName: 'test',
  clickedBeast: {}
});
console.log('modal was clicked');

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
        hearts={this.state.hearts}
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
        selectedBeast={this.state.selectedBeast}
        />
      </>
    )
  }
};

export default App;




