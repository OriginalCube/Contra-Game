import React from 'react'

const WordColor = () => {
    const [score, setScore] = React.useState(0);
    const [color, setColor] = React.useState(['#F6ED60', '#FBA51A', '#F4EB20', '#70C055', '#40B8EA', '#40B8EA', '#EC197A']);
    const [colorText, setColorText] = React.useState(['Red', 'Orange' , 'Yellow', 'Green', 'Blue', 'Violet', 'Pink']);
    const questionLogic = () =>{

    }
    return (
    <div className='wordColor'>
        <div className='wordQuestion' style={{color: color[3]}}>{colorText[2]}</div>
        <p className='wordScore'>Score : {score}</p>
        <div className='wordAnswer'>
          <div className='wordBlock' style={{}}>
            <p className='wordText'>Red</p></div>
          <div className='wordBlock' style={{}}>
            <p className='wordText'>Blue</p></div>
          <div className='wordBlock' style={{}}>
            <p className='wordText'>Green</p></div>
          <div className='wordBlock' style={{}}>
            <p className='wordText'>Yellow</p></div>
        </div>
    </div>
  )
}

export default WordColor