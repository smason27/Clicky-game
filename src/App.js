import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbo from "./components/Jumbo/Index"
import characters from "./characters.json"
import Wrapper from "./components/wrapper/Index"
import GameCard from "./components/gameCard/Index"

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: [],
  }

  // RANDOMIZE ARRAY
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  // FUNCTION TO CHECK CHARACTER CLICKED ON AGAINST PREVIOUS CLICKS
    //SET STATE TO INCREASE SCORE OR RESTART GAME


  render() {
    console.log(characters)
    return (
      <Wrapper>
        <Jumbo
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        {
          this.state.characters.map(characters => (
            <GameCard
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