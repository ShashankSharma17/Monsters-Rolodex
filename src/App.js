import React, { Component } from 'react'

import { CardList } from './components/card-list/Card-list.component'
import './App.css'
import { from } from 'rxjs'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }))
  }
  render() {
    return (
      <div className='App'>
        <CardList name='Shashank'>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    )
  }
}

export default App
