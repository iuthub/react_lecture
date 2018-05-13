import React, { Component } from 'react';

export default class ToDoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            text: ''
        }
    }
    render(){
        return (
                <fieldset>
                    New Task: <input type="text" onChange={(e)=>{this.handleOnChange(e)}} />
                    <button onClick={()=>this.handleOnClick()}>Add</button>
                </fieldset>
            )
    }

    handleOnChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleOnClick(){
        this.props.onSubmit(this.state.text)
    }
}
