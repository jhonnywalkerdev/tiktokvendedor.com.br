var mentorDetails = false

var mentorDetailsObj1 = document.getElementById("mentorDetails1")
var mentorDetailsObj2 = document.getElementById("mentorDetails2")
mentorDetailsObj1.addEventListener("click", mentorDetailsFunc);
function mentorDetailsFunc(){
    mentorDetailsObj2.classList.add("actived")
    mentorDetailsObj1.innerHTML = ""
}