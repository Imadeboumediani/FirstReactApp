import React, { Component } from 'react';
import  { CardList } from './components/card-list/card-list.components';
import './App.css';
import { Search } from './components/search/search.component';
import Particles from 'react-particles-js';

class App extends Component  {
  constructor() {
    super();
    this.state ={
      monsters: [],
      searchField:''
    };

  }

  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange= (e) => {
    this.setState({searchField :e.target.value})
  }

 render () {
   const {monsters,searchField} = this.state;
   const filteredMonsters =monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
   return(
     
    <div className="App">
  
    <h1> First React APP by I.B</h1>
      <Search type='text' placeholder='Search users' handleChange={this.handleChange}/>
      <Particles
        className='particles'
        params={{
          "particles": {
              "number": {
                  "value": 200
              },
              "size": {
                  "value": 2
              },
              "density": {
                   "enable": true,
                   "value_area": 500
                   
      }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
              
          }
          
      }} />  
      <CardList monsters={filteredMonsters}  />
     
     
    </div>
  );

   }

  }
export default App ; 
