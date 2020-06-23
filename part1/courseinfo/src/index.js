import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History  = ({allClicks}) => {
  if(allClicks.length === 0){
    return(
      <div>
        <p>Press buttons to see the results</p>
      </div>
    )    
  }

  return (
    <div>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const Button = ({title, handleClick}) => (
  <button onClick={handleClick}>{title}</button>
)

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setClicks({...clicks, left : clicks.left + 1 })
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setClicks({...clicks, right : clicks.right + 1})
    setAll(allClicks.concat('R'))
  }

  return (
    <div>
      {clicks.left}
      <Button title='left' handleClick={handleLeftClick}></Button>
      <Button title='right' handleClick={handleRightClick}></Button>
      {clicks.right}
      <History allClicks={allClicks}></History>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
