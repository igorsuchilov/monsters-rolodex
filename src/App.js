import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: '',
    };
    // too verbose (can be replaced with =>)
    // this.handleChange = this.handleChange.bind(this); 

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => 
    response.json()
    // .then(users => console.log(users))
    .then(users => this.setState({ monsters: users }))
    )  
  }

  // handleChange = (e) => {
  //   this.setState({ searchField: e.target.value, title: event.target.value })
  // }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value,
      title: event.target.value
    })
  }

  render() {
    const { monsters, searchField, title } = this.state;
    // const filteredMonsters = monsters.filter(
    //   monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    // )
    return(
      <div className="App">
      <h1> {title} </h1>
      <SearchBox onSearchChange = {this.onSearchChange}
        // placeholder = 'search monsters'
        // handleChange =  {this.handleChange}
      />
      <CardList monsters={monsters} /> 

      </div>
    );
  }
}

export default App;
