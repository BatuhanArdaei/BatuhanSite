// var
/* nav bar buttons */
  let class1 = $("#home");
  let class2 = $("#info");
  let class3 = $("#con");
  /* select section */
  let div1 = $("#h");
  let div2 = $("#i");
  let div3 = $("#c");
// var end

/* load ge so give only home page */
$(document).ready(function() {

  /* let btn2 = $("#btn2");
 
  btn2.click(function() {
   if($("#btn2").hasClass("btn2-active")){
      
    } else {
      
    }
    }); */
    
  class1.addClass("active");
  div1.show("");
  div2.hide("");
  div3.hide("");
   
  })

class1.click(function() {
 class1.addClass("active");
 class2.removeClass("active");
 class3.removeClass("active");

  div1.show("");
  div2.hide("");
  div3.hide("");
   
  });

class2.click(function() {
 class2.addClass("active");
 class3.removeClass("active");
 class1.removeClass("active");
 
  div2.show("");
  div1.hide("");
  div3.hide("");
   
  });

class3.click(function() {
  class3.addClass("active");
  class2.removeClass("active");
  class1.removeClass("active");
  
  div3.show("");
  div1.hide("");
  div2.hide("");
   
  });

$("#fb").click(function(){
location.href = "https://facebook.com/Batuhanardai";
});
$("#sp").click(function(){
location.href = "https://open.spotify.com/artist/2s0sUfzeYwlJc77FlFv5Cm?si=xqYU0aH7TcuzNH1FCdY4ng";
});
$("#ins").click(function(){
location.href = "https://www.instagram.com/BatuhanArdai";
});
$("#git").click(function(){
location.href = "https://github.com/BatuhanArdaei";
});
$("#dis").click(function(){
location.href = "https://discord.gg/sFpAGg5XAe";
});

/*
var navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function(e, i) {

  e.addEventListener("click", function(e) {

    navItems.forEach(function(e2, i2) {

      e2.classList.remove("active");

    });

    this.classList.add("active");

  });

});

*/;