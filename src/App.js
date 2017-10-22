import React, { Component } from 'react';

//helper-functions
import h from './helper_functions/helpers';

//components
import ShowStarsComponent from './ShowStarsComponent';
import ButtonContainer from './ButtonContainer';
import ChosenNumbers from './ChosenNumbers';
import AvailableNumbers from './AvailableNumbers';
import GameDescription from './GameDescription';

const startingNumber = h.getRandomNumber();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: startingNumber,
      maxNumber: startingNumber,
      listDataFromChild: [],
      sumOfChosenNumbers: null,
      gameOverNumber: 4
    }

    this.myCallback = this.myCallback.bind(this);
    this.newRander = this.newRander.bind(this);
  }

  newRander(gameOverNumber){
    let newNumber = h.getNewRandomNumber(this.state.maxNumber);
    console.log('gameOverNumber', gameOverNumber);
    this.setState({
        randomNumber: newNumber,
        sumOfChosenNumbers: 0,
        gameOverNumber: gameOverNumber
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
                <ChosenNumbers listDataFromChild={ this.state.listDataFromChild } />
              </div>
          </div>
          <div className="row border border-primary rounded">
            <AvailableNumbers maxNumber={ this.state.maxNumber } callbackFromParent={ this.myCallback } gameOverNumber={ this.state.gameOverNumber}/>
          </div>
          <div className="row">
            {/*  <GameDescription /> */} 
          </div>
      </div>
    );
  }
}

export default App;
