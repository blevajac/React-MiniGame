import React, { Component } from 'react';


class ShowStarsComponent extends Component {
  render() {
    const { randomNumber } = this.props;
    return (
      <div className="">
        <p>ShowStarsComponent ranodom number given is: { randomNumber }</p>
      </div>
    );
  }
}

export default ShowStarsComponent;
