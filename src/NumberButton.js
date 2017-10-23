import React, {Component} from 'react';

//css
import './css/number_button.css';

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

  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    if(nextProps.numberReturned === nextProps.number) {
      this.loadData();
    }

  }

  loadData() {
    this.setState({
      isButtonDisabled: false
    });
  }

  render() {
    const { number } = this.props;
    const { numberReturned } = this.props;

    return(
        <button onClick={(e) => this.sendClickedNumber(number, e)} disabled={this.state.isButtonDisabled}  className={ this.state.isButtonDisabled ? "round-button disable" : "round-button " } >{ number }</button>
    );
  }
}

export default NumberButton;
