import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import '../App.css';
import data from './data.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '0',
      isModalDisplaying: false,
      selectedBeast: {}
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1    
    });
  }
  handleShowModal = (selectedBeast) => {
    // SetState will only work inside the component that it is in
    // if in App.js we call setState, that will change the state of App only
    // this.setState is the way we change values in state
    this.setState({
      isModalDisplaying: true,
      selectedBeast: selectedBeast
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
        // addHearts, data and handleShowModal can ONLY be accessed inside Main using this.props (ex: this.props.handleShowModal)
          addHearts={this.addHearts}
          data={data}
          handleShowModal={this.handleShowModal}
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


