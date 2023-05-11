import React from 'react';
import HornedBeast from './Hornedbeast';
// import Col from 'react-bootstrap/Col';
// import HornedOneData from './data.json';
import Col from 're q1qact-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {

    let myData = this.props.data.map((beast, idx) => {
      return (<Col key={idx} className="mt-4">
        
      <HornedBeast
        imageURL={beast.image_url}
        title={beast.title}
        alt={beast.alt}
        description={beast.description}
        key={beast.keyword}
        horns={beast.horns}
        handleShowModal={this.props.handleShowModal}
        beast={beast}
        />
        </Col>)
    });

  return (
    <main>
      <Row xs={1} sm={2} md={3} lg={4}>
      {myData}
      </Row>
    </main>
  );
}
}

export default Main;