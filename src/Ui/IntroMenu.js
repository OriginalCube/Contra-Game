import React from "react"

const IntroMenu = (props) => {
    const Sound = (e) =>{
        const Sound = new Audio('./audio/'+ e +'.mp3');
        Sound.volume = .35;
        Sound.play(); 
    }
    const Active = (e) =>{
        props.setUsername(e.target.value);
        Sound('keypress');
    }
    const onSubmit = () =>{
        console.log('Clicked')
        Sound('success');
        props.setIntro(false);
    }
    return (
    <div className="introMenu">
        <button className="menuSubmit" onClick={()=>onSubmit()}>Submit</button> 
        <form className="menuForm" onSubmit={()=>onSubmit()}>
            <label className="menuText">What is the name of your player?</label>
            <input className="menuInput" type="text" name="username" 
            value={props.username} onChange={(e)=>Active(e)}></input>
        </form>
    </div>
  )
}

export default IntroMenu