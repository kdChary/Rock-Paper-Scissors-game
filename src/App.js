import {Component} from 'react'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {playerChoice: '', showRules: false, score: 0}

  getValue = () => {
    const index = Math.floor(Math.random() * 3)
    console.log(index)

    return choicesList[index]
  }

  onClickShowRules = () => {
    this.setState({showRules: true})
  }

  onClickCross = () => {
    this.setState({showRules: false})
  }

  render() {
    const {score} = this.state

    console.log(this.getValue())

    return <div>render Things</div>
  }
}

export default App
