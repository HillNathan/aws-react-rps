import React, { Component } from 'react';
import './App.css';

const API = require('./utils')

class App extends Component {
  state = {
    myThrow: "",
    lambda: "",
    result: ""
  }

  // makes a call to my own AWS API endpoint and should return a JSON object telling me if I won or lost
  playLambdaRPS = (myThrow) => {
    this.setState({myThrow})
    API.playRPS(myThrow)
    .then(response => {
      console.log(response)
      this.setState({
        lambda : response.data.lambda,
        result : response.data.result
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='display-3'>Nate's AWS Lambda RPS Game</h1>
        </header>

        <div className='App-main'>
          <div className = 'container'>
            <div className='row justify-content-center'>
                  <div className="col-4">
                    <button type="button" 
                            test-id="rock-button"
                            className="btn btn-dark rock-button"
                            onClick={() => this.playLambdaRPS("rock")}>
                      ROCK
                    </button>
                  </div>
                  <div className="col-4">
                    <button type="button" 
                            test-id="paper-button"
                            className="btn btn-dark paper-button"
                            onClick={() => this.playLambdaRPS("paper")}>
                      PAPER
                    </button>
                  </div>
                  <div className="col-4">
                    <button type="button" 
                            test-id="rock-button"
                            className="btn btn-dark scissors-button"
                            onClick={() => this.playLambdaRPS("scissors")}>
                      SCISSORS
                    </button>
                  </div>
            </div>

            {/* RPS response area */}
            <div className='row justify-content-center'>
              <div className="col-4">
                <div className="row justify-content-center lambda-header ">
                    LAMBDA THROW:
                </div>
                <div className="row justify-content-center lambda-throw">
                  <span>{this.state.lambda.toUpperCase()}</span>  
                </div>
                <div className="row justify-content-center lambda-result">
                  { (this.state.result === "win" ? 
                    <span>YOU WIN!</span>
                    : 
                    (this.state.result === "lose") ?
                      <span>YOU LOSE!!!</span>
                      :
                      (this.state.result === "draw") ?
                        <span>DRAW...</span>
                        :
                        <span>...</span>)
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
