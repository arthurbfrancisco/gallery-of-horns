import React from 'react';
import HornedBeast from './gallery-of-horns';

class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeast
          title="First Horned Beast"
          imageUrl="#"
          description="Description of the first horned beast."
        />
        <HornedBeast
          title="Second Horned Beast"
          imageUrl="#"
          description="Description of the second horned beast."
        />
      </div>
    );
  }
}

export default Main;