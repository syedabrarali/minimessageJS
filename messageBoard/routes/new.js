const express = require("express");
const router = express.Router();


router.get("/", function (req, res, next) {
    res.render('form', {title: "Form Posting"});
});

module.exports = router;