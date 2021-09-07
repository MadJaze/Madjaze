import React from 'react'




class CliquerCounter extends React.Component {
    constructor() {
        super() 

        this.state = {

            count: 0

        }

        this.counterClicker = this.counterClicker.bind(this)

    }


    counterClicker() {

       this.setState({ count: this.state.count + 1 })
       
    }

render() {
    return (
        <div>
            <div>Counting: {this.state.count}</div>
            <button onClick={this.counterClicker}>CounterClicker</button>
        </div>
    )
}


}

export default CliquerCounter