import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super()
        this.state=({
            value:''
        })
    }

    handleinput=(e)=>{
       if(e.keyCode===13){
           this.props.additem(this.state.value);
       }
   }

   handlechange=(e)=>{
       var getvalue=e.target.value;
       this.setState({
           value:getvalue
       })
   }

    render() {
        return (
            <div id = 'todo1'>
              <span htmlFor="todo2">ToDoList</span>
              <input id="todo2"  onKeyDown={(e)=>this.handleinput(e)} placeholder="添加ToDo" onChange={this.handlechange}></input>
            </div>
        )
    }
}
