/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ItemImg = styled.img`
  width: 112px;
  @media (min-width: 768px) {
    width: 133px;
  }
`
