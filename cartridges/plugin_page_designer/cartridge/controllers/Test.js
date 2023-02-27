"use strict";

var server = require("server");

server.get("World", function (req, res, next) {
    res.json({ message: "Hello World!" });
    next();
});

module.exports = server.exports();
