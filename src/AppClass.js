import React, { Component } from 'react';
import './App.css';
//import Box from './component/Box';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: { player: '', computer: '' }
        };

        this.play = this.play.bind(this);
        this.randomChoice = this.randomChoice.bind(this);
        this.judgement = this.judgement.bind(this);
        this.computeResults = this.computeResults.bind(this);
    }

    play(userChoice) {
        const userSelect = choice[userChoice];
        const computerSelect = this.randomChoice();
        const playerResult = this.judgement(userSelect, computerSelect);
        const results = this.computeResults(playerResult);

        this.setState({
            userSelect,
            computerSelect,
            result: { player: results.playerResult, computer: results.computerResult }
        });
    }

    judgement(user, computer) {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
        else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
    }

    computeResults(playerResult) {
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
        return { playerResult, computerResult };
    }

    randomChoice() {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        return choice[itemArray[randomItem]];
    }

    render() {
        const { userSelect, computerSelect, result } = this.state;
        return (
            <div>
                <div className='main'>
                    {/* <Box title='You' item={userSelect} result={result.player} />
                    <Box title='Computer' item={computerSelect} result={result.computer} /> */}
                    <BoxClass title='You' item={userSelect} result={result.player} />
                    <BoxClass title='Computer' item={computerSelect} result={result.computer} />
                </div>
                <div className='main'>
                    <button onClick={() => this.play('scissors')}>Scissors</button>
                    <button onClick={() => this.play('rock')}>Rock</button>
                    <button onClick={() => this.play('paper')}>Paper</button>
                </div>
            </div>
        );
    }
}

