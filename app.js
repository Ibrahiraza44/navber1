(function(){
  
    var docEl = $(document),
        nav = $("nav"),
        lst = 0;
    
    docEl.on("scroll",function(){
    
    var cst = $(this).scrollTop();
      
      if(cst > lst) nav.addClass("hidden");
      
      else nav.removeClass("hidden");
      
      lst = cst;
  })
  })()