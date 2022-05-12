var menuIcon = document.getElementById("menu-icon");
var close = document.getElementById("close");
var dropDown = document.getElementById("dropdown");
var body = document.getElementById("body");
    


menuIcon.addEventListener("click", function(){    
    dropDown.style.display = "block";
    menuIcon.style.display = "none";
    close.style.display = "block";
    body.style.filter = "contrast(85%)";
})


close.addEventListener("click", function(){    
    dropDown.style.display = "none";
    menuIcon.style.display = "block";
    close.style.display = "none";
    body.style.filter = "contrast(100%)";
})

document.onclick = function(e){
    if(e.target.id !== "dropdown" && e.target.id !== "menu-icon"){
        dropDown.style.display = "none";
        menuIcon.style.display = "block";
        close.style.display = "none";
        body.style.filter = "contrast(100%)";
    }
}