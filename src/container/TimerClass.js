import React, { Component } from 'react'

export default class TimerClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timeI = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    componentDidUpdate(prevState) {
        if (prevState !== this.state.time) {
            console.log("Componetnt Updated")
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeI);
    }
    render() {
        return (
            <>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </>
        )
    }
}
