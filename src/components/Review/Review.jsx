import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';




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

                // Swal.fire(
                //     'Submitted!',
                //     'You have submitted your feedback.',
                //     'success'
                // )

                //try snackbar. just going to load a snackbar on success page!



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
                Swal.fire(
                    {
                        type: 'error',
                        title: 'Oh no!',
                        text: `Error sending data to server: ${err}`,
                        confirmButtonColor: '#4caf50',
                        cancelButtonColor: '#f4511e',
                    }
                    )
            })

    }

    //render all choices made, pulled from redux
    render() {


        return (
            <>
                <h2>Review choices</h2>
                <Card>
                    <CardContent>
                        <div className="reviewRows">
                            <h3>Feeling: {this.props.newFeedback.feeling}
                                <span className="editIcon">
                                    <Fab className="editIcon" color="secondary" aria-label="edit" onClick={() => { this.props.history.push('/') }}>
                                        <EditIcon />
                                    </Fab>
                                </span>
                            </h3>
                        </div>
                        <div className="reviewRows">
                            <h3>Understanding: {this.props.newFeedback.understanding}
                                <span className="editIcon">
                                    <Fab className="editIcon" color="secondary" aria-label="edit" onClick={() => { this.props.history.push('/understanding') }}>
                                        <EditIcon />
                                    </Fab>
                                </span>
                            </h3>
                        </div>
                        <div className="reviewRows">
                            <h3>Support: {this.props.newFeedback.supported}
                                <span className="editIcon">
                                    <Fab className="editIcon" color="secondary" aria-label="edit" onClick={() => { this.props.history.push('/supported') }}>
                                        <EditIcon />
                                    </Fab>
                                </span>
                            </h3>
                        </div>
                        <div className="reviewRows">
                            <h3>Comments: {this.props.newFeedback.comments}
                                <span className="editIcon">
                                    <Fab className="editIcon" color="secondary" aria-label="edit" onClick={() => { this.props.history.push('/comments') }}>
                                        <EditIcon />
                                    </Fab>
                                </span>
                            </h3>
                        </div>
                        <p>Click on the edit button to go back to that page.</p>
                        <ButtonGroup
                            aria-label="full-width contained primary button group"
                        >
                            <Button variant="contained" color="secondary" onClick={() => { this.props.history.push('/comments') }}>Back</Button>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

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