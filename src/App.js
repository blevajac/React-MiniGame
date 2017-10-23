import React, { Component } from 'react';

//helper-functions
import h from './helper_functions/helpers';

//components
import ShowStarsComponent from './ShowStarsComponent';
import ButtonContainer from './ButtonContainer';
import ChosenNumbers from './ChosenNumbers';
import AvailableNumbers from './AvailableNumbers';
import GameDescription from './GameDescription';

//css
import './css/available_numbers.css';
import './css/app.css';

const startingNumber = h.getRandomNumber();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: startingNumber,
      maxNumber: startingNumber,
      listDataFromChild: [],
      sumOfChosenNumbers: null,
      gameOverNumber: 4,
      chosenNumbersReturned: []
    }

    this.myCallback = this.myCallback.bind(this);
    this.newRander = this.newRander.bind(this);
    this.testMeChosenNumber = this.testMeChosenNumber.bind(this);
  }

  newRander(gameOverNumber){
    let newNumber = h.getNewRandomNumber(this.state.maxNumber);

    this.setState({
        randomNumber: newNumber,
        sumOfChosenNumbers: 0,
        gameOverNumber: gameOverNumber
    });
  }

  myCallback(dataFromChild) {
    console.log('returned to app', dataFromChild);
    let sum = this.state.sumOfChosenNumbers + dataFromChild;

    this.setState( prevState => ({
        listDataFromChild: [...prevState.listDataFromChild, dataFromChild],
        sumOfChosenNumbers: sum,
        chosenNumbersReturned: []
    }));
    //ES 6 ==>  this.setState({ listDataFromChild: [...this.state.listDataFromChild, dataFromChild] });

  }

  testMeChosenNumber(dataFromChild) {
    let listDataFromChild = this.state.listDataFromChild;
    let index = listDataFromChild.indexOf(dataFromChild);

    listDataFromChild.splice(index, 1);

    this.setState( prevState => ({
        chosenNumbersReturned: [...prevState.chosenNumbersReturned, dataFromChild],
        listDataFromChild: listDataFromChild,
    }));

  }

  render() {

    return (
      <div className="container-fluid app">
          <h1>Draw Nine</h1>
          <hr></hr>
          <div className="row">
              <div className="col-12 col-md-5 border border-primary rounded">
                <ShowStarsComponent randomNumber={ this.state.randomNumber } />
              </div>
              <div className="col-12 col-md-2 border border-light rounded">
                <ButtonContainer sumOfChosenNumbers={this.state.sumOfChosenNumbers} randomNumber={ this.state.randomNumber } newNumber={ this.newRander } />
              </div>
              <div className="col-12 col-md-5 border border-primary rounded">
                <ChosenNumbers listDataFromChild={ this.state.listDataFromChild } callbackFromParent={ this.testMeChosenNumber }/>
              </div>
          </div>
          <div className="row available_numbers">
            <AvailableNumbers maxNumber={ this.state.maxNumber } chosenNumbersReturned={ this.state.chosenNumbersReturned } callbackFromParent={ this.myCallback } gameOverNumber={ this.state.gameOverNumber}/>
          </div>
          <div className="row">
            {/*  <GameDescription /> */}
          </div>
      </div>
    );
  }
}

export default App;
