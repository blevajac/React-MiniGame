import React, { Component } from 'react';

//components
import NumberButton from './NumberButton';


class ChosenNumbers extends Component {
  render() {
    const { listDataFromChild } = this.props;

    const numberButton = listDataFromChild.map((number) => {
      // return ( <button key={number} onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  >{ number }</button> );
      return ( <NumberButton key={number} callbackFromParent={ this.myCallback } number={number}/> );
    });

    return (
      <div className="">        
        { numberButton }
      </div>
    );
  }
}

export default ChosenNumbers;
