import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props){
        super(props)

        this.state={
            secondsElapsed:0
        }
    }

    tick(a,b){
        // console.log(a)
        // console.log(b)
        this.setState((prevState)=>({
                secondsElapsed: prevState.secondsElapsed+1
        }))
    }

    componentDidMount(){

        // console.log(this.state.secondsElapsed)
        this.timerId=setInterval((a,b)=>this.tick(a,b), 1000, 1, 2)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render() {
        return (<div>
                    <h2>{this.props.title}</h2>
                    <h3>Seconds Elapsed: {this.state.secondsElapsed}</h3>
                </div>)
    }
}
