import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <>
            {/* {JSON.stringify(this.props)} */}
            <form onSubmit={this.props.setQuestion}>
                <select name={this.props.optionTexts.name} value={this.props.question} onChange={this.props.handleChange}>
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