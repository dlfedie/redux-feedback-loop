import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class Review extends Component {

    handleSubmit = () => {
        //check if submit button works
        console.log('clicked submit!');
        //need to post to database. no need for response to do anything.
        axios.post('/feedback', this.props.newFeedback)
         .then((response) => {
            //alert user that it has been submitted. maybe try out material snackbars?
            alert('Comment submitted!');
            //if/when we use redux to store our values, tell them to revert to default
            this.props.dispatch({
                type: 'SET_DEFAULTS',
            })

            //if successful, send to next page (submitted)
             this.props.history.push('/submitted');

         }).catch((err) => {
             console.log(err);
             alert('Error sending data: ', err);
         })

    }

    //render all choices made, pulled from redux
    render() {
        return (
            <>
            <h2>Review choices</h2>
            <h3>Feeling: {this.props.newFeedback.feeling}</h3>
            <h3>Understanding: {this.props.newFeedback.understanding}</h3>
            <h3>Support: {this.props.newFeedback.supported}</h3>
            <h3>Comments: {this.props.newFeedback.comments}</h3>
            <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}

//need to map our redux store to props. will just set as newFeedback
const mapStateToProps = (store) => {
    return {
        newFeedback: store.newFeedback
    }
}

export default connect(mapStateToProps)(Review);