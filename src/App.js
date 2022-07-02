import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Square from './components/square';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlayer, setXplayer] = useState(true)
  const handlePlay = (index) => {
    const temp = board.slice()
    if(xPlayer){
     temp[index] = "X"
    }else {
      temp[index] = "O"
    }
    setBoard(temp)
    setXplayer(!xPlayer)
  }
  const winner = caculateWinner(board)
  return (
    
    <Container>
      {winner ? <h3>Win: {winner}</h3> : null}
      <Board>
     {board.map((item, index) => <Square value={item} handlePlay={handlePlay} index={index} key={index}/>)}
    </Board>
    </Container>

  )
}

const caculateWinner = (board) =>{
  const winline = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i = 0; i< winline.length; i++){
    const [a, b, c] = winline[i]
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
    return board[a]
    }
  }
  return 
}
const Container = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
`

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
  
`


export default App;
