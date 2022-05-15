import React from 'react'

const CodeRoom = (props) => {
  const codeClicked = (e) =>{
    let tempCode = [];
    for(let i = 0 ; i!==props.code.length; i++){
      if(i===e[0]){
        if(props.code[e[0]]+e[1]<0){tempCode[e[0]] = 9;}else if(props.code[e[0]]+e[1]>9){tempCode[e[0]] = 0;}else{tempCode[e[0]] = props.code[e[0]] + e[1]}}else{tempCode[i] = props.code[i];}
    }
    props.setCode(tempCode);
  }
  return (
    <div className='codeRoom'>
        <div className='codeLock'>
          <div className='codePlus' onClick={()=>codeClicked([0,1])}></div>
          <div className='codePlus' onClick={()=>codeClicked([1,1])}></div>
          <div className='codePlus' onClick={()=>codeClicked([2,1])}></div>
          <div className='codePlus' onClick={()=>codeClicked([3,1])}></div>
          <div className='codePlus' onClick={()=>codeClicked([4,1])}></div>
          <div className='codePlus' onClick={()=>codeClicked([5,1])}></div>
          <p className='codeNumbers'>{props.code[0]}</p>
          <p className='codeNumbers'>{props.code[1]}</p>
          <p className='codeNumbers'>{props.code[2]}</p>
          <p className='codeNumbers'>{props.code[3]}</p>
          <p className='codeNumbers'>{props.code[4]}</p>
          <p className='codeNumbers'>{props.code[5]}</p>
          <div className='codeMinus' onClick={()=>codeClicked([0,-1])}></div>
          <div className='codeMinus' onClick={()=>codeClicked([1,-1])}></div>
          <div className='codeMinus' onClick={()=>codeClicked([2,-1])}></div>
          <div className='codeMinus' onClick={()=>codeClicked([3,-1])}></div>
          <div className='codeMinus' onClick={()=>codeClicked([4,-1])}></div>
          <div className='codeMinus' onClick={()=>codeClicked([5,-1])}></div>
        </div>
    </div>
  )
}

export default CodeRoom