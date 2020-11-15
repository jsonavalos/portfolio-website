const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true})); //to read requests 
app.use('/static', express.static('public'))

app.get('/', (req,res) => {
	res.render("home",{name: "Jason Avalos"});
});

app.get(/.*/,(req,res)=>{
	res.redirect('/');

});

app.listen(port,console.log(`Listenning to port: ${port}`)); 
