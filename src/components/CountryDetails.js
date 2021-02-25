import React, { Component } from 'react'

export default class CountryDetails extends Component {

getCountryDetails = () => {
    let country = this.props.match.params.county.cca3
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
