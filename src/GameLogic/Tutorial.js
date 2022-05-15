import React from 'react';
import DialogueBox from '../Ui/DialogueBox';

const Tutorial = (props) => {
  const [event, setEvent] = React.useState(0);
  const response = (e) =>{
    setEvent(e);
    if(event===4){
      props.response({"tutorialMode": false, "mainMode": false, "difficultyMode": true});
    }
  }
    return (
    <div>
      <DialogueBox mode={'Tutorial'} id={event} response={(e)=>response(e)}/>
    </div>
  )
}

export default Tutorial