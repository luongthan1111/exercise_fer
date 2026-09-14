import {Component} from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React!</h1>
                <p>This is a simple class component.</p>
            </div>
        );
    }
}

class Counter extends Component {
    state = {
        count: 0
    };  
    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () =>{
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default  Counter;