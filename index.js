const boxes = document.querySelectorAll(".mosaique > div");

box1.addEventListener("mouseover", function() {
document.getElementById("title").style.opacity = "1"; 
});
box1.addEventListener("mouseout", function() {
document.getElementById("title").style.opacity = "0"; 
});

box1.addEventListener("mouseover", function() {
document.getElementById("title").style.opacity = "1"; 
});
box1.addEventListener("mouseout", function() {
document.getElementById("title").style.opacity = "0"; 
});
    



for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function() {
    boxes[i].querySelector("a h3").style.opacity = "1"
 });
    boxes[i].addEventListener("mouseout", function() { 
    boxes[i].querySelector("a h3").style.opacity = "0"
});
}

