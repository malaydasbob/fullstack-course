import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({label, handleClick}) => {
  return(
    <button onClick={handleClick}>{label}</button>
  )
}

const Statistics = (props) => {
  const {text, value} = props 

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const allFeedbacks = () => good + bad + neutral
  const averageFeedbacks = () => (allFeedbacks() === 0) ? 0 : (good - bad) / allFeedbacks()
  const positiveFeedbacks = () => (allFeedbacks() === 0) ? 0 : good / allFeedbacks()

  if(allFeedbacks() === 0) {
    return (
      <div>
        <h1>Give Feedback</h1>
          <Button label='good' handleClick={handleGoodClick}></Button>
          <Button label='neutral' handleClick={handleNeutralClick}></Button>
          <Button label='bad' handleClick={handleBadClick}></Button>
        <h1>Statistics</h1>
        <p>No statistic yet</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button label='good' handleClick={handleGoodClick}></Button>
      <Button label='neutral' handleClick={handleNeutralClick}></Button>
      <Button label='bad' handleClick={handleBadClick}></Button>
      
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistics text='good' value={good}></Statistics>
          <Statistics text='neutral' value={neutral}></Statistics>
          <Statistics text='bad' value={bad}></Statistics>    
          <Statistics text='all' value={allFeedbacks()}></Statistics>
          <Statistics text='average' value={averageFeedbacks()}></Statistics>
          <Statistics text='positive' value={positiveFeedbacks()}></Statistics>
        </tbody>
      </table>  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)