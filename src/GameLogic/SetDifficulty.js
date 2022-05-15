import React from 'react'

const SetDifficulty = (props) => {
  const setDifficulty = (e) =>{
    props.difficultyResponse(e);
    props.response({"tutorialMode": false, "mainMode": true, "difficultyMode": false});
}
    return (
    <div className='setDifficulty'>
        <p className='difficultyTitle'>Set Difficulty Level</p>
        <div className='difficultyModes'>
            <p className='difficultyModesButton' style={{top:'5%'}} onClick={()=>setDifficulty(3000)}>Easy</p>
            <p className='difficultyModesButton' style={{top:'10%'}} onClick={()=>setDifficulty(6000)}>Normal</p>
            <p className='difficultyModesButton' style={{top:'15%'}} onClick={()=>setDifficulty(12000)}>Difficult</p>
        </div>
    </div>
  )
}

export default SetDifficulty