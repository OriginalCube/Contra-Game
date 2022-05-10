import React from 'react';
import DialogueBox from '../Ui/DialogueBox';

const Tutorial = () => {
  const [event, setEvent] = React.useState(0);
  const [dialogueBox, setDialogueBox] = React.useState(false);
  const noBox = [2];
  let noBoxId = 0;
  React.useEffect(()=>{
    console.log(event + ' ' + noBox[noBoxId])
    if(event===noBox[noBoxId]){
      setDialogueBox(false);
      noBoxId++;
    }else{
      setDialogueBox(true);
    }
  },[event])
  const response = (e) =>{
    setEvent(e);
  }
    return (
    <div>
      {dialogueBox?<DialogueBox mode={'Tutorial'} id={event} response={(e)=>response(e)}/>:null}
      
    </div>
  )
}

export default Tutorial