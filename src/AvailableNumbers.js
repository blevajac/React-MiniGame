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
    const { chosenNumbersReturned } = this.props;
console.log(chosenNumbersReturned);
    let makeArrayForRandomdPlayerNumber = [];
    let numberButton = null;
    let test = null;
    //let numberReturned = chosenNumbersReturned.splice(0,1);
    let numberReturned = chosenNumbersReturned[0];

    for ( let i = 1; i <= maxNumber; i++) {
      makeArrayForRandomdPlayerNumber.push(i);
    }

    if(gameOverNumber===1) {
      return test = (
        <div>
          <p>Game Over</p>
          <button>Play Again!!!</button>
        </div>
      );
    }else{
      return numberButton = makeArrayForRandomdPlayerNumber.map((number) => {
          // return ( <button key={number} onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  >{ number }</button> );
          return ( <NumberButton key={number} numberReturned={numberReturned} callbackFromParent={ this.myCallback } number={number}/> );
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
