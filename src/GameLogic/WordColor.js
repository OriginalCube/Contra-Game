import React from 'react'
import DialogueBox from '../Ui/DialogueBox'

const WordColor = () => {
    const [event, setEvent] = React.useState(0); 
    const [score, setScore] = React.useState(0);
    const color = ['#F6ED60', '#FBA51A', '#F4EB20', '#70C055', '#40B8EA', '#3DA6E3', '#EC197A'];
    const colorText = ['Red', 'Orange' , 'Yellow', 'Green', 'Blue', 'Violet', 'Pink'];
    const [key, setKey] = React.useState([]);
    const [question, setQuestion] = React.useState(['0000', '0000']);
    const [questionText, setQuestionText] = React.useState([]);
    const [answers, setAnswers] = React.useState()
    const questionLogic = () =>{
      //Set Question
      let tempQuestion = []
      if(randomGen(2)===1){tempQuestion.push('Text')}else{tempQuestion.push('Color')};
      let tempColorText = colorText;
      let tempColor = color;
      let tempKey = [];
      for(let i = 0; i!==4; i++){//Texts for the given
        let tempLog = randomGen(6-i);
        tempKey.push(tempColorText[tempLog])
        tempColorText.splice(tempLog,1); 
      }
      for(let i = 0; i!==4; i++){//Texts for the BackgroundColor
        let tempLog = randomGen(6-i);
        tempKey.push(color[tempLog])
        tempColor.splice(tempLog,1); 
      }
      setKey(tempKey);
      setQuestion(tempQuestion);
    }

    const randomGen = (e) =>{
      return Math.floor(Math.random() * e)+1;
    }

    const dialogueBox = (e) =>{
      setEvent(e);
    }

    const onSubmit = (e) =>{
      if(question[0]==='Color'){
        if(e[1]===questionText[1]){
          setScore(score+1);
        }
      }
      if(question[0]==='Text'){
        if(e[0]===questionText[0]){
          setScore(score+1);
        }
      }
      questionLogic();
    } 

    React.useEffect(()=>{
      //set question logic first
      if(event===4){questionLogic()};
    }, [event])

    React.useEffect(()=>{
      if(key.length===8){
        let _questionText = [];
        _questionText.push(key[randomGen(3)]);
        _questionText.push(key[randomGen(3)+4]);
        setQuestionText(_questionText);      
      }
    },[key])

    return (
    <div className='wordColor'>
        {event!==4?<DialogueBox mode={'Room1'} id={event} response={(e)=>dialogueBox(e)}/>:null}
        <div className='wordQuestion' style={{color: questionText[1]}}>{questionText[0]}</div>
        <p className='questionText'>{question[0]}</p>
        <div className='wordAnswer'>
          <div className='wordBlock' style={{backgroundColor: key[4]}} onClick={()=>onSubmit([key[0], key[4]])}>
            <p className='wordText'>{key[0]}</p></div>
          <div className='wordBlock' style={{backgroundColor: key[5]}} onClick={()=>onSubmit([key[1], key[5]])}>
            <p className='wordText'>{key[1]}</p></div>
          <div className='wordBlock' style={{backgroundColor: key[6]}} onClick={()=>onSubmit([key[2], key[6]])}>
            <p className='wordText'>{key[2]}</p></div>
          <div className='wordBlock' style={{backgroundColor: key[7]}} onClick={()=>onSubmit([key[3], key[7]])}>
            <p className='wordText'>{key[3]}</p></div>
        </div>
    </div>
  )
}

export default WordColor