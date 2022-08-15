
let isOpen1 = false
let isOpen2 = false
let isOpen3 = false

function openMenu1() {

   let changeIcon1 = document.getElementById("icon-menu1")
   let openMenu1 = document.getElementById("title1OpenMenu")
   let button1 = document.getElementById("title1")

 
   if (button1) { // если у нас нажали на первый элемент 
		if (isOpen1) { // если он уже был открыт, значит, нажали еще раз - закрываем
			// поменять иконку
            openMenu1.style.display = "none"
            changeIcon1.src = "arrow_down_icon.png"
			isOpen1 = false // установить закрытым
   
		} else {
			// поменять иконку	
         openMenu1.style.display = "flex"
         changeIcon1.src = "arrow_up_icon.png"
			isOpen1 = true // установить открытым
        
		}
     
	}
}

function openMenu2() {

   let changeIcon2 = document.getElementById("icon-menu2")
   let openMenu2 = document.getElementById("title2OpenMenu")
   let button2 = document.getElementById("title2")

   if (button2) { // если у нас нажали на первый элемент 
		if (isOpen2) { // если он уже был открыт, значит, нажали еще раз - закрываем
			// поменять иконку
         openMenu2.style.display = "none"
            changeIcon2.src = "arrow_down_icon.png"
			isOpen2 = false // установить закрытым
		} else {
			// поменять иконку	
         openMenu2.style.display = "flex"
         changeIcon2.src = "arrow_up_icon.png"
			isOpen2 = true // установить открытым
		}
     
	}

}

function openMenu3() {

let button3 = document.getElementById("title3")
let changeIcon3 = document.getElementById("icon-menu3")
let openMenu3 = document.getElementById("title3OpenMenu")

   if (button3) { // если у нас нажали на первый элемент 
		if (isOpen3) { // если он уже был открыт, значит, нажали еще раз - закрываем
			// поменять иконку
            openMenu3.style.display = "none"
            changeIcon3.src = "arrow_down_icon.png"
			isOpen3 = false // установить закрытым
		} else {
			// поменять иконку	
         openMenu3.style.display = "flex"
         changeIcon3.src = "arrow_up_icon.png"
			isOpen3 = true // установить открытым
		}
     
	}

}


  