const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

while (true) {
  try {
		mongoose.connect('mongodb://mongo:27017/db', { useNewUrlParser: true });
		console.log('mongo Connecting');
		break;
	} catch (err) {
		console.log(err);
	}
}

const Value = require('./schema/Value.js');

app.get('/', (req, res) => {
  Value.find()
    .then(values => res.render('app', { values }))
    	.catch(err => res.status(404).json({ msg: 'No items' }));
});

app.post('/value/submit', (req, res) => {
  const nv = new Value({ name: req.body.name });
  nv.save().then(value => res.redirect('/'));
});

app.listen(port, () => console.log('Server running...'));
