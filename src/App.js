import React, { Component } from 'react'
import Navbar from './components/navbar'
import Repository from './repository'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Repository />
      </div>
    )
  }
}
