const axios = require('axios')

const myAWS = 'https://0dvqmfkhye.execute-api.us-east-2.amazonaws.com/default/NateRPS'

// Adding in the CORS-anywhere to remove CORS errors from the react app. 
const CORSAnywhere = 'https://cors-anywhere.herokuapp.com/'

// isloating my axios function in this module
const API = {
    // making a call to my own AWS Lambda API to play Rock-Paper-Scissors
    playRPS : theThrow => axios.post(CORSAnywhere + myAWS, {myThrow : theThrow})
}

module.exports = API

