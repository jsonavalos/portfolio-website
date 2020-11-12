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
        description: "I made this project to ",
        tools: [" Typescript "," Javascript "," HTML "," NodeJS "]
    },
    {
        name: "Portfolio WebApp",
        link: "https://github.com/jsonavalos/resume",
        description: "I made this project to ",
        tools: [" React "," JSX "," HTML "," CSS "]
    },
    {
        name: "LinkUp WebApp",
        link: "https://github.com/Justin-sd/LinkUp",
        description: "I made this project to ",
        tools: [" Django "," sqlite "," Python "," HTML "," Javascript"," CSS"]
    },
    {
        name: "Link Shortener API",
        link: "www.google.com",
        description: "I made this project to ",
        tools: [" Flask "," Python "," MongoDB "]
    },
    {
        name: "Email mySQL database",
        link: "https://github.com/jsonavalos/express-mysql-app",
        description: "I made this project to ",
        tools: [" Express "," NodeJS "," MySQL "]
    },
    {
        name: "Jason's Website",
        link: "https://github.com/jsonavalos/electrician-website",
        description: "Hi",
        tools: [" Express "," NodeJs "," HTML "," CSS "," Javascript "]
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



