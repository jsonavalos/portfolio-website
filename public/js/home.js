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
        name: "Chrome Extension",
        link: "www.google.com",
        description: "I made this project to "
    },
    {
        name: "Portfolio WebApp",
        link: "www.google.com",
        description: "I made this project to "
    },
    {
        name: "LinkUp WebApp",
        link: "www.google.com",
        description: "I made this project to "
    },
    {
        name: "Link Shortener",
        link: "www.google.com",
        description: "I made this project to "
    },
    {
        name: "Email mySQL database",
        link: "www.google.com",
        description: "I made this project to "
    },
    {
        name: "Jason's Website",
        link: "www.google.com",
        description: "I made this project to "
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
                <i class="fa fa-paw"></i>
            </div>
            <div class="card-content">
                <div class="content">
                    <h4>${projects[index].name}</h4>
                    <p>${projects[index].description}</p>
                    <p><a href="#">${projects[index].link}</a></p>
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



