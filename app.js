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
    icon_image: '/static/images/javalos.jpeg',
    projects: [
      {
        title: 'West Coast Credit Consultancy',
        description: 'Class: Foundations of Data Science and Data Ethics',
        image: '/static/images/javalos.jpeg',
        link: 'https://github.com/jsonavalos/ADS501-Project',
        tags: ['Python', 'Linear Regression', 'Pandas']
      },
            {
        title: 'Loan Default Prediction',
        description: 'Built a predictive model using XGBoost on financial datasets.',
        image: '/static/images/javalos.jpeg',
        link: 'https://github.com/your-repo/loan-default',
        tags: ['Python', 'XGBoost', 'Pandas']
      },
      // ...more projects
    ],
    skills: ['Python', 'R', 'TensorFlow', 'SQL', 'Scikit-learn', 'Tableau', 'PowerBI'],
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

