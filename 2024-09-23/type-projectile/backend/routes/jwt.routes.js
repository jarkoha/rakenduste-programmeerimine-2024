const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use(express.json());

router.get("/", (req, res) => {
    const token = jwt.sign({ name: "Jarl"}, "shh");
    res.send(token);
});

const postMiddleware = (req, res, next) => {
    console.log("the response will be sent by the next function...");
    next();
};

router.post("/", postMiddleware, (req, res) => {
    const { token } = req.body;

    jwt.verify(token, "shh", function (err, decoded) {
        if (err) return res.send(false);
        console.log(decoded);
        res.send(true);
    });
});

module.exports = router;