import React from 'react'

class Classfunction extends React.Component {
    constructor() {
        super()

        this.state = {
            palavra1: 'Olá,',
            palavra2: ' amiguitos'
        }
    }

    customComponent() {
        console.log("olá, putos!")
    }

    render () {

        this.customComponent();

        return (

            <div>
                <h1>No console.log está escrito: {this.state.palavra1}{this.state.palavra2}</h1>
                <p> <strong>Nome:</strong> {this.props.nome}</p>
                <p><strong>Sobrenome:</strong> {this.props.sobrenome}</p>
                <p><strong>Idade:</strong> {this.props.idade}</p>


    
            </div>
            
                    )

    }
      
    }
   


export default Classfunction