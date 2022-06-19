const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
const pool = require("../modules/pool");

router.post('/feedbackReview', (req, res) => {
    
    let newFeedback = req.body;
    
    const queryText = `
        INSERT INTO feedback
        (feeling, understanding, support, comments)
        VALUES
        ($1, $2, $3, $4);
    `

    const sqlParams = [
            newFeedback.commentsForm,
            newFeedback.feelingForm,
            newFeedback.supported,
            newFeedback.understanding,
        ]
    pool.query(queryText, sqlParams)
        .then((res) => {
            console.log('Post is working!', res)
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST error!', err);
            res.sendStatus(500)
        });
});

module.exports = router;