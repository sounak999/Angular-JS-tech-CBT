var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

var router = express.Router();

router.get("/Sum", function(req, res) {
    var a = req.query.a;
    var b = req.query.b;
    var c = parseInt(a) + parseInt(b);

    res.status(200).json(c);
});

app.use("/", router);

app.listen("8080", function() {
    console.log("Started listening at 8080..");
});