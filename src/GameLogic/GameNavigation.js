import React from 'react'

const GameNavigation = (props) => {
    let tempArray = [];
    const onSubmit = (e) =>{
        for(let i = 0; i!==props.navigation.length; i++){
            let tempData = e[0];
            if(i===0){tempArray.push(e[1])}
            if(i===e[2]){tempArray.push(tempData)}
            if(i!==0 && i!==e[2]){
                tempArray.push(props.navigation[i])
            }
        }
        props.setNavigation(tempArray);
    }

  return (
    <div className='gameNavigation'>
        <div className='roomNavigation'>
        <p className='roomKey' onClick={()=>onSubmit([props.navigation[0],props.navigation[1],1])}>{props.navigation[1]}</p>
        <p className='roomKey' onClick={()=>onSubmit([props.navigation[0],props.navigation[2],2])} style={{margin:'0% 20% 0% 20%'}}>{props.navigation[2]}</p>
        <p className='roomKey' onClick={()=>onSubmit([props.navigation[0],props.navigation[3],3])}>{props.navigation[3]}</p>
        </div>
    </div>
  )
}

export default GameNavigation