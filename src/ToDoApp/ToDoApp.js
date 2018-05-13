import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js'
import ToDoList from './ToDoList.js'

export default class ToDoApp extends Component {
    constructor(props){
        super(props)
        this.state={items: []}
    }


    render(){
        return (
                    <div>
                        <h2>My To Do List</h2>
                        <ToDoForm onSubmit={(task)=>this.onSubmit(task)}/>
                        <ToDoList items={this.state.items}/>
                    </div>
            )
    }

    onSubmit(task){
        this.setState((prevState)=>{
            prevState.items.push(task)
            return {
                items: prevState.items
            }
        });
    }
}
