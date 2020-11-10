const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 3000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true})); //to read requests 
app.use('/static', express.static('public'))

app.get('/', (req,res) => {
	res.render("home",{name: "Jason Avalos"});
});

app.get(/.*/,(req,res)=>{
	res.redirect('/');

});

app.get('/experience', (req,res) => {
	res.send('Inside experience page');

});

app.post('/contactrequest', (req,res) => {
	var q = 'INSER INTO quotes ?';
	//const {name,email,number,description} = req.body;
	//console.log(name+email+number+description);
	// should be (q, [info])
	console.log(req.body);
});


app.listen(port,console.log(`Listenning to port: ${port}`)); 
