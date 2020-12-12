const axios = require('axios')

const myAWS = 'https://0dvqmfkhye.execute-api.us-east-2.amazonaws.com/default/NateRPS'
const CORSAnywhere = 'https://cors-anywhere.herokuapp.com/'

// isloating my axios function(s) in this module
const API = {
    // my own AWS Lambda API to play Rock-Paper-Scissors
    playRPS : theThrow => axios.post(CORSAnywhere + myAWS, {myThrow : theThrow})
}

module.exports = API

