import React, {Component} from 'react';
import './BasicCounter.css'
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = { 
            globalCounter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <>
                <BasicCounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></BasicCounterButton>
                <BasicCounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}></BasicCounterButton>
                <BasicCounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}></BasicCounterButton>
                <BasicCounterButton by='100' incrementMethod = {this.increment} decrementMethod = {this.decrement}></BasicCounterButton>
                <BasicCounterButton incrementMethod = {this.increment} decrementMethod = {this.decrement}></BasicCounterButton>
                <div>
                    <h3>Total Counter</h3>
                    <span className='total-counter'>{this.state.globalCounter}</span>
                </div>

                <div>
                    <button className='reset-button' onClick={this.reset}> RESET ALL </button>
                </div>
            </>
        );
    }

    increment(by) {
        let valToBeAdded = 0;
        if (typeof(by) == Number) {
            valToBeAdded = by;
        } else {
            valToBeAdded = parseInt(by);
        }
        this.setState(
            (prevState) => {
                return  {globalCounter: prevState.globalCounter + valToBeAdded}
            }
        );
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return  {globalCounter: prevState.globalCounter - by}
            }
        );
    }

    reset() {
        this.setState(
            (prevState) => {
                return {globalCounter: 0}
            }
        )
    }
}

export class BasicCounterButton extends Component {

    constructor() {
        super();
        this.state = {
            localCounter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className='counter'>
                <button className='button' onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>
                <button className='button' onClick={this.decrement}> -{this.props.by} </button>
                <span>{this.state.localCounter}</span>
            </div>            
            
        )
    }

    increment() {
        let valToBeAdded = 0;
        if (typeof(this.props.by) == Number) {
            valToBeAdded = this.props.by;
        } else {
            valToBeAdded = parseInt(this.props.by);
        }
        this.setState({
            localCounter: this.state.localCounter + valToBeAdded
        })

        this.props.incrementMethod(valToBeAdded);
    }

    decrement() {
        let valToBeAdded = 0;
        if (typeof(this.props.by) == Number) {
            valToBeAdded = this.props.by;
        } else {
            valToBeAdded = parseInt(this.props.by);
        }
        this.setState({
            localCounter: this.state.localCounter - valToBeAdded
        })

        this.props.decrementMethod(valToBeAdded);
    }
}

BasicCounterButton.defaultProps = {
    by: 1
}

// BasicCounterButton.propTypes = {
//     by: PropTypes.number
// }