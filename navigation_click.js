var menus=document.querySelectorAll('a[class*="nav__link"]');
menus.forEach(function(a){
  if(a.href.includes("loancredit")){
      a.setAttribute("navname","credit card");
  }else  if(a.href.includes("loanhome")){
      a.setAttribute("navname","home loan");
  }else   if(a.href.includes("loanpersonal")){
      a.setAttribute("navname","personal loan");
  } else {
      a.setAttribute("navname","Home");
  }
  a.addEventListener('click',function(){
      utag.link({
          "tealium_event":"navigation_click",
          "navigationName":a.getAttribute("navname"),
          "navlink":a.href
      });
  });
});
