import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    //again, set local state here
    state = {
        supported: ''
    }

    render() {
        return (
            <>
                <h2>How well are you understanding the content?</h2>
                {JSON.stringify(this.state)}
                <form onSubmit={this.setFeeling}>
                    <select name="understanding" value={this.state.supported} onChange={this.handleChange}>
                        <option value="5">5 - Let me teach you some tricks!</option>
                        <option value="4">4 - I've got this!</option>
                        <option value="3">3 - Little fuzzy, but let me take a crack at it</option>
                        <option value="2">2 - I'm struggling to grasp this right now</option>
                        <option value="1">1 - Wait, what?</option>
                    </select>
                    <p>Please choose a number, with 5 being "I could teach this!" and 1 being "Were you speaking a language I speak today?".</p>
                    <button type="submit">Next</button>
                </form>
            </>
        )
    }
}

export default connect()(Supported);