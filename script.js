
   
let isOpen1 = false
let isOpen2 = false
let isOpen3 = false


function openMenu() {

  let changeIcon1 = document.getElementById("icon-menu1")
  let openMenu1 = document.getElementById("title1OpenMenu")
  let changeIcon2 = document.getElementById("icon-menu2")
  let openMenu2 = document.getElementById("title2OpenMenu")
  let changeIcon3 = document.getElementById("icon-menu3")
  let openMenu3 = document.getElementById("title3OpenMenu")
  
  if (isOpen1 & isOpen2 & isOpen3) {
   openMenu1.style.display = "none"
   openMenu2.style.display = "none"
   openMenu3.style.display = "none"
   changeIcon1.src = "arrow_down_icon.png"
   changeIcon2.src = "arrow_down_icon.png"
   changeIcon3.src = "arrow_down_icon.png"

   isOpen1 = false
   isOpen2 = false
   isOpen3 = false
  }

  else if (isOpen1) {
    openMenu1.style.display = "flex"
    changeIcon1.src = "arrow_up_icon.png"
 
    isOpen1 = true
    isOpen2 = false
    isOpen3 = false
   }
 
   else if (isOpen2) {
    openMenu2.style.display = "flex"
    changeIcon2.src = "arrow_up_icon.png"

    isOpen1 = false
    isOpen2 = true
    isOpen3 = false
   }

   else if (isOpen3) {
    openMenu3.style.display = "flex"
    changeIcon3.src = "arrow_up_icon.png"

    isOpen1 = false
    isOpen2 = false
    isOpen3 = true
   }
}
