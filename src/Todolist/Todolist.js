import React, { Component } from 'react'
import Todo from './Todo'
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[],
            todone:[]
        }
    }

    componentWillMount(){
        var t1=localStorage.getItem('todo');
        var t2=localStorage.getItem('todoes');
        if(t1!==null&&t1.length!=0){
            var t3=t1.split(",");
            this.setState({
                todo:t3
            })
        }
    
        if(t2!==null&&t2.length!=0){
            var t4=t2.split(",");
            this.setState({
                todone:t4
            })
        }

    }
    additem=(e)=>{
        this.setState({
            todo:[...this.state.todo,e]
        },()=>{
            localStorage.setItem('todo',this.state.todo)
        })
    }

    delitem=(e)=>{
        var todo = [...this.state.todo];
        todo.splice(e,1);
        this.setState(
            {todo:todo},
            ()=>{
                localStorage.setItem('todo',this.state.todo)
            })
    }
    
    delitems=(e)=>{
        var todone = [...this.state.todone];
        todone.splice(e,1);
        this.setState(
            {todone:todone}
            ,()=>{
                localStorage.setItem('todo',this.state.todo);
                localStorage.setItem('todoes',this.state.todone);
            }
        )
    }

    deltodo=(e)=>{
        var t5=this.state.todo[e]
        var todo=[...this.state.todo];
        todo.splice(e,1);
        this.setState({
            todo:todo,
            todone:[...this.state.todone,t5]
        }
        ,()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todoes',this.state.todone);
        })
        
        
    }

    deltodoes=(e)=>{
        var t6=this.state.todone[e];
        var todone=[...this.state.todone];
        todone.splice(e,1);
        this.setState({
            todone:todone,
            todo:[...this.state.todo,t6]
        },()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todoes',this.state.todone);
        })
        
    }

    
    render() {
        return (
            <div>
                <Todoinput additem={this.additem}/>
                <Todo delitem={this.delitem} todo={this.state.todo} todone={this.state.todone} 
                delitems={this.delitems} deltodo={this.deltodo} deltodoes={this.deltodoes}/>
            </div>
        )
    }
}



