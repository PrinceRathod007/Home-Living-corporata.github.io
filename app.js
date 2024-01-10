let navbarsi = document.querySelector("#nav-bars-i");
let nav2 = document.querySelector("#nav-2")
 navbarsi.onclick = function(){
	nav2.classList.toggle('nav-2-id')	
    navbarsi.classList.toggle("nav-form-i1")
}


let img1 = document.querySelector("#pa1-right-col1");
let loader = document.querySelector("#loader");
let main = document.querySelector("#main");
let img2 = document.querySelector("#pa6-col2");
let btn1 = document.querySelector("#pa6-btn-a1");
let btn2 = document.querySelector("#pa6-btn-a2");
let pa6col1 = document.querySelector("#pa6-col1 h1")

main.addEventListener("mousemove", function (a) {
	gsap.to(loader, {
		left: a.x,
		top: a.y
	})
})


img1.addEventListener("mouseenter", function () {
	gsap.to(loader, {
        transform: "scaleY(1)"
	})
})
img1.addEventListener("mouseleave", function () {
	gsap.to(loader, {
        transform: "scaleY(0)"
	})
})
img2.addEventListener("mouseenter", function () {
	gsap.to(loader, {
        transform: "scaleY(1)"
	})
})
img2.addEventListener("mouseleave", function () {
	gsap.to(loader, {
        transform: "scaleY(0)"
	})
})



 btn1.onclick = function() {
	document.getElementById('img-cha').src='https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/04/LC-groupchat-cover.jpg'
	btn1.classList.toggle('active');
	btn2.classList.remove('active');
	pa6col1.textContent = "THE GROUP CHAT"
}
btn2.onclick = function() {
	document.getElementById('img-cha').src='https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/07/LC-102.jpg'
	btn2.classList.toggle('active');
	btn1.classList.remove('active');
	pa6col1.textContent = "THE BREAK ROOM"
}		