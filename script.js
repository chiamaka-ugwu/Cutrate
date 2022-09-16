var menuIcon = document.getElementById("menu-icon");
var close = document.getElementById("close");
var dropDown = document.getElementById("dropdown");
var blur = document.getElementById("blur");
var nav = document.getElementById("nav");
var links = document.querySelectorAll(".link");
var text = document.getElementById("text");
var hero = document.getElementById("hero");

menuIcon.addEventListener("click", function(){    
    dropDown.style.display = "block";
    menuIcon.style.display = "none";
    close.style.display = "block";
    blur.style.display = "block";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    nav.style.borderBottom = "1px solid rgba(0, 0, 0, 0.01)";
})


close.addEventListener("click", function(){    
    dropDown.style.display = "none";
    menuIcon.style.display = "block";
    close.style.display = "none"
    blur.style.display = "none";
    nav.style.backgroundColor = "#fff";
    nav.style.borderBottom = "1px solid #BF9553";
})


const x = window.matchMedia("(max-width: 1000px)");
if(x.matches){
    document.onclick = function(e){
        if(e.target.id !== "dropdown" && e.target.id !== "menu-icon" && e.target.id !== "dropdownMenuLink"){
            dropDown.style.display = "none";
            menuIcon.style.display = "block";
            close.style.display = "none"
            blur.style.display = "none";
            nav.style.backgroundColor = "#fff";
            nav.style.borderBottom = "1px solid #BF9553";      
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