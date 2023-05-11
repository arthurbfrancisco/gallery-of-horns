import React from 'react';
import HornedBeast from './Hornedbeast';
// import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {

    let myData = this.props.data.map((beast, idx) => {
return(
      <HornedBeast
        key={idx}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
      />)
    });

    return (

      <main>
        {myData}
      </main >
    );

  }
}

export default Main;