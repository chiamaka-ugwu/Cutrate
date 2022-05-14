var menuIcon = document.getElementById("menu-icon");
var close = document.getElementById("close");
var dropDown = document.getElementById("dropdown");
var body = document.getElementById("body");
var nav = document.getElementById("nav");
var links = document.querySelectorAll(".link");
var search = document.getElementById("search");
var text = document.getElementById("text");
 


menuIcon.addEventListener("click", function(){    
    dropDown.style.width = "55%";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    body.style.zIndex = "1000";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    nav.style.zIndex = "100000";
})


close.addEventListener("click", function(){    
    dropDown.style.display = "none";
    menuIcon.style.display = "block";
    close.style.display = "none";
    body.style.backgroundColor = "rgba(50, 12, 94, 0.2)";
    body.style.zIndex = "1";
    nav.style.backgroundColor = "#fff";
    nav.style.zIndex = "100";

})


const x = window.matchMedia("(max-width: 1000px)");
if(x.matches){
    document.onclick = function(e){
        if(e.target.id !== "dropdown" && e.target.id !== "menu-icon"){
            dropDown.style.width = "0";
            body.style.backgroundColor = "rgba(50, 12, 94, 0.2)";
            body.style.zIndex = "1";
            nav.style.backgroundColor = "#fff";
            nav.style.zIndex = "1000000";
        }
    }
}


const active = window.matchMedia("(max-width: 2000px)");
if(active.matches){
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";
        });
      }
}