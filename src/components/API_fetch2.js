import React from 'react'

export default class API2 extends React.Component {
constructor() {
    super()

    this.state = { user: {} }

}

    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=3owQyiZQCn2G6ndcq6ZLu973tMNvkLIcw5Ww1KuI")
        .then(response => response.json())
        .then(user => this.setState({ user: user }))
    }



    render() {
        const user = this.state.user;

        return ( 
            <div> {user.explanation} 
                    <h2>{user.title}</h2>
                    {user.url}
            
            </div>
        )



    }
}