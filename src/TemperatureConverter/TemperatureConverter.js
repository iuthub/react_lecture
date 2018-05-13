import React, { Component } from 'react';

export default class TemperatureConverter extends Component {
    constructor(props){
        super(props)
        this.state={
            fDegrees:0,
            cDegrees:0
        }
    }

    render(){
        return (
                <div>
                    F <input type="text"
                             value={this.state.fDegrees}
                             onChange={(e)=>this.handleChange(e)} />
                    C <input type="text"
                             value={this.state.cDegrees}
                             onChange={(e)=>this.handleChange2(e)} />
                </div>
            )
    }

    handleChange(e){
        let f=e.target.value
        let c=(f-32)/1.8

        this.setState({
            fDegrees: f,
            cDegrees: c
        })
    }

    handleChange2(e){
        let c=e.target.value
        let f=1.8*c+32

        this.setState({
            fDegrees: f,
            cDegrees: c
        })
    }

    //tc=(tf-32)/1.8
    //
}
