/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  margin: ${props => props.main && '0'};
  width: ${props => !props.main && '90%'};
  max-width: ${props => !props.main && '553px'};
  height: ${props => (props.main ? '100vh' : 'auto')};
  border: ${props => (props.main ? 'none' : 'solid 2px #ffffff')};
  border-radius: ${props => !props.main && '13px'};
  background-color: ${props => (props.main ? '#223a5f' : 'transparent')};
  display: flex;
  flex-direction: ${props => (props.main ? 'column' : 'row')};
  justify-content: ${props => (props.main ? 'space-around' : 'space-between')};
  padding: ${props => !props.main && '0 7px'};
  align-items: center;
`
export const OptionsList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
  max-width: 454px;
`
export const TextContent = styled.p`
  font-family: ${props =>
    props.header || props.score ? 'Bree Serif' : 'Roboto'};
  font-weight: ${props => (props.score ? '600' : '500')};
  font-size: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.score ? (props.as ? '17px' : '9px') : '11px'};
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 11px;
`

export const ScoreCard = styled.div`
  text-align: center;
  background-color: #ffffff;
  width: 77px;
  border: solid 1px #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
`

export const Button = styled.button`
  background-color: #ffffff;
  //   width: 77px;
  padding: 3px 11px;
  border: solid 1px #ffffff;
  border-radius: 4px;
  align-self: ${props => props.rules && 'flex-end'};
  font-size: 11px;
  font-weight: 500;
  font-family: 'Bree Serif';
  margin-right: ${props => props.rules && '5px'};
  cursor: pointer;
  outline: none;
`
export const ResultContainer = styled.div`
  width: ${props => (props.rules ? '100%' : '300px')};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultCard = styled.div`
  display: flex;
  flex-direction: ${props => (props.rules ? 'column' : 'row')}
  justify-content: space-between;
  width: 90%;
`
export const ResultImg = styled.img`
  width: ${props => (props.rules ? '100%' : '112px')};
  max-width: ${props => (props.rules ? '320px' : '135px')};
  flex-grow: 1;
`
export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
