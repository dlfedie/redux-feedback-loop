import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Comments extends Component {
    //again, set local state here
    // state = {
    //     comments: ''
    // }

    //also need again the handleChange
    handleChange = (event) => {
        //whenever our textbox is edited, store in local state
        // this.setState({ comments: event.target.value });
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: event.target.value
        })
    }

    //this should set value to state, send that to Redux store to store, then continue to next question
    setComments = (event) => {
        //react, we've been over this... no page reloads!
        event.preventDefault();

        //no need to validate, commemnts are optional


        // //set store in Redux!
        // this.props.dispatch({
        //     type: 'SET_COMMENTS',
        //     payload: this.state.comments
        // })

        // //clear local state
        // this.setState({ coments: '' })

        //then move to page 5: review
        this.props.history.push('/review')
    }



    render() {
        return (
            <>
                <h2>Any comments you would like to leave?</h2>
                <Card>
                    <CardContent>
                        {/* {JSON.stringify(this.state)} */}
                        <form onSubmit={this.setComments}>
                            <textarea value={this.props.store.newFeedback.comments} onChange={this.handleChange} rows="5" cols="60" />
                            <p>Comments are optional. You may provide feedback, thank yous, or a simple message.</p>
                            <ButtonGroup
                                aria-label="full-width contained primary button group"
                            >
                                <Button variant="contained" color="secondary" onClick={() => { this.props.history.push('/supported') }}>Back</Button>
                                <Button variant="contained" color="primary" type="submit">Next</Button>
                            </ButtonGroup>

                            {/* <button onClick={() => { this.props.history.push('/supported') }}>Back</button>
                        <button type="submit">Next</button> */}
                        </form>
                    </CardContent>
                </Card>
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

export default connect(mapStateToProps)(Comments);