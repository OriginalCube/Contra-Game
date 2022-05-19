import React from 'react'
//import Clock from './Clock'
import CodeRoom from './CodeRoom'
import GameNavigation from './GameNavigation'
import WordColor from './WordColor'

const GameEngine = (props) => {
  const [code, setCode] = React.useState([0,1,2,3,4,5]);
  const [navigation, setNavigation] = React.useState(['Code', 'Room 1', 'Room 2', 'Room 3']);
  return (
    <div>
      <GameNavigation navigation={navigation} setNavigation={setNavigation}/>
      {navigation[0]==='Code'?<CodeRoom code={code} setCode={setCode}/>:null}
      {navigation[0]==='Room 1'? <WordColor/>: null/*Word Color*/}
    </div>
  )
}

export default GameEngine