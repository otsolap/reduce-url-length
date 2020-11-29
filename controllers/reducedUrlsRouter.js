const express = require('express');
const router = express.Router();
const reduceUrl = require('../models/reduceUrl');


router.get('/', async (req, res) => {
    try {
        const urls = await reduceUrl.find()
        res.json(urls)
        console.log(urls);
    } catch (err) {
        res.json({ message: err });
    }
})


router.post('/', async (req, res) => {
    // fullUrl comes from our form.
    // full from schema.
    const reducedUrl = new reduceUrl({
        full: req.body.fullUrl
    });

    try {
        const savedUrl = await reducedUrl.save();
        res.status(201).json(savedUrl);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


module.exports = router;