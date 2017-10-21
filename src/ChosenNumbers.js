import React, { Component } from 'react';


class ChosenNumbers extends Component {
  render() {
    const { listDataFromChild } = this.props;

    return (
      <div className="">
        <p>ChosenNumbers are: { listDataFromChild }</p>      
      </div>
    );
  }
}

export default ChosenNumbers;
