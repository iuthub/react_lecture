import React, { Component } from 'react';

export default class HelloWorld extends Component {
    render(){
        return (<h1>
                    <span>Hello {this.props.model.name}! I am {this.props.model.age}</span>
                </h1>)
    }
}
