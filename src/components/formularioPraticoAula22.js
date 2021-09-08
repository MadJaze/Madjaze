import React from 'react'


export default class FormularioPratico extends React.Component {
    constructor(){
        super()

        this.state = {
            firstname: "",
            lastname : "",
            age: "",
            gender: "", 
            form: {}

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

handleChange(event) {

    const { name, value } = event.target

    // this.setState = ({ event.target.name = event.target.value })

    this.setState({ [name]: value })
}

handleSubmit(event) {
    event.preventDefault()

    const { form, ...stateData } = this.state 

    this.setState({ form: stateData });

    console.log(stateData)

}



render(){

    return (
        <div className="evil_formulario">

        <form onSubmit={this.handleSubmit}> <span className="saludos">Fill each field no form below, it´s all required.</span>
         <fieldset> 
             <div className="container">
            <label>Name:  </label>
            <input 
            type= "text" 
            name= "firstname" 
            value= {this.state.firstname} 
            onChange={this.handleChange}/> <br />
            <label>Sobrenome: </label>
            <input 
            type="text" 
             name="lastname" 
             value= {this.state.lastname}
              onChange={this.handleChange}/>
               <br />
               </div>
               
               <div className="container">
            <label>Age: </label>
            <input 
            type="text" 
            name= "age" 
            value={ this.state.age} 
            onChange={this.handleChange}/>   <br />
           
            <label>
            <input 
            type="radio" 
            name= "gender" 
            value= "Male" 
            checked = {this.state.gender === 'Male'} 
            onChange={this.handleChange}/>{" "}
            Male
            </label>
            
            <label>
            <input 
            type="radio" 
            name= "gender" 
            value="Female"
            checked= {this.state.gender === 'Female'} 
            onChange ={this.handleChange}/>{" "} 
            Female          
            </label>

            </div>
             <br /> <br />
            <button type="submit">Send data</button>

            
         </fieldset>

        </form>
<footer className="container">
        <div>    
        <h2>Entered Information:</h2>

        <p>Name: {this.state.firstname} {this.state.lastname}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>

        Well.. Is what you´re.
        </div>

<div>
<h2>Submitted Information</h2>
<p>Name: {this.state.form.firstname} {this.state.lastname} </p>
<p> Age: {this.state.form.age}</p>
<p>Gender: {this.state.form.gender}</p>


Again...

</div>

</footer>
        </div>
    )

}


}