import React, {Component} from 'react';

//css
import './css/NumberButton.css';

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

        <button onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  className="round-button" >{ number }</button>

    );
  }
}

export default NumberButton;
