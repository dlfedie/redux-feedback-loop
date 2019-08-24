import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    //again, set local state here
    state = {
        supported: '3'
    }

    //also need again the handleChange
    handleChange = (event) => {
        //whenever our select options are selected, store in local state
        this.setState({ supported: event.target.value });
    }

    //this should set value to state, send that to Redux store to store, then continue to next question
    setSupport = (event) => {
        //react, we've been over this... no page reloads!
        event.preventDefault();
        //validate entry. return to not dispatch anything and keep on this page.
        //pop up with alert if empty (also not needed with default set..)
        if (this.state.supported === '') {
            alert('Please make a selection.');
            return
        }


        //set store in Redux!
        this.props.dispatch({
            type: 'SET_SUPPORTED',
            payload: this.state.supported
        })

        //clear local state
        this.setState({ supported: '' })

        //then move to page 4: comments
        this.props.history.push('/comments')
    }


    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
                {JSON.stringify(this.state)}
                <form onSubmit={this.setSupport}>
                    <select name="supported" value={this.state.supported} onChange={this.handleChange}>
                        <option value="5">5 - It's award show thank you speech time!</option>
                        <option value="4">4 - Pretty well supported!</option>
                        <option value="3">3 - Alright</option>
                        <option value="2">2 - I'm struggling right now</option>
                        <option value="1">1 - I'm on an island here...</option>
                    </select>
                    <p>Please choose a number, with 5 being "I've never felt more supported in my life!" and 1 being "Is anyone out there?".</p>
                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}

export default connect()(Supported);