import React, {Component} from 'react';

class Form extends Component {

    //comments up here because JSX comments are messy
    //this pulls out the common form from all of the first 3 component submission forms. all 3 now have extra state to define
    //the select name, each option in the dropdown (with a default that will not show as an option), and the helpful tagline at the end.
    //functions are still being passed down to each form.


    render() {
        return (
            <>
            {/* {JSON.stringify(this.props)} */}
            <form onSubmit={this.props.setQuestion}>
                <select name={this.props.optionTexts.name} value={this.props.question} onChange={this.props.handleChange}>
                    <option value="none" disabled hidden>Select a number</option>
                    <option value="5">{this.props.optionTexts.option5Text}</option>
                    <option value="4">{this.props.optionTexts.option4Text}</option>
                    <option value="3">{this.props.optionTexts.option3Text}</option>
                    <option value="2">{this.props.optionTexts.option2Text}</option>
                    <option value="1">{this.props.optionTexts.option1Text}</option>
                </select>
                <p>{this.props.optionTexts.tagLine}</p>
                <button type="submit">Next</button>
            </form>
            </>
        )
    }
}

export default Form;