const express = require('express');
const { Pool } = require('pg');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');

// POST route to add feedback input to database
feedbackRouter.post('/', (req, res) => {
    const sqlQuery = `
        INSERT INTO "feedback"
            (feeling, understanding, support, comments)
        VALUES
            ($1, $2, $3, $4);
    `;

    const sqlParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]

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

// GET routes to load data
feedbackRouter.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM "feedback"
        ORDER BY "id" DESC;
    `;

    pool.query(sqlQuery)
        .then((dbRes) => {
            console.log('in GET feedbackrouter ', dbRes);
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('GET feedbackrouter failed', err);
            res.sendStatus(500);
        });
});

module.exports = feedbackRouter;