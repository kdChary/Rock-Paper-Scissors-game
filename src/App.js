import {Component} from 'react'

import './App.css'
import GameItems from './components/GameItems'
import {
  Container,
  OptionsList,
  TextContent,
  ScoreCard,
  Button,
  ResultContainer,
  ResultCard,
  ResultImg,
  ResultItem,
} from './styledApp'

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
  state = {
    playerChoice: {},
    randomChoice: {},
    showResult: false,
    score: 0,
    result: '',
  }

  onClickPlayAgain = () => {
    this.setState({result: '', showResult: false})
  }

  getValue = () => {
    const index = Math.floor(Math.random() * 3)

    return choicesList[index]
  }

  getResult = () => {
    const {playerChoice, randomChoice} = this.state
    const {id} = playerChoice
    const randId = randomChoice.id

    if (id === randId) {
      this.setState({result: 'IT IS DRAW', showResult: true})
    } else if (id === 'ROCK' && randId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (id === 'ROCK' && randId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (id === 'PAPER' && randId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (id === 'PAPER' && randId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (id === 'SCISSORS' && randId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (id === 'SCISSORS' && randId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        showResult: true,
      }))
    }
  }

  clickedItem = id => {
    const randomValue = this.getValue()
    const choice = choicesList.filter(item => item.id === id)

    this.setState(
      {playerChoice: choice[0], randomChoice: randomValue},
      this.getResult,
    )
    console.log(randomValue.id)
  }

  renderScoreCardSection = () => {
    const {score} = this.state
    return (
      <Container>
        <TextContent header>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </TextContent>
        <ScoreCard>
          <TextContent score>
            Score <br />
            <TextContent score as="span">
              {score}
            </TextContent>
          </TextContent>
        </ScoreCard>
      </Container>
    )
  }

  renderGameItems = () => (
    <OptionsList>
      {choicesList.map(choice => (
        <GameItems
          key={choice.id}
          itemData={choice}
          clickedItem={this.clickedItem}
        />
      ))}
    </OptionsList>
  )

  renderResultCard = () => {
    const {playerChoice, randomChoice, result} = this.state

    return (
      <ResultContainer>
        <ResultCard>
          <ResultItem>
            <TextContent>YOU</TextContent>
            <ResultImg src={playerChoice.imageUrl} alt="your choice" />
          </ResultItem>
          <ResultItem>
            <TextContent>OPPONENT</TextContent>
            <ResultImg src={randomChoice.imageUrl} alt="opponent choice" />
          </ResultItem>
        </ResultCard>
        <ResultItem>
          <TextContent>{result}</TextContent>
          <Button type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </Button>
        </ResultItem>
      </ResultContainer>
    )
  }

  render() {
    const {showResult} = this.state

    return (
      <Container main>
        {this.renderScoreCardSection()}

        {showResult ? this.renderResultCard() : this.renderGameItems()}
        <Button rules>Rules</Button>
      </Container>
    )
  }
}

export default App
