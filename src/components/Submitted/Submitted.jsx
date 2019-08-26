import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class Submitted extends Component {

    state = {
        setOpen: true,
        open: true
    }

    // handleClick = () => {
    //     this.setState({ setOpen: true })
    // }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ setOpen: false, open: false })
    }


    //this is just a confirmation page saying that they submitted. This button will take them back to the first page
    goToBeginning = () => {

        this.props.history.push('/');
    }

    render() {



        return (
            <>
                <h2>Thanks for submitting!</h2>
                <Button variant="contained" color="primary" onClick={this.goToBeginning}>Leave New Feedback</Button>
                <Snackbar
                    className="success"
                    variant="success"

                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                >
                    <SnackbarContent className="success" message="Feedback successfully posted!"
                        variant="success" onClose={this.handleClose} action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                        style={{ backgroundColor: '#4caf50' }}
                    />
                </Snackbar>
            </>
        )
    }
}

export default Submitted;