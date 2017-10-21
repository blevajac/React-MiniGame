import React, {Component} from 'react';

class NumberButton extends Component{
  constructor() {
    super();
    this.state = {
      isButtonDisabled: false
    }

  }
  sendClickedNumber(numver) {
    let test = numver;

    this.props.callbackFromParent(test);
    this.setState({
      isButtonDisabled: true
    });

  }
  render() {
    const { number } = this.props;
    return(
      <button onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  >{ number }</button>
    );
  }
}

export default NumberButton;
