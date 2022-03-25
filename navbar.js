//select menu var
const selectMenu = document.querySelector(".sub_menu_list");
const subMenuItems = document.querySelectorAll(".sub-menu-item");

//permet au menu deroulant de derouler
const showMenu = (actionEvent, display) => {
  for (let i = 0; i < subMenuItems.length; i++) {
    subMenuItems[i].addEventListener(actionEvent, () => {
      selectMenu.style.display = display;
    });
  }
};
// si la page est inferieur a 800px on passe en mode block pour le menu select ou none  si au dessus
if (window.innerWidth > 800) {
  document.getElementById("artiste").addEventListener("mouseover", () => {
    selectMenu.style.display = "block";
  });
  showMenu("mouseover", "block");
  showMenu("mouseout", "none");
} else {
  selectMenu.style.display = "none";
    // creation du burger en click il vient dans lecran 
document.querySelector(".burger").addEventListener("click", () => {
    document.getElementById("menu").style.transform = "translateX(0)";
  });
  
  // permet d'enlever le menu burger au click sur fleche
  document.querySelector(".arrow").addEventListener("click", () => {
    document.getElementById("menu").style.transform = "translateX(-150vw)";
  });
  
  //permet d'avoir la liste d'artiste en mode burger
  document.getElementById("artiste").addEventListener("click", () => {
    selectMenu.style.display = "block";
  });
  
  //permet de recuperer les liens de contact et events en faisant passer le burger menu a gauche again
  const itemsMenu = document.querySelectorAll(".menu > li");
  
  for (let j=2; j < itemsMenu.length; j++) {
      itemsMenu[j].addEventListener("click", () => {
          document.getElementById("menu").style.transform = "translateX(-150vw)";
      });
  }
}



//image
const createImg = (nameArtist, format) => {
    if (window.innerWidth < 800) {
      for (let l = 1; l < 9; l++) {
        const divImg = document.createElement("div");
        divImg.classList.add("imgArtistContainer");
        document.querySelector(".container").appendChild(divImg);
  
        const img = document.createElement("img");
        img.classList.add("imgArtist");
        img.src = `./${nameArtist}/carroussel/${l}.${format}`;
        img.style.width = "100%";
        divImg.appendChild(img);
      }
    }
  };
  
  console.log(window.location.pathname);
  switch (document.getElementById("location").innerText) {
    case "Agnes Lacombe":
      createImg("Agnes Lacombe", "jpg");
      break;
    case "Patrice Bueno":
      createImg("Patrice Bueno", "jpg");
      break;
    case "Vincent Tessier":
      createImg("Vincent Tessier", "webp");
      break;
  }

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