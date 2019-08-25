import React, {Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


class AdminTable extends Component {

    handleDelete = (id) => {
        //sweetalert2 check on delete to confirm
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to delete feedback!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
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
                      Swal.fire('Oh no!', `The feedback could not be deleted. Server says: ${error}`)
                  })




                Swal.fire(
                    'Deleted!',
                    'You have deleted the selected feedback.',
                    'success'
                )
                console.log('clicked delete button on ID:', id);
                

            } else {
                //if cancelled, then show confirmation of no delete
                Swal.fire(
                    'Whew!',
                    'You saved the feedback!',
                    'success'
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
                <td><button onClick={() => this.handleDelete(this.props.submission.id)}>Delete?</button></td>
            </tr>
        )
    }
}


export default AdminTable;