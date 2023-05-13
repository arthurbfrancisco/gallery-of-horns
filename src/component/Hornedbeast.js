// Import necessary modules from react and react-bootstrap

import React from "react";
import Card from 'react-bootstrap/Card';
// Import the CSS file for styling
import './HornedBeast.css';

// Define a class component named HornedBeast that extends React.Component
class HornedBeast extends React.Component {

  // A constructor method to initialize state and bind methods
  constructor(props) {
    // Calls the constructor of the parent class (React.Component)
    super(props);
    // Initialize the state object with a property 'likes' set to 0
    this.state = {
      likes: 0
    }
  }

  // Method to handle incrementing the likes when image is clicked
  handleLikes = () => {
    // Update the state to increment the 'likes' property by 1
    this.setState({
      likes: this.state.likes + 1
    });
  }

  // Render method returns the JSX to render
  render() {
    // Return a Card component from react-bootstrap, and use the passed-in props to populate its data
    return (
      <>
        <Card className="card"
           // When the Card is clicked, three actions will happen:
  // 1. The like count for this card will increase (via handleLikes)
  // 2. The total count of hearts in the app will increase (via addHearts)
  // 3. The modal will open to show more details about this card (via handleShowModal)
          onClick={() => {
            this.handleLikes(); // Increase the like count for this card
            this.props.addHearts(); // Increase the total count of hearts in the app
            this.props.handleShowModal(this.props.beast); // Open the modal and pass in the details of this card (beast)
          }}
        >
          <Card.Img
            src={this.props.imageURL} // The source of the image is passed via props
            alt={this.props.title} // The alt text for the image is the title of the card
            title={this.props.title} // The title for the image is the title of the card
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title> 
            <Card.Text><span role="img" aria-label="blackHeart">🖤</span>{this.state.likes}</Card.Text>
            <Card.Text>{this.props.alt}</Card.Text>
            <Card.Text>{this.props.text}</Card.Text>
            <Card.Text>{this.props.horns}"Gallery of horns!"</Card.Text>
            {/* <button className="btn btn-primary" onClick={this.handleClicks}>Pierce the Veil</button> */}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;

//Line 51:The title of the card is displayed here
//Line 52:The number of likes for this card is displayed next to a heart emoji
//Line 53:The alt text for the card is displayed here
// Line 54The text for the card is displayed here
// Line 55:The number of horns the beast has is displayed here, followed by the string "Gallery of horns!"