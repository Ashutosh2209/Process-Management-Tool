var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());

app.post("/shiftInsert", (req, res) => {
	const params = req.body;
	con.query("INSERT INTO shift SET ?", params, (err, rows) => {
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from repair table are: \n", rows);
	});
});
app.put("/shiftInsert", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=? WHERE orderNo=? AND processId=?",
		["true", order, 3],
		(err, rows) => {
			// connection.release()
			if (!err) {
				res.send(`added.`);
			} else {
				console.log(err);
			}

			console.log("The data from yarn table are: \n", rows);
		}
	);
});
module.exports = app;
