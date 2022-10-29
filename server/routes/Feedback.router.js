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
            res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
});

module.exports = feedbackRouter;