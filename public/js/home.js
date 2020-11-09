var contact_link = document.getElementById("contact_link");

contact_link.addEventListener('click',()=>{
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({behavior: "smooth"});//id
});