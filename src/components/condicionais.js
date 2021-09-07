import React from 'react'


export default class Conditions extends React.Component {
    constructor() {
        super();

        this.state = { party: false }

        this.handleClick = this.handleClick.bind(this) 

    }

    handleClick() {
        this.setState({ party: !this.state.party }) //invertir o estado atual da "party" se ele é false então muda a true, e assim.
    }


    render() {
        return (

            <div>
                <h1> Am I going to party? { this.state.party ? "Yes!" : "No!" }</h1> {/* yes, antes dos pontos é true, no depois é false */}

            {
                this.state.party ? 
                <h2>Woot! Party! ♫</h2> :
                <h2>Nah, not in the mood</h2>
            }
        <button onClick={this.handleClick}>Toggle party</button>

            </div>


        )
    }

}