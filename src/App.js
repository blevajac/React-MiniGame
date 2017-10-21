import React, { Component } from 'react';

//helper-functions
import h from './helper_functions/helpers';

//components
import ShowStarsComponent from './ShowStarsComponent';
import ButtonContainer from './ButtonContainer';
import ChosenNumbers from './ChosenNumbers';
import AvailableNumbers from './AvailableNumbers';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: h.getRandomNumber(),
      listDataFromChild: []
    }

    this.myCallback = this.myCallback.bind(this);
  }

  myCallback(dataFromChild) {
    this.setState( prevState => ({
        listDataFromChild: [...prevState.listDataFromChild, dataFromChild]
    }))
    //ES 6
    //this.setState({    listDataFromChild: [...this.state.listDataFromChild, dataFromChild]    });
  }

  render() {

    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 col-md-5">
                <ShowStarsComponent randomNumber={ this.state.randomNumber } />
              </div>
              <div className="col-12 col-md-2">
                <ButtonContainer />
              </div>
              <div className="col-12 col-md-5">
                <ChosenNumbers listDataFromChild={ this.state.listDataFromChild } />
              </div>
          </div>
          <div className="row">
            <AvailableNumbers randomNumber={ this.state.randomNumber } callbackFromParent={ this.myCallback } />
          </div>
      </div>
    );
  }
}

export default App;
