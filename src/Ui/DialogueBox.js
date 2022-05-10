import React from 'react';

const DialogueBox = (props) => {
    const Tutorial = ["Hello Welcome to the world of browser", "To start, you can use Arrow keys or WASD to move the character",
    ];
    const dialogueText = (key, id) =>{
      if(key === 'Tutorial'){
        return Tutorial[id];
      }
      return null;
    }
  return (
    <div className='dialogueBox'>
        <p className='dialogueText'></p>
    </div>
  )
}

export default DialogueBox