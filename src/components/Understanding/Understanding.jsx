import React, { Component } from 'react';

class Understanding extends Component {
    render() {
        return (
            <>
                <h2>How well are you understanding the content?</h2>
                <select>
                    <option value="five">5 - Let me teach you some tricks!</option>
                    <option value="four">4 - I've got this!</option>
                    <option value="three">3 - Little fuzzy, but let me take a crack at it</option>
                    <option value="two">2 - I'm struggling to grasp this right now</option>
                    <option value="one">1 - Wait, what?</option>
                </select>

                <p>Please choose a number, with 5 being "I could teach this!" and 1 being "Were you speaking a language I speak today?".</p>
                <div>
                    <button>Next</button>
                </div>
            </>
        )
    }
}

export default Understanding;