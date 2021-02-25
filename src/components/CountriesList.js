import React, { Component } from 'react';
import {Link} from 'react-router-dom'



export default class CountriesList extends Component {

    render() {
        return (
            <div>
            <h1>hello</h1>
            {
            this.props.countries.map((singleCountry, index) => {
                return <div key={index}>  <Link to={`/countries/${singleCountry.cca3}`}>{singleCountry.name.common}</Link>      </div>
            })
           
            }
            </div>
        )
    }
}