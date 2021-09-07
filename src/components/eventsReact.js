import React from 'react'

function handleMouseOver(event) {
console.log(event)
console.log('passou o mouse pelo h3')
}


function handleClick(event) {

console.log(event)
console.log('clicado');


}

function App2() {

return ( <div> 
<h3 onMouseOver={handleMouseOver}>Passa mouse por aqui!</h3>
<button onClick ={handleClick}>Me clique plis</button>
</div>
)
}

export default App2

