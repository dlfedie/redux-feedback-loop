import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    //this component will ask how the user is feeling today, 5 is best, 1 is bad.
    //i will start with a select box and see how that works. may style differently in Material

    //let's set local state to store selection
    state ={
        feeling: '3'
    }

    handleChange = (event) => {
        //whenever our select options are selected, store in local state
        this.setState({feeling: event.target.value});
    }
    
    //this should set value to state, send that to Redux store to store, then continue to next question
    setFeeling = (event) => {
        //hey, don't reload this page on me, please
        event.preventDefault();
        //validate entry
        //not needed at the moment, default set at 3 on select menu

        //pop up with alert if empty (also not needed with default set..)

        //set store in Redux!
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })

        //then move to page 2: understanding
        this.props.history.push('/understanding')
    }

    render() {

        

        return (
            <>
                <h2>How are you feeling today?</h2>
                {JSON.stringify(this.state)}
                <form onSubmit={this.setFeeling}>
                    <select name="feeling" value={this.state.feeling} onChange={this.handleChange}>
                        <option value="5">5 - Great!</option>
                        <option value="4">4 - Pretty good</option>
                        <option value="3">3 - Alright</option>
                        <option value="2">2 - I've been better</option>
                        <option value="1">1 - Not good</option>
                    </select>
                    <p>Please choose a number, with 5 being "Great!" and 1 being "Not good".</p>
                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}


//actually don't need to map.. just dispatching to store
// const mapStateToProps = (store) => {
//     return {
//         blah: store.newFeedback
//     }
// }

export default connect()(Feeling);