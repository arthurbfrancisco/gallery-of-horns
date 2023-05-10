import React from 'react';
import HornedBeast from './Hornedbeast';
import data from'../data.json';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {
    console.log(data);
    return (
 
        <Col>
        {data.map((beast, index) => (
          <HornedBeast
            key={index}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        ))}
     </Col>
    );
  }
}


export default Main;