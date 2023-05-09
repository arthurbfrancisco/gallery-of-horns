import React from 'react';
import HornedBeast from '.component/Hornedbeast';

class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeast
          title="First Horned Beast"
          imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description="Description of the first horned beast."
        />
        <HornedBeast
          title="Second Horned Beast"
          imageUrl="https://metro.co.uk/wp-content/uploads/2018/09/sei_31784882-985e.jpg?quality=90&strip=all&zoom=1&resize=480%2C318"
          description="Description of the second horned beast."
        />
      </div>
    );
  }
}

export default Main;