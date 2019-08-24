import React, {Component} from 'react';

class Submitted extends Component {

    //this is just a confirmation page saying that they submitted. This button will take them back to the first page
    goToBeginning = () => {

        this.props.history.push('/');
    }

    render() {



        return (
            <>
            <h2>Thanks for submitting!</h2>
            <button onClick={this.goToBeginning}>Leave New Feedback</button>
            </>
        )
    }
}

export default Submitted