import React, { Component } from 'react';

export default class ToDoList extends Component {
    render(){
        let tasks=this.renderItems()
        return (<ul>{tasks}</ul>)
    }

    renderItems(){
        return this.props.items.map((el)=>{
                    return <li>{el}</li>
               })
    }
}
