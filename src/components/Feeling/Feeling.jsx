import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../Form/Form';
import Swal from 'sweetalert2';

class Feeling extends Component {
    //this component will ask how the user is feeling today, 5 is best, 1 is bad.
    //i will start with a select box and see how that works. may style differently in Material

    //let's set local state to store selection
    state = {
        // feeling: 'none',
        optionTexts: {
            name: 'feeling',
            option5Text: '5 - Great!',
            option4Text: '4 - Pretty good',
            option3Text: '3 - Alright',
            option2Text: `2 - I've been better`,
            option1Text: '1 - Not good',
            tagLine: 'Please choose a number, with 5 being "Great!" and 1 being "Not good".'
        },
        backButtonShow: false
    }

    handleChange = (event) => {
        //whenever our select options are selected, store in local state
        // this.setState({feeling: event.target.value});

        //now we want to target redux so we can bounce around to all values. only on submit will i now set the values back to 'none'
        //set store in Redux!
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        })
    }
    
    //this should set value to state, send that to Redux store to store, then continue to next question
    setFeeling = (event) => {
        //hey, don't reload this page on me, please
        event.preventDefault();
        //validate entry. return to not dispatch anything and keep on this page.
        if (this.props.store.newFeedback.feeling === 'none') {
            // alert('Please make a selection.');
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Please select a score from the list.',
                confirmButtonColor: '#4caf50',
                cancelButtonColor: '#f4511e',
            })
            return
        }


        //set store in Redux!
        //we'll not need this now.
        // this.props.dispatch({
        //     type: 'SET_FEELING',
        //     payload: this.state.feeling
        // })
        //clear local state
        // this.setState({feeling: ''});
        //local state not needed, now that we're storing in redux.


        //then move to page 2: understanding
        this.props.history.push('/understanding')
    }

    render() {

        

        return (
            <>
                <h2>How are you feeling today?</h2>
                {/* {JSON.stringify(this.state)} */}
                {/* {JSON.stringify(this.props.store.newFeedback.feeling)} */}

                <Form 
                question={this.props.store.newFeedback.feeling} 
                setQuestion={this.setFeeling} 
                handleChange={this.handleChange} 
                optionTexts={this.state.optionTexts}
                backButtonShow={this.state.backButtonShow}
                />
                {/* <form onSubmit={this.setFeeling}>
                    <select name="feeling" value={this.state.feeling} onChange={this.handleChange}>
                        <option value="5">5 - Great!</option>
                        <option value="4">4 - Pretty good</option>
                        <option value="3">3 - Alright</option>
                        <option value="2">2 - I've been better</option>
                        <option value="1">1 - Not good</option>
                    </select>
                    <p>Please choose a number, with 5 being "Great!" and 1 being "Not good".</p>
                    <button type="submit">Next</button>
                </form> */}
            </>
        )
    }
}


//actually don't need to map.. just dispatching to store

//ok, now we're storing state in Redux, so let's go get it!
const mapStateToProps = (store) => {
    return {
        store
    }
}


export default connect(mapStateToProps)(Feeling);