import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';






class Review extends Component {

    handleSubmit = () => {
        console.log('clicked submit!');

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