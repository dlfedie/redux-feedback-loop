import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';




class Review extends Component {

    handleSubmit = () => {
        //check if submit button works
        console.log('clicked submit!');
        
        //need to post to database. no need for response to do anything.
        axios.post('/feedback', this.props.newFeedback)
            .then((response) => {
                //alert user that it has been submitted. maybe try out material snackbars?
                // alert('Comment submitted!');

                //let's now add a Swal to this

                Swal.fire(
                    'Submitted!',
                    'You have submitted your feedback.',
                    'success'
                )
                //if/when we use redux to store our values, tell them to revert to default
                this.props.dispatch({
                    type: 'SET_DEFAULTS',
                })

                //going to need to refresh data on admin page, too



                //if successful, send to next page (submitted)
                this.props.history.push('/submitted');

            }).catch((err) => {
                console.log(err);
                // alert('Error sending data: ', err);
                Swal.fire('Oh no!', `Error sending data to server: ${err}`)
            })

    }

    //render all choices made, pulled from redux
    render() {
        return (
            <>
                <h2>Review choices</h2>
                <h3 className="reviewHovers" onClick={() => { this.props.history.push('/') }}>Feeling: {this.props.newFeedback.feeling}</h3>
                <h3 className="reviewHovers" onClick={() => { this.props.history.push('/understanding') }}>Understanding: {this.props.newFeedback.understanding}</h3>
                <h3 className="reviewHovers" onClick={() => { this.props.history.push('/supported') }}>Support: {this.props.newFeedback.supported}</h3>
                <h3 className="reviewHovers" onClick={() => { this.props.history.push('/comments') }}>Comments: {this.props.newFeedback.comments}</h3>
                <p>Click on any line to go back to that page.</p>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="full-width contained primary button group"
                >
                    <Button onClick={() => { this.props.history.push('/comments') }}>Back</Button>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </ButtonGroup>
                {/* <button onClick={() => { this.props.history.push('/comments') }}>Back</button>
                <button onClick={this.handleSubmit}>Submit</button> */}
            </>
        )
    }
}

//need to map our redux store to props. will just set as newFeedback
const mapStateToProps = (store) => {
    return {
        newFeedback: store.newFeedback,
        setFeedback: store.setFeedback,
    }
}

export default connect(mapStateToProps)(Review);