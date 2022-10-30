const express = require('express');
const { Pool } = require('pg');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');

// POST route to add feedback input to database
feedbackRouter.post('/', (req, res) => {
    const newFeedback = req.body;

    const sqlParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ];

    const sqlQuery = `
        INSERT INTO "feedback"
            (feeling, understanding, support, comments)
        VALUES
            ($1, $2, $3, $4)
    `;

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            console.log('in POST feedbackrouter ', dbRes);
            res.sendStatus(201);
      })
      .catch((err) => {
        console.log('GET feedbackrouter failed', err);
        res.sendStatus(500);
      });
});

// Will need this for stretch goals
// feedbackRouter.get('/', (req, res) => {
//     const sqlQuery = `
//         SELECT * FROM "feedback"
//         ORDER BY "id" DESC;
//     `;

//     pool.query(sqlQuery)
//         .then((dbRes) => {
//             console.log('in GET feedbackrouter ', dbRes);
//             res.send(dbRes.rows);
//         })
//         .catch((err) => {
//             console.log('GET feedbackrouter failed', err);
//             res.sendStatus(500);
//         });
// });

module.exports = feedbackRouter;