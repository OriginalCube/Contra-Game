import React from 'react';

const DialogueBox = (props) => {
  const [text, setText] = React.useState('');
  const Tutorial = ["Hello Welcome to the world of browser...", "You are trap in this world...",
  "The only way that you can get out is by solving the puzzles to get the code to unlock the browser...", 
  "Now that you have an idea on what this is you may now start..." , "Good luck, you'll need it..."];

  const Room1 = ["In this room, you will have to click on the right answer indicated by the text above.",
  "For example if the game gives you this question 'Text : color'." , "You will have to click the color of the written text by the background color of the choices."
  ,"And if the game gives you 'Color : Text'. You will have to click on the text that has the corresponding color."];
  React.useEffect(() => {
    dialogueText(props.mode, props.id);
  }, [props.id])

  const dialogueText = (key, id) =>{
     if(key === 'Tutorial'){
      setText(Tutorial[id]);
    }else if(key === 'Room1'){
      setText(Room1[id]);
    }
  }

  const onClicked = () =>{
    const audio = new Audio('./audio/keypress.mp3');
    audio.play();
    props.response(props.id+1);
  }

  return (
    <div className='dialogueBox'>
      <p className='dialogueText'>{text}</p> 
      <button className='dialogueButton' onClick={()=>onClicked()}>Next</button>
    </div>
  )
}

export default DialogueBox