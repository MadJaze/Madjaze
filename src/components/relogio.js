import React from 'react'


class Relogio extends React.Component {
    constructor(props) {
        super(props);


        this.state = { date : new Date() };

    }

    tick() {
        this.setState({ date : new Date() });
    }


    componentDidMount() {
        this.timerID  = setInterval(() => this.tick(), 1000);
    }

 /*   componentDidUpdate(prevProps, prevState) {
        console.log(`Previous time: ${prevState.date}`)
       console.log("Updated! Tick Tock")
    }*/


    componentWillUnmount() {
        console.log("Will unmount, now!");
        clearInterval(this.timerID);
    }


render() {

return (
    <div>
        <h1 className = "clock">A clock</h1>
        <h2>{this.state.date.toLocaleString()}.</h2>
    </div>
)

}


}



export default Relogio 