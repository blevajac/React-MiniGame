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
        <button className="btn btn-primary btn-sm btn-block" onClick={() => {

            if(sumOfChosenNumbers === randomNumber) {
              console.log('OK');
              return(
                  <button type="button" class="btn btn-success btn-sm">
                      <span class="glyphicon glyphicon-ok"></span> Ok
                  </button>
              );
            }else {
              console.log('NOPE');
              return(
                <button type="button" class="btn btn-danger btn-sm">
                  <span class="glyphicon glyphicon-remove"></span> Remove
                </button>
              );
            }
        }} onDoubleClick={() => {
          this.props.newNumber();
        }} >=</button>

        <button type="button" className="btn btn-primary btn-sm btn-block" disabled={this.disableDecrement()}
            onClick={() => {
              this.decrement()

              this.props.newNumber(this.state.number);
            }}><span className="glyphicon glyphicon-refresh"></span><span className="badge badge-pill badge-primary">{this.state.number}</span>
        </button>
      </div>
    );
  }
}

export default ButtonContainer;
