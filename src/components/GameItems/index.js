import {ListItem, GameButton, ItemImg} from './styled'

const GameItems = props => {
  const {itemData, clickedItem} = props
  const {id, imageUrl} = itemData

  const onChooseItem = () => {
    clickedItem(id)
  }

  const getTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return null
    }
  }

  return (
    <ListItem>
      <GameButton type="button" onClick={onChooseItem}>
        <ItemImg
          src={imageUrl}
          alt={id.toLowerCase()}
          data-testid={getTestId()}
        />
      </GameButton>
    </ListItem>
  )
}

export default GameItems
