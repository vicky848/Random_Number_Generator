// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChange = () => {
    const getResponse = Math.ceil(Math.random() * 100)

    this.setState({count: getResponse})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range <br />
            of 0 to 100
          </p>
          <button className="button-act" type="button" onClick={this.onChange}>
            Generate
          </button>

          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
