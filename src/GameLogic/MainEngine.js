import React from 'react'
import Tutorial from './Tutorial'
import GameEngine from './GameEngine';
import SetDifficulty from './SetDifficulty'

const MainEngine = () => {
  const [gameMode, setGameMode] = React.useState({"tutorialMode":true,"mainMode":false, "difficultyMode": false});
  const [time, setTime] = React.useState(0);
  const gameResponse = (e) =>{
    setGameMode(e);
  }
  const setDifficulty = (e) =>{
    setTime(e);
  }
  return (
    <div>
        {gameMode.tutorialMode?<Tutorial response={(e)=>gameResponse(e)}/>:null}
        {gameMode.difficultyMode?<SetDifficulty response={(e)=>gameResponse(e)} difficultyResponse={(e)=>setDifficulty(e)}/>:null}
        {gameMode.mainMode?<GameEngine timer={time}/>:null}
    </div>
  )
}

export default MainEngine