import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {
    //again, set local state here
    state = {
        understanding: ''
    }

    //also need again the handleChange
    handleChange = (event) => {
        //whenever our select options are selected, store in local state
        this.setState({ understanding: event.target.value });
    }

    //this should set value to state, send that to Redux store to store, then continue to next question
    setUnderstanding = (event) => {
        //react, we've been over this... no page reloads!
        event.preventDefault();
        //validate entry. return to not dispatch anything and keep on this page.
        if (this.state.understanding === '') {
            alert('Please make a selection.');
            return
        }

        //pop up with alert if empty (also not needed with default set..)

        //set store in Redux!
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })

        //clear local state
        this.setState({ understanding: '' })

        //then move to page 3: supported
        this.props.history.push('/supported')
    }


    render() {
        return (
            <>
                <h2>How well are you understanding the content?</h2>
                {JSON.stringify(this.state)}
                <form onSubmit={this.setUnderstanding}>
                    <select name="understanding" value={this.state.understanding} onChange={this.handleChange}>
                        <option value="5">5 - Let me teach you some tricks!</option>
                        <option value="4">4 - I've got this!</option>
                        <option value="3">3 - Little fuzzy, but let me take a crack at it</option>
                        <option value="2">2 - I'm struggling to grasp this right now</option>
                        <option value="1">1 - Wait, what?</option>
                    </select>
                    <p>Please choose a number, with 5 being "I could teach this!" and 1 being "Were you speaking a language I speak today?".</p>
                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}

export default connect()(Understanding);