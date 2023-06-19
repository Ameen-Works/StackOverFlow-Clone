const express = require("express");
const router = express.Router();
const Doubt = require("../models/Doubts");

router.get("/", (req, res) => {
    Doubt.find()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ message: e })
        })
});

router.post("/", (req, res) => {
    const doubt = new Doubt({
        question: req.body.question,
        comments: req.body.comments,
        views: req.body.views,
        votes: req.body.votes
    });
    doubt.save()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ message: e });
        })
});

module.exports = router;