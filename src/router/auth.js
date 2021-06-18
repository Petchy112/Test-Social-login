const express = require('express');
const path = require('path');
const thisService = require('../service/userLogin');
const router = express.Router()


router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../", 'app.html'));
});

router.post("/fb", async (req, res) => {
    const userData = await thisService.getFacebookUserData(req.headers.authorization.replace('Bearer ', ''))
    res.json(userData)
});
router.get("/fbdata", (req, res) => {
    res.sendFile(path.join(__dirname, "../", 'data.html'));
});




module.exports = router