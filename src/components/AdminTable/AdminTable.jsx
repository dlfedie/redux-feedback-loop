import React, {Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';


class AdminTable extends Component {

    handleDelete = (id) => {
        //sweetalert2 check on delete to confirm
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to delete feedback!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#f4511e',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                //run axios before confirm of delete
                axios.delete(`/feedback/${id}`)
                  .then((response) => {
                      console.log('response from delete feedback', response);
                      //then refresh form, passed from props
                      this.props.getFeedback()
                  }).catch((error) => {
                      Swal.fire(
                          {
                              type: 'error',
                              title: 'Oh no!',
                              text: `The feedback could not be deleted. Server says: ${error}`,
                              confirmButtonColor: '#4caf50',
                              cancelButtonColor: '#f4511e',
                          }
                          )
                  })




                Swal.fire(
                    {
                    type: 'success',
                    title: 'Deleted!',
                    text: 'You have deleted the selected feedback.',
                    confirmButtonColor: '#4caf50',
                    cancelButtonColor: '#f4511e',
                    }
                )
                console.log('clicked delete button on ID:', id);
                

            } else {
                //if cancelled, then show confirmation of no delete
                Swal.fire(
                    {
                        type: 'success',
                        title: 'Whew!',
                        text: 'You saved the feedback!',
                        confirmButtonColor: '#4caf50',
                        cancelButtonColor: '#f4511e',
                    }
                    
                )
                console.log('no delete');
                
                return //stop if they click cancel
            }
        })

    }


    render() {
        return (
            <tr key={this.props.submission.id}>
                <td>{this.props.submission.feeling}</td>
                <td>{this.props.submission.understanding}</td>
                <td>{this.props.submission.support}</td>
                <td>{this.props.submission.comments}</td>
                {/* <td>{submission.date}</td> */}
                <td> <Fab color="secondary" aria-label="delete" onClick={() => this.handleDelete(this.props.submission.id)}>
                    <DeleteIcon /> </Fab></td>
                {/* <td><button onClick={() => this.handleDelete(this.props.submission.id)}>Delete?</button></td> */}
            </tr>
        )
    }
}


export default AdminTable;