/*
Variables for top navigation bar -- later used with a forEach loop to scrollView
*/


var contact_link = document.getElementById("contact-link");
var projects_link = document.getElementById("projects-link");
var internships_link = document.getElementById("internships-link");
var skills_link = document.getElementById("skills-link");
var links = [contact_link,projects_link,internships_link,skills_link];

var projects = [
    {
        name: "Velocity Raptor Chrome Extension",
        link: "https://github.com/cse112-sp20/CalamariCrew",
        description: "This Chrome Extension was part of a Software Engineering class. Its main purpose is to keep track of sprints using GitHub in an agile team to keep track of velocity. I was in charge of coding the Front-End using HTML, CSS, Bootstrap and JavaScript.",
        tools: [" Typescript "," Javascript "," HTML "," NodeJS "]
    },
    {
        name: "Portfolio WebApp",
        link: "https://github.com/jsonavalos/resume",
        description: "Personal project to create a website using new technologies and learning about Components in React",
        tools: [" React "," JSX "," HTML "," CSS "]
    },
    {
        name: "LinkUp WebApp",
        link: "https://github.com/Justin-sd/LinkUp",
        description: "Team project for a Software Engineering class.As a database specialist, my tasks were to create the SQLite schema, implement it and help front-end coders with the app's design. ",
        tools: [" Django "," sqlite "," Python "," HTML "," Javascript"," CSS"]
    },
    {
        name: "Link Shortener API",
        link: "www.google.com",
        description: "Small API created to make links shorter.I implemented this API using Flask, Python and MongoDB in order to leverage my skills using a back-end server and learning about the basic functions of CRUD.",
        tools: [" Flask "," Python "," MongoDB "]
    },
    {
        name: "Email Collector WebApp ",
        link: "https://github.com/jsonavalos/express-mysql-app",
        description: "Small Web Application to get users email and store them in a database. I implemented this application using Express, NodeJS and MySQL to practice with a web server for backend sever.",
        tools: [" Express "," NodeJS "," MySQL "]
    },
    {
        name: "Jason's Website",
        link: "https://github.com/jsonavalos/electrician-website",
        description: "<strong>this</strong> website was created to practice with back-end servers",
        tools: [" Express "," NodeJS "," HTML "," CSS "," Javascript "]
    }
]

//links to scroll down when clicked
links.forEach(element => {
    element.addEventListener('click',()=>{
        var elmnt = document.getElementById(element.id+"-view");
        elmnt.scrollIntoView({behavior: "smooth"});//id
    });
});



function createProjects(index){
    let firstPart = ``;
    for(var i =0;i <3 ;i++){
        if(i%3 ==0){
            firstPart += `<div class="columns features">`;
        }    
        secondPart = `         
        <div class="column is-4">
        <div class="card is-shady" id="experimental">
            <div class="card-image has-text-centered">
                
            </div>
            <div class="card-content">
                <div class="content">
                    <h4 class="is-family-code">${projects[index].name}</h4>
                    <p>${projects[index].description}</p>
                    <h7 class="is-italic"><u>Technologies:</u></h7>
                    <h6><span style="color: red">{</span>${projects[index].tools}<span style="color: red">}</span></h6>
                    <p><a href="${projects[index].link}" target="_blank">#LinkToCode</a></p>
                </div>
            </div>
             </div>
         </div>`;
         index += 1;
         firstPart += secondPart;
    
        }
        firstPart += `</div>`;
        return firstPart;
}


window.addEventListener('load',(event)=>{
    var projects_content = document.getElementById("projects-content");
var result = ``;
for(var i =0 ; i < projects.length/3 ; i++){
    result += createProjects(i*3); //to get where the thing should start
}
     projects_content.innerHTML = result;
     event.preventDefault();
});



