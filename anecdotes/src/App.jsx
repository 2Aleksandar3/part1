import { useState } from 'react'


const MostVotes=(props)=>{
  let n =0
  let mostAnecdotes=props.anecdotes[n]

  console.log(props)
  let mostNum=props.votes[n]
  for(let i=0;i<props.lengthAnecdotes;i++){
    if(props.votes[i]>mostNum){
      mostNum=props.votes[i] 
      mostAnecdotes=props.anecdotes[i]
      console.log(mostNum)
    }
  }
  console.log(mostNum)
  
  return(<>
    <p>{mostAnecdotes}</p>
    <p>Has {mostNum} votes</p>
 </>
  )
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const lengthAnecdotes=anecdotes.length;

  const randomNumber = Math.floor(Math.random() * anecdotes.length)
  

const onRandomAnecdote=()=>{
    setSelected(randomNumber) 
    console.log(lengthAnecdotes)
}

const onVote=()=>{
let copy=[...vote]
  copy[selected]+=1
    setVote(copy)
    
   
}

  const [selected, setSelected] = useState(0)
  const [vote, setVote]= useState(Array(lengthAnecdotes).fill(0))
  

  return (
    <div>
    <h1>Anecdote of the day</h1>

    <h4>{anecdotes[selected]}</h4>
    
    <p>has {vote[selected]} votes</p>
    <button onClick={onRandomAnecdote}>next anecdote</button>
    <button onClick={onVote}>vote</button>

    <h1>Anecdote with the most votes</h1>
    <MostVotes anecdotes={anecdotes} lengthAnecdotes={lengthAnecdotes} votes={vote}/>
   
    </div>
  )
}

export default App
