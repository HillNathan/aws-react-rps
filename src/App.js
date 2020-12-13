import React, { Component } from 'react';
import './App.css';

// bringing in an external module that will hold our API calls. 
const API = require('./utils')

class App extends Component {
  // set some initial values for state. 
  state = {
    myThrow: "",
    lambda: "",
    result: ""
  }

  // makes a call to my own AWS API endpoint and should return a JSON object telling me if I won or lost
  playLambdaRPS = (myThrow) => {
    // set my value to the local state
    this.setState({myThrow})

    // make the call to the AWS lambda function with my choice
    API.playRPS(myThrow)
    .then(response => {
      // handle the response from the Lambda function. We're putting the response in state, since our component 
      //  will react to the data in state and update the appropriate values in our app. 
      this.setState({
        lambda : response.data.lambda,
        result : response.data.result
      })
    })
  }

  // OUR JSX is down here...
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
                    {/* Rock Button */}
                    <button type="button" 
                            test-id="rock-button"
                            className="btn btn-dark rock-button"
                            onClick={() => this.playLambdaRPS("rock")}>
                      ROCK
                    </button>
                  </div>
                  <div className="col-4">
                    {/* Paper Button */}
                    <button type="button" 
                            test-id="paper-button"
                            className="btn btn-dark paper-button"
                            onClick={() => this.playLambdaRPS("paper")}>
                      PAPER
                    </button>
                  </div>
                  <div className="col-4">
                    {/* Scissors Button */}
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
                  {/* This div tag shows the response from the lambda function directly from state */}
                  <span>{this.state.lambda.toUpperCase()}</span>  
                </div>
                <div className="row justify-content-center lambda-result">
                  {/* This div tag contains a series of ternery operators to helps parse the result from state and 
                        show a custom message for each possible outcome, including a final fail for the empty string 
                        from the initial state.  */}
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
