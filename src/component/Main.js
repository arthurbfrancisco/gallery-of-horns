import React from "react";
import HornedBeast from '../component/Hornedbeast'; // Importing the HornedBeast component
import data from '../assets/data.json'; // Importing the Col component from react-bootstrap
import Col from 'react-bootstrap/Col'; // Importing the Row component from react-bootstrap
import Row from 'react-bootstrap/Row'; // Importing the Form component from react-bootstrap
import Form from 'react-bootstrap/Form'; // Importing the Form component from react-bootstrap

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allBeast: data,// Setting the initial state with the data from the JSON file
      filteredBeast: data, // Setting the initial state for filtered data as all the data
    }
  }

  filter = (event) => {
    let numHorns = parseInt(event.target.value); // Parsing the selected value from the dropdown menu to an integer
    let everyBeast = this.state.allBeast; // Creating a copy of the allBeast data
    if (numHorns) {
      everyBeast = this.state.allBeast.filter(beast => beast.horns === numHorns);
    }
    this.setState({filteredBeast: everyBeast}) // Updating the state with the filtered data
  }

  render() {

    let hornedOne = this.state.filteredBeast.map((horn, idx) => {
    // Create a list of HornedBeast components based on the filtered data
      return (<Col key={idx} className="mt-4">
        
        <HornedBeast
          imageURL={horn.image_url}
          title={horn.title}
          alt={horn.alt}
          description={horn.description}
          key={horn.keyword}
          horns={horn.horns}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={horn}
          />
          </Col>)
      });

    return (
      <main>
        <Form>
          <Form.Group>
            <Form.Label>Horned Picker</Form.Label>
              <Form.Control as="select" onChange={this.filter}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
          </Form.Group>
        </Form>
        <Row xs={1} sm={2} md={3} lg={4}>
        {hornedOne}
        </Row>
      </main>
    );
  }
}

export default Main;