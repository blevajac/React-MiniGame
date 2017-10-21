import React, { Component } from 'react';

import h from './helper_functions/helpers';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5
    };

    this.decrement = this.decrement.bind(this);

  }

  decrement() {
    this.setState({
      number: this.state.number - 1
    })
  }

  disableDecrement() {
    if(this.state.number <= 0) {
      return true;
    } else {
      return false;
    }
  }


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
          this.props.newNumber();
        }} >=</button>

        <button type="button" className="btn btn-default btn-sm" disabled={this.disableDecrement()}
            onClick={() => {
              this.decrement()

              this.props.newNumber(number);
            }}><span className="glyphicon glyphicon-refresh"></span>{this.state.number}
        </button>
      </div>
    );
  }
}

export default ButtonContainer;
