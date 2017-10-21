import React, { Component } from 'react';

import h from './helper_functions/helpers';

class ButtonContainer extends Component {
  render() {
    const { sumOfChosenNumbers } = this.props;
    const { randomNumber } = this.props;

    return (
      <div className="">
        <p>ButtonContainer</p>
        <p>summ of chosen numbers {sumOfChosenNumbers}</p>
        <button onClick={() => {

          if(sumOfChosenNumbers === randomNumber) {
            console.log('OK');
            return(
                <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-ok"></span> Ok
                </button>
            );
          }else {
            console.log('NOPE');
            return(
              <button type="button" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-remove"></span> Remove
              </button>
            );
          }
        }} onDoubleClick={() => {
          /*
          let newNumber = h.getNewRandomNumber(randomNumber);
          console.log('newNumber',newNumber);
          this.props.newNumber(newNumber);
          */
          this.props.newNumber();
        }} >=</button>

        <button>5</button>
      </div>
    );
  }
}

export default ButtonContainer;
