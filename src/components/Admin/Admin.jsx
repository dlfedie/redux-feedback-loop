import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AdminTable from '../AdminTable/AdminTable';
import Swal from 'sweetalert2';

class Admin extends Component {

    componentDidMount() {
        //on mount of this page, pull in the data from Redux
        this.getFeedback();
    }
    
    getFeedback = () => {
        axios.get('/feedback')
          .then((response) => {
              //check and see what we get back first
              console.log('here is Admin page GET: ', response.data);
              this.props.dispatch({
                  type: 'SET_FEEDBACK',
                  payload: response.data
              })

          }).catch((err) => {
              console.log(err);
            //   alert(`Oh no! Couldn't get data at this time. Server says: `, err);
              Swal.fire('Oh no!', `Couldn't get data at this time. Server says: ${err}`)

          })

    }

    render() {

        //from the database, it's called support, not supported. that's changed here and on server on submit
        //dates originally on here to make sure they're going newest to oldest (top to bottom)
        let adminTable = this.props.allFeedback.map((submission) => {
            return (

                <AdminTable 
                key={submission.id}
                submission={submission}
                getFeedback={this.getFeedback}
                />
                // <tr key={submission.id}>
                //     <td>{submission.feeling}</td>
                //     <td>{submission.understanding}</td>
                //     <td>{submission.support}</td>
                //     <td>{submission.comments}</td>
                //     {/* <td>{submission.date}</td> */}
                //     <td><button>Delete?</button></td>
                // </tr>
            )
        })

        return (
            <>
                <h2>Feedback Results</h2>
                {/* {JSON.stringify(this.props.allFeedback)} */}
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            {/* <th>Date posted</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminTable}
                    </tbody>
                </table>
            </>
        )
    }
}

//map state to props, different reducer this time.
const mapStateToProps = (store) => {
    return {
        allFeedback: store.allFeedback
    }
}

export default connect(mapStateToProps)(Admin);