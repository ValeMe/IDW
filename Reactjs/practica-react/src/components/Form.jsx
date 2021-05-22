import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state= {
            nameValue: '',
            edad: '',

        }
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        console.log(this.state.nameValue)
        if(this.state.nameValue !== ""){
            alert("exitoso")
        }
        else alert("blanco")


    }
    handleChange(e){
        this.setState(
            {
            nameValue: e.target.value
            }
        )
    }


    render(){
        return(
            <form>
                <label>Nombre</label>
                <input type="text"/>
                <label>Edad</label>
                <input type="number"/>
                <label>Sexo</label>
                <input type="text"/>
                <label>Tipo de mascota</label>
                <input type="text"/>
                <label>Servicio requerido</label>
                <input type="text"/>
                <input type="submit" value="aceptar"/>
                
               

            </form>
           

        )
    }
}