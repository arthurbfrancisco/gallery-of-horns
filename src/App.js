import React from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import Modal from 'react-bootstrap/Modal'
import data from './Assets/data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      selectedBeast: {},
      isModalDisplaying: true
    };
  }
  
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💙'
    });
  }

  handleShowModal = () => {
this.setState({
  isModalDisplaying: true
});
} 

handleCloseModal = () => {
  this.setState({
    isModalDisplaying: false
  });
}
  
  updateSelectedBeast = (beast) => {
    this.setState({ selectedBeast: beast 
    ,SelectedBeast: beast,
    showModal: true,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          data={data} 
          updateSelectedBeast={this.updateSelectedBeast}
        />
        <SelectedBeast 
          show={this.state.showModal} 
          handleClose={this.handleClose}
          beast={this.state.selectedBeast}
        />
        <Footer />
        <Modal
        show={this.state.ModalDisplaying}
        onhide={this.handleCloseModal}
        >
          testing
        </Modal>
      </div>
    );
  }
}

export default App;




