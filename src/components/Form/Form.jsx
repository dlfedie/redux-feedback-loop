import React, { Component } from 'react';
//need history from Router so we can use the back button
import { withRouter } from "react-router";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
                    <FormControl variant="filled" >
                        <InputLabel >{this.props.optionTexts.name}</InputLabel>
                        <Select
                            value={this.props.question}
                            onChange={this.props.handleChange}
                            input={<Input name="this.props.optionTexts.name}" id="this.props.optionTexts.name}" />}
                            autoWidth
                        >
                            <MenuItem value="none">
                                <em></em>
                            </MenuItem>
                            <MenuItem value={5}>{this.props.optionTexts.option5Text}</MenuItem>
                            <MenuItem value={4}>{this.props.optionTexts.option4Text}</MenuItem>
                            <MenuItem value={3}>{this.props.optionTexts.option3Text}</MenuItem>
                            <MenuItem value={2}>{this.props.optionTexts.option2Text}</MenuItem>
                            <MenuItem value={1}>{this.props.optionTexts.option1Text}</MenuItem>
                        </Select>
                        {/* <FormHelperText>{this.props.optionTexts.name}</FormHelperText> */}
                    </FormControl>
                    {/* <select name={this.props.optionTexts.name} value={this.props.question} onChange={this.props.handleChange}>
                        <option value="none" disabled hidden>Select a number</option>
                        <option value="5">{this.props.optionTexts.option5Text}</option>
                        <option value="4">{this.props.optionTexts.option4Text}</option>
                        <option value="3">{this.props.optionTexts.option3Text}</option>
                        <option value="2">{this.props.optionTexts.option2Text}</option>
                        <option value="1">{this.props.optionTexts.option1Text}</option>
                    </select> */}
                    <p>{this.props.optionTexts.tagLine}</p>
                    <div>
                        <ButtonGroup
                            variant="contained"
                            color="primary"
                            aria-label="full-width contained primary button group"
                        >
                            {this.props.backButtonShow && <Button onClick={() => { this.props.history.push(this.props.backTo) }}>Back</Button>}
                            <Button type="submit">Next</Button>
                        </ButtonGroup>

                        {/* {this.props.backButtonShow && <button onClick={() => { this.props.history.push(this.props.backTo) }}>Back</button>}
                        <button type="submit">Next</button> */}
                    </div>

                </form>
            </>
        )
    }
}

export default withRouter(Form);