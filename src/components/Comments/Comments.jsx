import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    //again, set local state here
    state = {
        comments: ''
    }

    //also need again the handleChange
    handleChange = (event) => {
        //whenever our textbox is edited, store in local state
        this.setState({ comments: event.target.value });
    }

    //this should set value to state, send that to Redux store to store, then continue to next question
    setComments = (event) => {
        //react, we've been over this... no page reloads!
        event.preventDefault();

        //no need to validate, commemnts are optional


        //set store in Redux!
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })

        //clear local state
        this.setState({ coments: '' })

        //then move to page 5: review
        this.props.history.push('/review')
    }



    render() {
        return (
            <>
                <h2>Any comments you would like to leave?</h2>
                {/* {JSON.stringify(this.state)} */}
                <form onSubmit={this.setComments}>
                    <textarea value={this.state.comments} onChange={this.handleChange} rows="5" cols="60"/>
                    <p>Comments are optional. You may provide feedback, thank yous, or a simple message.</p>
                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}

export default connect()(Comments);