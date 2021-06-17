const express = require('express');
const path = require('path');
const router = express.Router()

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../", 'app.html'));
});

router.get("/", (req, res) => {
    res.send(200);
});




module.exports = router