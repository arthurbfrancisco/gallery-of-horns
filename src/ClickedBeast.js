import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class ClickedBeast extends React.Component {
  
  render() {
    return (

      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header>
          <Modal.Title>{this.props.clickedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
          <Card.Img
          src={this.props.clickedBeast.image_url}
          alt={this.props.clickedBeast.alt}
          title={this.props.clickedBeast.title}
          />
          <Card.Body>
            <Card.Title>{this.props.clickedBeast.title}</Card.Title>
            <Card.Text>{this.props.clickedBeast.description}</Card.Text>
          </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.onHide}>
            Run Away
          </Button>
        </Modal.Footer>

      </Modal>

    )
  }

}

export default ClickedBeast