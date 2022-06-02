import React, { Component } from 'react'

export default class CityClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Ahmedabad"
        }
    }

    chnageCity = () => {
        this.setState({
            city: "Surat"
        })
    }
    render() {
        return (
            <>
                <h1>Class Component</h1>
                <h2>{this.state.city}</h2>
                <button onClick={() => this.chnageCity()}>Click Me</button>
            </>
        )
    }
}
