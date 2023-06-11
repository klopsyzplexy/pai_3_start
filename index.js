const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send("Siemanko");
});


app.listen(port, () => {
	console.log('Przykladowa apka nasluchuje port ${port}!');
});
