import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://kr.element14.com/productimages/standard/en_GB/TL15160-40.jpg"
  }, 
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState({player: '', computer: ''});


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const playerResult = judgement(choice[userChoice], computerChoice);
    const results = computeResults(playerResult);
    setResult({player: results.playerResult, computer: results.computerResult});
  };

  const judgement = (user, computer) => {

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") return computer.name == "Scissors" ? "win":"lose"; 
    else if (user.name == "Scissors") return computer.name == "Paper" ? "win":"lose";
    else if (user.name == "Paper") return computer.name == "Rock" ? "win":"lose";

  }

  function computeResults(playerResult) {
    let computerResult;
    switch (playerResult) {
      case 'win':
        computerResult = 'lose';
        break;
      case 'lose':
        computerResult = 'win';
        break;
      default: 
        computerResult = 'tie';
    }
    return {playerResult, computerResult};
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result.player}/>
        <Box title='Computer' item={computerSelect} result={result.computer}/>
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
