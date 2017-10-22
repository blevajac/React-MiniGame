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
    const { maxNumber } = this.props;
    const { gameOverNumber } = this.props;
    let arrayOfRandomNumbers = [];
    let numberButton = null;
    let test = null;

    for ( let i = 1; i <= maxNumber; i++) {
      arrayOfRandomNumbers.push(i);
    }

    if(gameOverNumber===1) {
      return test = (
        <div>
          <p>Game Over</p>
          <button>Play Again!!!</button>
        </div>
      );
    }else{
      return numberButton = arrayOfRandomNumbers.map((number) => {
        // return ( <button key={number} onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  >{ number }</button> );
        return ( <NumberButton key={number} callbackFromParent={ this.myCallback } number={number}/> );
      });
    }



    return (
      <div className="available_numbers">
        { numberButton }
        { test }
      </div>
    );
  }
}

export default AvailableNumbers;
