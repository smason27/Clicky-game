import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbo from "./components/Jumbo/Index"
import characters from "./characters.json"
import Wrapper from "./components/wrapper/Index"
import GameCard from "./components/gameCard/Index"

class App extends Component {
  state = {
    characters: characters,
    currentScore: 0,
    highScore: 0,
    pickedCard: [],
    message: "hello"
  }

  // RANDOMIZE ARRAY
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleClick = id => {
    console.log(id)
    this.state.pickedCard.indexOf(id) === -1 ?
      this.state.pickedCard.push(id) &&
      this.handleCorrect() :
      this.handleReset();
    }
  

  handleCorrect = () => {
    let newScore = this.state.currentScore + 1

    this.setState({
      currentScore: newScore
    })

    newScore >= this.state.highScore ? this.setState({highScore: newScore}) :
    this.state.currentScore === 12 ? this.setState({message: "You Win"}) : this.setState({message: "pick a character"});

    this.shuffle(characters);
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      pickedCard: [],
      characters: this.shuffle(characters),
      message: "You Lose"
    })
  }
    


  // FUNCTION TO CHECK CHARACTER CLICKED ON AGAINST PREVIOUS CLICKS
  //SET STATE TO INCREASE SCORE OR RESTART GAME



  render() {
    console.log(characters)
    console.log(this.state.pickedCard)
    return (
      <Wrapper>
        <Jumbo
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}d
        />
        {
          this.state.characters.map(characters => (
            <GameCard
              handleClick={this.handleClick}
              handleCorrect={this.handleCorrect}
              handleReset={this.handleReset}
              id={characters.id}
              key={characters.id}
              name={characters.name}
              Url={characters.Url}
            />
          ))
        }

      </Wrapper>
    )
  }
}

export default App