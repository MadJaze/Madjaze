import React from 'react'

export default class Formulario extends React.Component {
    constructor() {
        super()

        this.state = { inputText : "initial Value", inputSelect: 'green',  inputCheckBox: true}

        this.handleInputText = this.handleInputText.bind(this);
        this.handleInputSelect = this.handleInputSelect.bind(this);
        this.handleInputCheckBox = this.handleInputCheckBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleInputText(event) {
    this.setState({ inputText: event.target.value})
}

handleInputSelect(event) {
    this.setState({inputSelect: event.target.value})
}

handleInputCheckBox() {
    this.setState({ inputCheckBox: !this.state.inputCheckBox})
}

handleSubmit(event) {
  event.preventDefault()
  console.log(this.state)
}


render() {
    return (
      <form onSubmit={this.handleSubmit}>Formulario clandestino
<legend>Fields to fill</legend>
        <fieldset>
            <label>uncontrolled Input</label> <br />
            <input type="text" defaultValue={this.state.inputText} />

        </fieldset>
        <fieldset>
        <label>controlled input</label> <br />
        <input type="text" value={this.state.inputText} onChange={this.handleInputText} />
        </fieldset>
        <br />
        <fieldset>
        Here is the value: {this.state.inputText}

        </fieldset>

        <fieldset>
        <label> Uncontrolled Select</label> <br />
        <select defaultValue = {this.state.inputSelect}>
        <option value='red'>Red</option>
        <option value ='green'>Green</option> 
        <option value="blue">Blue</option>   
        </select>
        </fieldset>

        <fieldset>
            <label>Controlled Select</label> <br />
            <select value ={this.state.inputSelect} onChange={this.handleInputSelect}>
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value = 'blue'>Blue</option>
            </select>
        </fieldset>
        Here´s the value: {this.state.inputSelect}

        <fieldset><label> Uncontrolled Checkbox Input</label>
        <input type= "checkbox" defaultChecked={this.state.inputCheckBox} />
        </fieldset>

        <fieldset><label>Controlled CheckbOx Input </label>
        <input type="checkbox" checked={this.state.inputCheckBox} onChange={this.handleInputCheckBox}/>
        <br />
        Here´s the value: {this.state.inputCheckBox.toString()}
        </fieldset>
        To see the results, check your dev browser console <br />
        <button type="submit">Submit</button>
       
      </form>

    )

}


}