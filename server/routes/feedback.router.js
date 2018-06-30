const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) =>{
    const query = `SELECT * FROM "feedback";`;
    pool.query(query)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
            alert('There is an error with your query');
        })
})

router.post('/', (req, res) => {
    const query = `"feedback" ("feelings", "comprehension", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [req.body.feelings, req.body.comprehension, req.body.support, req.body.comments])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            res.sendStatus(500);
            alert('There was an error with you post!', error);
        })
})

router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
            alert('The feedback was not deleted', error);
        })
})

module.exports = router;