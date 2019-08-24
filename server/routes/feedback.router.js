const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    //for now see if route works
    let newFeedback = req.body;
    //log
    console.log('Adding new feedback: ', newFeedback);
    //create queryText to use with pool.query to avoid SQL injections
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
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
    
})


module.exports = router;