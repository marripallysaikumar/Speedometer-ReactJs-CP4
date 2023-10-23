// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  acc = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brr = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="img-size"
          />
          <h2 className="heading">Speed is {speed}mph</h2>
          <p className="heading">Min Limit 0mph, Max Limit is 200mph</p>
          <div>
            <button className="button1" type="submit" onClick={this.acc}>
              Accelerate
            </button>
            <button className="button2" type="submit" onClick={this.brr}>
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
