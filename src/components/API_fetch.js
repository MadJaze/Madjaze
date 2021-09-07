import React from 'react'


export default class APIfetch extends React.Component {
    constructor() {
        super()

        this.state = { user: {} }

    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/5')
        .then(response => response.json())
        .then(user => this.setState({ user: user }))
    }


render () {
    const user = this.state.user; 


    return <h1>Hello, {user.username} </h1>
}

}