const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3001;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true})); //to read requests 
app.use('/static', express.static('public'))

app.get('/', (req,res) => {
	res.render("home",{name: "Jason Avalos"});
});

app.get('/.well-known/pki-validation/320FC86E43E0833797F539CBAFFFB288.txt',(req,res)=>{
	res.sendFile(path.join(__dirname+ "/views/320FC86E43E0833797F539CBAFFFB288.txt"));
});

app.get(/.*/,(req,res)=>{
	res.redirect('/');
});

app.listen(port,console.log(`Listenning to port: ${port}`)); 
