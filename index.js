const boxes = document.querySelectorAll(".mosaique > div");

// box1.addEventListener("mouseover", function() {
// document.getElementById("title").style.opacity = "1"; 
// });
// box1.addEventListener("mouseout", function() {
// document.getElementById("title").style.opacity = "0"; 
// });

// box1.addEventListener("mouseover", function() {
// document.getElementById("title").style.opacity = "1"; 
// });
// box1.addEventListener("mouseout", function() {
// document.getElementById("title").style.opacity = "0"; 
// });
    


// permet d'avoir le hover sur la mosaique avec les noms d'artistes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function() {
    boxes[i].querySelector("a h3").style.opacity = "1"
    boxes[i].querySelector("a img").style.filter = "blur(2px) brightness(0.5)"
    boxes[i].querySelector("a img").style.transform = "scale(1.1)";
 });
    boxes[i].addEventListener("mouseout", function() { 
    boxes[i].querySelector("a h3").style.opacity = "0"
    boxes[i].querySelector("a img").style.filter = "none"
    boxes[i].querySelector("a img").style.transform = "scale(1)";
});
    boxes[i].querySelector("a h3").addEventListener("mouseover", function() {
    boxes[i].querySelector("a img").style.filter = "blur(2px) brightness(0.5)"
})
}


