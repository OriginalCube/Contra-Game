import React from 'react';
import './App.css';
import MainEngine from './GameLogic/MainEngine';
import IntroMenu from './Ui/IntroMenu';

function App() {
  const [username, setUsername] = React.useState("");
  const [intro, setIntro] = React.useState(true);
  return (
    <div className="App">
      {intro?<IntroMenu username={username} setUsername={setUsername} setIntro={setIntro}/>:null}
      {intro?null:<MainEngine username={username}/>}
    </div>
  );
}

export default App;
