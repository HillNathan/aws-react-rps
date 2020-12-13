# Amazon Lambda Rock-Paper-Scissors Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Overview

In response to an excercise given by a prospective employer, I decided to dip my toe into the world of AWS Lambda. This proved to be an interesting and unique challenge, as I have never even looked in the AWS toolkit before creating an account a few days ago. Thankfully, AWS allows me to program using Node.js, which is a language I am already quite familiar with, and allowed me less of a steep learning curve. 

### Using AWS Lambda

My first lambda function was pretty basic, just returning a JSON object with info about myself in it. Then, one morning at about 6am, I decided to take on a project with a slightly larger scope: Rock-Paper-Scissors. What I would do is have the ASW Lambda function take a HTTP POST input with the user's choice, generate a random choice, and finally return the function's choice and the result of the contest. 

**Example Input**
`{ myThrow: "paper" }`

**Example Output**
`{
    "lambda": "rock",
    "result": "win"
}`

In this example, the player chose "paper", the lambda function generated "rock", and since "paper covers rock" the player is awarded the win. All of the strings should always be lowercase, and result will always be "win", "lose", or "draw" in the case that both player and lambda function generate the same value. 

### Building in React

What I did after I built the lambda function is to build a serverless React app that will interact with the lambda function. I kept it basic, but functional. It turned out to be a really fun little project, and I had a really fun time building it. 

## Nathan Hill