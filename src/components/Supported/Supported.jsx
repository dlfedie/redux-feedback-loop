import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Swal from 'sweetalert2';

class Supported extends Component {
    //again, set local state here
    state = {
        // supported: 'none',
        optionTexts: {
            name: 'supported',
            option5Text: `5 - It's award show thank you speech time!`,
            option4Text: '4 - Pretty well supported!',
            option3Text: '3 - Alright',
            option2Text: `2 - I'm struggling right now`,
            option1Text: `1 - I'm on an island here...`,
            tagLine: `Please choose a number, with 5 being "I've never felt more supported in my life!" and 1 being "I would like to talk to someone.".`
        },
        backButtonShow: true,
        backTo: '/understanding'
    }

    //also need again the handleChange
    handleChange = (event) => {
        //whenever our select options are selected, store in local state
        // this.setState({ supported: event.target.value });

        //now using redux
        this.props.dispatch({
            type: 'SET_SUPPORTED',
            payload: event.target.value
        })
    }

    //this should set value to state, send that to Redux store to store, then continue to next question
    setSupport = (event) => {
        //react, we've been over this... no page reloads!
        event.preventDefault();
        //validate entry. return to not dispatch anything and keep on this page.
        //pop up with alert if empty (also not needed with default set..)
        if (this.props.store.newFeedback.supported === 'none') {
            // alert('Please make a selection.');
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Please select a score from the list.',
            })
            return
        }

        //being set on selection now!
        // //set store in Redux!
        // this.props.dispatch({
        //     type: 'SET_SUPPORTED',
        //     payload: this.state.supported
        // })

        // //clear local state
        // this.setState({ supported: '' })

        //then move to page 4: comments
        this.props.history.push('/comments')
    }


    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
                {/* {JSON.stringify(this.state)} */}
                <Form 
                question={this.props.store.newFeedback.supported}
                setQuestion={this.setSupport}
                handleChange={this.handleChange}
                optionTexts={this.state.optionTexts}
                backButtonShow={this.state.backButtonShow}
                backTo={this.state.backTo}
                />
                {/* <form onSubmit={this.setSupport}>
                    <select name="supported" value={this.state.supported} onChange={this.handleChange}>
                        <option value="5">5 - It's award show thank you speech time!</option>
                        <option value="4">4 - Pretty well supported!</option>
                        <option value="3">3 - Alright</option>
                        <option value="2">2 - I'm struggling right now</option>
                        <option value="1">1 - I'm on an island here...</option>
                    </select>
                    <p>Please choose a number, with 5 being "I've never felt more supported in my life!" and 1 being "Is anyone out there?".</p>
                    <button type="submit">Next</button>
                </form> */}
            </>
        )
    }
}

//ok, now we're storing state in Redux, so let's go get it!
const mapStateToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStateToProps)(Supported);