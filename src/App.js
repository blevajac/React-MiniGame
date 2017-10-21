import React, { Component } from 'react';

//helper-functions
import h from './helper_functions/helpers';

//components
import ShowStarsComponent from './ShowStarsComponent';
import ButtonContainer from './ButtonContainer';
import ChosenNumbers from './ChosenNumbers';
import AvailableNumbers from './AvailableNumbers';

const startingNumber = h.getRandomNumber();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: startingNumber,
      maxNumber: startingNumber,
      listDataFromChild: [],
      sumOfChosenNumbers: null
    }

    this.myCallback = this.myCallback.bind(this);
    this.newRander = this.newRander.bind(this);
  }

  newRander(){
    let newNumber = h.getNewRandomNumber(this.state.maxNumber);
    console.log('newNumber',newNumber);


    this.setState({
        randomNumber: newNumber,
        sumOfChosenNumbers: 0
    });
  }

  myCallback(dataFromChild) {
    let sum = this.state.sumOfChosenNumbers + dataFromChild;

    this.setState( prevState => ({
        listDataFromChild: [...prevState.listDataFromChild, dataFromChild],
        sumOfChosenNumbers: sum
    }))
    //ES 6 ==>  this.setState({ listDataFromChild: [...this.state.listDataFromChild, dataFromChild] });
  }

  render() {

    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 col-md-5">
                <ShowStarsComponent randomNumber={ this.state.randomNumber } />
              </div>
              <div className="col-12 col-md-2">
                <ButtonContainer sumOfChosenNumbers={this.state.sumOfChosenNumbers} randomNumber={ this.state.randomNumber } newNumber={ this.newRander } />
              </div>
              <div className="col-12 col-md-5">
                <ChosenNumbers listDataFromChild={ this.state.listDataFromChild } />
              </div>
          </div>
          <div className="row">
            <AvailableNumbers maxNumber={ this.state.maxNumber } callbackFromParent={ this.myCallback } />
          </div>
      </div>
    );
  }
}

export default App;
