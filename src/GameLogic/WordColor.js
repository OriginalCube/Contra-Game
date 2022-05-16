import React from 'react'

const WordColor = () => {
    const [score, setScore] = React.useState(0);
  return (
    <div className='wordColor'>
        <div className='wordQuestion'>Blue</div>
        <p className='wordScore'>Score : {score}</p>
        <div className='wordAnswer'></div>
    </div>
  )
}

export default WordColor