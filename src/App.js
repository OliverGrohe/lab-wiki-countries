import './App.css';
import {Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import CountriesJson from './countries.json'


class App extends Component {

  state = {
    countries: CountriesJson
  }


  render(){
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={this.state.countries}/>
      <Route path='/countries/:cca3:' component={CountryDetails} />
    </div>

  )};
}

export default App;
