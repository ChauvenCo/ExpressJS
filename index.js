const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/hello', (req, res) => {
	res.send('hello world');
});

let friends = [{name: 'Mathis'}, {name: 'Bajeux'}, {name: 'Hubert'}];

app.get('/api/friends', (req, res) => {
	res.send({friends});
});

app.post('/api/friend', (req, res) => {
	friends.push({name: req.query.name});
	res.send("Nouvel ami : " + req.query.name);
});

app.delete('/api/friend', (req, res) => {
	let index = 0;
	for (i = 0; i < friends.length; i++)
	{
		if (friends[i].name == req.query.name) index = i;
	}
	console.log(index);
	friends.splice(index, 1);
	res.send("Ami en moins : " + req.query.name);
});

module.exports = app;
