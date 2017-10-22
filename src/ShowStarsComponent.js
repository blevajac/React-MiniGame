import React, { Component } from 'react';


class ShowStarsComponent extends Component {
  render() {
    const { randomNumber } = this.props;
    return (
      <div className="justify-content-center d-flex align-items-center align-self-center text-center">
        <p>ShowStarsComponent ranodom number given is: { randomNumber }</p>
      </div>
    );
  }
}

export default ShowStarsComponent;
