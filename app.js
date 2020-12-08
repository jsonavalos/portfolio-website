const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true})); //to read requests 
app.use('/static', express.static('public'))

app.get('/', (req,res) => {
	res.render("home",{name: "Jason Avalos"});
});

app.get('/.well-known/pki-validation/11D1B573BD9DAD0FC1368F6CAD3BA5A8.txt',(req,res)=>{
	res.sendFile(path.join(__dirname+ "/views/11D1B573BD9DAD0FC1368F6CAD3BA5A8.txt"));
});

app.get(/.*/,(req,res)=>{
	res.redirect('/');
});

app.listen(port,console.log(`Listenning to port: ${port}`)); 
