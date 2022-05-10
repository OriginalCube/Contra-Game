import React from 'react';
import Typical from 'react-typical';

const DialogueBox = (props) => {
  const [text, setText] = React.useState('');
  const Tutorial = ["Hello Welcome to the world of browser...", "To start, you can use Arrow keys or WASD to move the character...",
  " "];

  React.useEffect(() => {
    dialogueText(props.mode, props.id);
  }, [props.id])

  const dialogueText = (key, id) =>{
     if(key === 'Tutorial'){
      setText(Tutorial[id]);
    }
  }

  const onClicked = () =>{
    const audio = new Audio('./audio/keypress.mp3');
    audio.play();
    props.response(props.id+1);
  }

  return (
    <div className='dialogueBox'>
      <Typical steps={[text, 1000]}
        className='dialogueText'
        />
      <button className='dialogueButton' onClick={()=>onClicked()}>Next</button>
    </div>
  )
}

export default DialogueBox