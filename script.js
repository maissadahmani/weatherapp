const descparagraph = document.getElementById("desc-paragraph");
const plusbtn = document.getElementById("plus");
const minusbtn = document.getElementById("minus");
var navLinks = document.getElementById("navlinks");
var bxMenu = document.getElementById("bx-menu");

plusbtn.addEventListener("click", ()=>{
  plusbtn.style.display="none";
  minusbtn.style.display="block";
descparagraph.style.display="block";

})

minusbtn.addEventListener("click", ()=>{
  document.getElementById("plus").style.display="block";
  document.getElementById("minus").style.display="none";
document.getElementById("desc-paragraph").style.display="none";

})


bxMenu.onclick= function(){
  /*navli = document.querySelector(".nav-links");*/
  navLinks.classList.toggle("active");
}



