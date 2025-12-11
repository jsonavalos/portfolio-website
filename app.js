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
    title: 'Future Data Scientist and Machine Learning Engineer Specializing in Finance',
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
      {
    title: 'Los Angeles Litigation Dashboard — Tableau',
    description: 'This project visualizes legal claims and lawsuit trends against the City of Los Angeles, highlighting award growth, case counts, and average costs by allegation type to inform risk management and policy decisions.',
    image: '/static/images/Tableau LA.png',
    link: 'https://public.tableau.com/app/profile/jason.avalos/viz/Hw7_17610226607310/LosAngelesAwardsandLitigationDashboard',
    tags: ['Tableau', 'Data Visualization', 'Public Sector Analytics', 'Legal Claims Analysis', 'Dashboard Design']
    },
     {
    title: 'Maven Roasters (BrewPoint Analytics)',
    description: 'Forecasting next-hour café revenue and turning it into staffing, prep (pars), and upsell actions across three NYC stores.',
    image: '/static/images/Maven Rosters.png',
    link: 'https://github.com/jsonavalos/ADS-505',
    tags: ['Python', 'Time-Based Time Analysis','Basket Analysis', 'KPI analysis', 'Transaction-Level Analysis', 'Sales Optimization']
    },
      // ...more projects
    ],
    skills: [
  'Python',
  'R',
  'TensorFlow',
  'SQL',
  'Scikit-learn',
  'Tableau',
  'Power BI',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'PyTorch',
  'Keras',
  'Spark',
  'Hadoop',
  'AWS (S3, EC2, SageMaker)',
  'Google Cloud Platform (BigQuery, Vertex AI)',
  'Data Cleaning & Wrangling',
  'Feature Engineering',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Time Series Forecasting',
  'Statistical Modeling',
  'A/B Testing',
  'Data Pipelines',
  'Git/GitHub'
],
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

