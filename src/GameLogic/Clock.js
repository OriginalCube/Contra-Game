import React from 'react'

const Clock = (props) => {
    let {tempTime = 0} = props.timer;
    const [time, setTime] = React.useState(tempTime);
    React.useEffect(()=>{
        setInterval(() => {
            setTime(time-1);
        }, 1000);
    },[time])
  return (
    <div className='mainClock'>
        {time}
    </div>
  )
}

export default Clock