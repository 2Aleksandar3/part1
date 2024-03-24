import { useState } from 'react'


const Button = ({onPress,text}) => (
    <button onClick={onPress}>
      {text}
    </button>
  )

  const StatisticsLine=({stat,text})=>{
    return( <tr><td>{text}</td><td> {stat}</td></tr>)}

  const Statistics = (props) => {
    let total=props.good+props.neutral+props.bad
    let average=(props.good - props.bad) /total
    let positive=(props.good / total) * 100+"%"
    if(total===0){return(
    <>
    <h1>statics</h1>
    <h3>No feedback given</h3>
    </>)}else
    return(
    <>
    <h1>statics</h1>
    <table>
    <tbody>
    
    <StatisticsLine stat={props.good} text={'good'}/>
    <StatisticsLine stat={props.neutral} text={'neutral'}/>
    <StatisticsLine stat={props.bad} text={'bad'}/>
    <StatisticsLine stat={total} text={'total'}/>
    <StatisticsLine stat={average} text={'average'}/>
    <StatisticsLine stat={positive} text={'positive'}/>
    
    </tbody>
    </table>
    </>
  )}
  
 


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const goodClick = () => {
    console.log('clicked')
    setGood(good+1)
    
    console.log('good= '+good)
    
  }
  const neutralClick = () => {
    console.log('clicked')
    setNeutral(neutral+1)
    
    console.log('neutral= '+neutral)
    
  }
  const badClick = () => {
    console.log('clicked')
    setBad(bad+1)
    
    console.log('bad= '+bad)
    
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button  onPress={goodClick}  text={'good'}/>
      <Button  onPress={neutralClick} text={'neutral'}/>
      <Button  onPress={badClick} text={'bad'}/>
      
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App