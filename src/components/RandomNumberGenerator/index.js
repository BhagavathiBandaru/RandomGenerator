// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumberFrom = () => Math.ceil(Math.random() * 100)

  clickToGetRandomNumber = () => {
    const randomNumber = this.getRandomNumberFrom()

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state

    return (
      <div className="card-container">
        <div className="random-num-display-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.clickToGetRandomNumber}
          >
            Generate
          </button>
          <h1 className="count">{number}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
