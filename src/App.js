import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipes from './components/Recipes';

const API_KEY = '76aeaecf34ee2040add5f3dcb6325282';

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    //Make API Call *Prefix localhost with cors-anywhere link for cross origin error*
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    
    //Get API data in JSON format
    const data = await api_call.json();

    this.setState({recipes: data.recipes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Foodie</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
