// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {button: false}

  subscribe = () => {
    this.setState(prevState => ({button: !prevState.button}))
  }

  getButtonText = () => {
    const {button} = this.state

    return button ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getButtonText()
    return (
      <div className="continer">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribe}>
          {btnText}
        </button>
      </div>
    )
  }
}
export default Welcome
