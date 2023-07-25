// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenOrOdd: 'Count is Even'}

  incrementTheNumber = () => {
    this.setState(prevState => {
      const randomNumber = Math.ceil(Math.random(0.9) * 10)
      let isEvenOrOdd = 'Even'
      const number = randomNumber + prevState.count
      if (number % 2 === 0) {
        isEvenOrOdd = 'Count is Even'
      } else {
        isEvenOrOdd = 'Count is Odd'
      }
      return {count: prevState.count + randomNumber, evenOrOdd: isEvenOrOdd}
    })
  }

  render() {
    const {count, evenOrOdd} = this.state
    return (
      <div className="bg-container">
        <h1 className="count">Count {count}</h1>
        <p className="count-type">{evenOrOdd}</p>
        <button onClick={this.incrementTheNumber} className="button">
          Increment
        </button>
        <p className="description">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
