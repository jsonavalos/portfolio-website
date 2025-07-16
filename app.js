const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'))


app.get('/', (req, res) => {
	res.render("home", { name: "Jason Avalos" ,
title: 'Future Data Scientist and Machine Learning Engineer specializing in Finance',
    about: 'I enjoy building data-driven solutions to business problems using machine learning, statistics, and software development.',
    projects: [
      {
        title: 'Loan Default Prediction',
        description: 'Built a predictive model using XGBoost on financial datasets.',
        image: '/images/loan-project.jpg',
        link: 'https://github.com/your-repo/loan-default',
        tags: ['Python', 'XGBoost', 'Pandas']
      },
      // ...more projects
    ],
    skills: ['Python', 'R', 'TensorFlow', 'SQL', 'Scikit-learn', 'Tableau'],
    email: 'jsonavalos@gmail.com'

	}











	);
});

app.get('/.well-known/pki-validation/320FC86E43E0833797F539CBAFFFB288.txt', (req, res) => {
	res.sendFile(path.join(__dirname + "/views/320FC86E43E0833797F539CBAFFFB288.txt"));
});

app.get(/.*/, (req, res) => {
	res.redirect('/');
});

app.listen(port, console.log(`Listenning to port: ${port}`)); 
