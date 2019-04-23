import React from 'react';
import Pokemon from './components/Pokemon'
import './App.css'

class App extends React.Component{

  state = {
    pokemons: [],
    isLoaded: false
  }

  componentDidMount () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then( pokemon => pokemon.json())
      .then( (pokemon) =>{
        this.setState({
          pokemons: [].concat(...pokemon.results),
          isLoaded: true
        })
      }
      ).catch(error => {
       console.log(error)
    })
  }
  render ()  {

    const pokeList = this.state.pokemons.map((pokemon,i) => (
      <Pokemon name={pokemon.name} id={i + 1} url={pokemon.url}/>
    ));
    return (
      <div className="App">
        <div className="pokemon-list">
          {this.state.isLoaded ? pokeList : <div>Loading</div>}
        </div>
      </div>
    );
  }
}

export default App;
