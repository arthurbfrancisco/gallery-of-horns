import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class SelectedBeast extends React.Component {
  
  render() {
    return (
     
      <Modal show={this.props.show} onHide={this.props.onHide}>
      <Modal.Header>
        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
        <Card.Img
        src={this.props.selectedBeast.image_url}
        alt={this.props.selectedBeast.alt}
        title={this.props.selectedBeast.title}
        />
        <Card.Body>
          <Card.Title>{this.props.selectedBeast.title}</Card.Title>
          <Card.Text>{this.props.selectedBeast.description}</Card.Text>
        </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={this.props.onHide}>
          Run Away
        </Button>
      </Modal.Footer>

    </Modal>
    );
  }
}

export default SelectedBeast;
