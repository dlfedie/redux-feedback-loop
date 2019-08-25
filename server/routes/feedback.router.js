const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Routes! (server side) ...(duh)

router.post('/', (req, res) => {
    //for now see if route works
    let newFeedback = req.body;
    //log
    console.log('Adding new feedback: ', newFeedback);
    //create queryText to use with pool.query to avoid SQL injections
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    //i called it supported all over client, on DB it is support
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comments])
        .then((response) => {
            //send ok
            res.sendStatus(201)
        }).catch((error) => {
            //log error locally on server
            console.log('error in POST:', error);
            //don't send server errors to client!
            res.sendStatus(500);
        })
});

router.get('/', (req, res) => {
    //check if route even works in postman
    // res.send([{ hello: 1, whee: 1 }, { hello: 2, whee: 2 }])
    let queryText = `SELECT * FROM "feedback"
                     ORDER BY "date" DESC`
    pool.query(queryText)
        .then((result) => {
            console.log('result from db:', result.rows); //test connection
            res.send(result.rows); //send db rows!
        }).catch((err) => {
            console.log('error in GET req: ', err); //log error in server
            res.sendStatus(500); //no server codes for you, fellow postmen
        })
})

router.delete('/:id', (req, res) => {
    const feedbackID = req.params.id;
    //get our ID and see if it shows up here.
    console.log('ID of feedback to delete:', feedbackID);
    //it does! so now the query, with sanitized sql
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackID])
        .then((result) => {
            //log local on server message
            console.log('deleted feedback ID of ', feedbackID);
            //send thumbs up, no content
            res.sendStatus(204);
        }).catch((error) => {
            //log error locally on server
            console.log('error making delete from DB: ', error);
            //tell client /shrug, server error
            res.sendStatus(500);
        })

})


module.exports = router;