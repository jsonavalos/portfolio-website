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
        title: 'Future-Proofing TSA Operations: Data-Driven Resource Optimization',
        description: 'This project develops a data-driven passenger forecasting and workforce optimization model for the U.S. Transportation Security Administration (TSA)',
        image: '/static/images/STL decomposition.png',
        link: 'https://github.com/jsonavalos/TSA-Analysis.git',
        tags: ['R/RStudio/Quarto', 'Time Series Forecasting', 'ARIMA/ETS Modeling', ' Rolling Origin', 'ggplot']
      },
       {
        title: 'Australian Wines Forecasting — Shiny App',
        description: 'This project provides an interactive Shiny application for exploring, modeling, and forecasting monthly Australian wine sales by varietal.',
        image: '/static/images/Wines Time Series.png',
        link: 'https://019ab99f-ce00-6edb-470f-ca090ad12efd.share.connect.posit.cloud/',
        tags: ['R/Positron', 'fpp3', 'fable', 'tsibble', 'ETS/ARIMA/TSLM', 'Time Series Forecasting']
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

