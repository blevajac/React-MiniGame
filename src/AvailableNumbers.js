import React, { Component } from 'react';

//components
import NumberButton from './NumberButton';

class AvailableNumbers extends Component {
  constructor(){
    super();

    this.myCallback = this.myCallback.bind(this);
    //this.sendClickedNumber = this.sendClickedNumber.bind(this);
  }

  myCallback(dataFromChild) {
    this.props.callbackFromParent(dataFromChild);
  }
  /*
  sendClickedNumber(numver) {
    let test = numver;

    this.props.callbackFromParent(test);
  }
*/
  render() {
    const { randomNumber } = this.props;
    let arrayOfRandomNumbers = [];

    for ( let i = 1; i <= randomNumber; i++) {
      arrayOfRandomNumbers.push(i);
    }

    let numberButton = arrayOfRandomNumbers.map((number) => {
      // return ( <button key={number} onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  >{ number }</button> );
      return ( <NumberButton key={number} callbackFromParent={ this.myCallback } number={number}/> );
    });

    return (
      <div className="">
        <p>AvailableNumbers</p>
        { numberButton }
      </div>
    );
  }
}

export default AvailableNumbers;
