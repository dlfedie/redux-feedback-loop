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


module.exports = router;