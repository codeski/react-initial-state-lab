// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

    constructor(props){
        super(props)
        this.state = { secondsLeft: this.props.initialCount }
    }

    // state = { secondsLeft: this.props.initialCount}

    render (){
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            // let decrementTimer = this.state.secondsLeft - 1
            // this.setState({secondsLeft: decrementTimer})
            
            return this.state.secondsLeft + " seconds left before I go boom!"
            
        }
    }

}

export default Bomb