import React from 'react'
//import Clock from './Clock'
import CodeRoom from './CodeRoom'

const GameEngine = (props) => {
  const [code, setCode] = React.useState([0,1,2,3,4,5])
  const [codeRoom, setCodeRoom] = React.useState(true);
  return (
    <div>
      {codeRoom?<CodeRoom code={code} setCode={setCode}/>:null}
    </div>
  )
}

export default GameEngine