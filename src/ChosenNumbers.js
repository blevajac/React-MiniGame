import React, { Component } from 'react';


class ChosenNumbers extends Component {
  render() {
    const { listDataFromChild } = this.props;
    let sum = null;
    listDataFromChild.map(function(item){
      sum += item;
    });


    console.log(sum);
    return (
      <div className="">
        <p>ChosenNumbers are: { listDataFromChild }</p>
        <p>sum of number is { sum }</p>
      </div>
    );
  }
}

export default ChosenNumbers;
