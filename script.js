var menuBtn = document.getElementById("menu_btn");
var sideNav = document.getElementById("side_nav");

sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0px";
    }
    else{
        sideNav.style.right = "-250px";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});