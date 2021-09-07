import React from 'react'
import './App.css';
import names from './array'
import Classfunction from './components/classfunction'
import Pokedex from './components/pokedex'
import Relogio from './components/relogio'
import App2 from './components/eventsReact'
import CliquerCounter from './components/clickercounter';
import Conditions from './components/condicionais'
import APIfetch from './components/API_fetch';

function App() {

const listanomes = names.map(function(name){

return (
  <Classfunction key={name.id} nome={name.nome}  sobrenome={name.sobrenome} idade={name.idade} />
)

})

  return ( <div>
    
    <p>{listanomes}</p>
  
  <p className ="pokedex">

  <Pokedex />
   
    <App2 />

    <CliquerCounter />


    <Relogio />


    <Conditions />

    <APIfetch />
 </p>
  
  
  </div> 
    
  
    )
}

export default App;
