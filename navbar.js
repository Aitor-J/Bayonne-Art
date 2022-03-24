//select menu var 
const selectMenu = document.querySelector(".sub_menu_list");
const subMenuItems = document.querySelectorAll(".sub-menu-item");

document.getElementById("artiste").addEventListener("mouseover", () => {
selectMenu.style.display= "block";
});

const showMenu = (actionEvent, display) => {
    for (let i=0; i < subMenuItems.length; i++) {
        subMenuItems[i].addEventListener(actionEvent, () => {
            selectMenu.style.display = display;
    });
    }
};

showMenu("mouseover", "block");
showMenu("mouseout", "none");


document.querySelector(".burger").addEventListener("click", () => {
document.getElementById("menu").style.transform = "translateX(0)";
});

document.querySelector(".fleche").addEventListener("click", () => {
document.getElementById("menu").style.transform = "translateX(-100)";
});

// document.querySelectorAll(".sub_menu_list").addEventListener("click", () => {
// document.querySelectorAll(".sub_menu_list").style.display= "block");

//     for (let j=0; j < subMenuItems.length; j++) {
//     subMenuItems[j].addEventListener(actionEvent, () => {
//     selectMenu.style.display = display;
// }
// );

// selectionner tout les items du menu(querySelectorAll),
//  faire une boucle for, ajouter un addEventListener au click dessus et 
//  du coup mettre l'id menu en display none



// document.getElementById("artiste").addEventListener("mouseover", () => {
//     selectMenu.style.display= "block";
//     });
    
//     const showMenu = (actionEvent, display) => {
//         for (let i=0; i < subMenuItems.length; i++) {
//             subMenuItems[i].addEventListener(actionEvent, () => {
//                 selectMenu.style.display = display;
//         });
//         }
//     };

// for (let i=0; i < subMenuItems.length; i++) {
//     subMenuItems[i].addEventListener("mouseout", () => {
//         selectMenu.style.display = "none";
// });
// }


// for (let i=0; i < subMenuItems.length; i++) {
//     subMenuItems[i].addEventListener("mouseover", () => {
//         selectMenu.style.display = "block";
// });
// }