
$(document).ready(function(){
    sessionStorage.setItem("ic-an",0);

  $('.btn-ic1').hover(function(){ 
    if (sessionStorage.getItem("ic-an")==0)
    {
    $('.p-ic1').show(); 
    }
  });
  $('.btn-ic1').mouseleave(function(){ $('.p-ic1').hide(); });
  $('.btn-ic2').hover(function(){ $('.p-ic2').show(); });
  $('.btn-ic2').mouseleave(function(){ $('.p-ic2').hide(); });
  $('.btn-ic3').hover(function(){ $('.p-ic3').show(); });
  $('.btn-ic3').mouseleave(function(){ $('.p-ic3').hide(); });
  $('.btn-ic4').hover(function(){ $('.p-ic4').show(); });
  $('.btn-ic4').mouseleave(function(){ $('.p-ic4').hide(); });

    $('.btn-ic1').click(function(){

      $('.p-ic1').hide();
       if (sessionStorage.getItem("ic-an")==0)
       {
    
        var c1=window.matchMedia("(min-width: 768px)");
        var c2=window.matchMedia("(min-width: 550px) and (max-width: 768px)");
        var c3=window.matchMedia("(max-width: 550px)");

        if (c1.matches)
      {    
        document.getElementById('btn-ic2').style.marginLeft="6vw";
        document.getElementById('btn-ic3').style.marginLeft="8vw";
        document.getElementById('btn-ic4').style.marginLeft="6vw";
      } 

      else if (c2.matches)
      {    
        document.getElementById('btn-ic2').style.marginLeft="10vw";
        document.getElementById('btn-ic3').style.marginLeft="13vw";
        document.getElementById('btn-ic4').style.marginLeft="10vw";
      } 
      
      else if (c3.matches)
      {
        document.getElementById('btn-ic2').style.marginLeft="15vw";
        document.getElementById('btn-ic3').style.marginLeft="19vw";
        document.getElementById('btn-ic4').style.marginLeft="15vw";
      }

            document.getElementById('btn-ic2').style.opacity="1";
            document.getElementById('btn-ic2').style.transition="0.5s";   
            document.getElementById('btn-ic2').style.marginTop="41vh";
            
            document.getElementById('btn-ic3').style.opacity="1";
            document.getElementById('btn-ic3').style.transition="0.5s";   
            document.getElementById('btn-ic3').style.marginTop="50vh";

            document.getElementById('btn-ic4').style.opacity="1";
            document.getElementById('btn-ic4').style.transition="0.5s";   
            document.getElementById('btn-ic4').style.marginTop="59vh";

            sessionStorage.setItem("ic-an",1);
       }   
        
         else
        {
        
          var d1=window.matchMedia("(min-width: 768px)");
          var d2=window.matchMedia("(min-width: 550px) and (max-width: 768px)");
          var d3=window.matchMedia("(max-width: 550px)");

          if (d1.matches)
          {    
            document.getElementById('btn-ic2').style.marginLeft="0.8vw";
          document.getElementById('btn-ic3').style.marginLeft="0.8vw";
          document.getElementById('btn-ic4').style.marginLeft="0.8vw";
          }
          
          else if (d2.matches)
          {    
            document.getElementById('btn-ic2').style.marginLeft="0.8vw";
          document.getElementById('btn-ic3').style.marginLeft="0.8vw";
          document.getElementById('btn-ic4').style.marginLeft="0.8vw";
          }
          
          else if (d3.matches)
          {
            document.getElementById('btn-ic2').style.marginLeft="2vw";
          document.getElementById('btn-ic3').style.marginLeft="2vw";
          document.getElementById('btn-ic4').style.marginLeft="2vw";
          }

            document.getElementById('btn-ic2').style.transition="0.5s";   
            document.getElementById('btn-ic2').style.marginTop="50vh";
            document.getElementById('btn-ic2').style.opacity="0";

            document.getElementById('btn-ic3').style.transition="0.5s";   
            document.getElementById('btn-ic3').style.marginTop="50vh";
            document.getElementById('btn-ic3').style.opacity="0";

            document.getElementById('btn-ic4').style.transition="0.5s";   
            document.getElementById('btn-ic4').style.marginTop="50vh";
            document.getElementById('btn-ic4').style.opacity="0";

            sessionStorage.setItem("ic-an",0);
        }
       
    });
});

function icf2()
{
  
  sessionStorage.setItem("goTrack",1);
  //window.open("Support.html",'_blank');
  window.location.href="../Support.html";
  
}


function icf3()
{
    
  window.location.href="../Sale.html";
}

function icf4()
{
    
    sessionStorage.setItem("goEmail",1);
    //window.open("Support.html",'_blank');
    window.location.href="../Support.html";
}

function reset_ic()
{
    document.getElementById('btn-ic2').style.transition="0.5s";   
            document.getElementById('btn-ic2').style.marginLeft="0.8vw";
            document.getElementById('btn-ic2').style.marginTop="30vw";
            document.getElementById('btn-ic2').style.opacity="0";

            document.getElementById('btn-ic3').style.transition="0.5s";   
            document.getElementById('btn-ic3').style.marginLeft="0.8vw";
            document.getElementById('btn-ic3').style.marginTop="30vw";
            document.getElementById('btn-ic3').style.opacity="0";

            document.getElementById('btn-ic4').style.transition="0.5s";   
            document.getElementById('btn-ic4').style.marginLeft="0.8vw";
            document.getElementById('btn-ic4').style.marginTop="30vw";
            document.getElementById('btn-ic4').style.opacity="0";

            document.getElementById('p-ic2').style.display="none";
            document.getElementById('p-ic3').style.display="none";
            document.getElementById('p-ic4').style.display="none";

            sessionStorage.setItem("ic-an",0);
}

$(document).ready(function(){      
  $('.navbar-toggler').click(function(){
    
    if ($('.navbar-toggler').attr('aria-expanded') === "true")
    { $('.btn-ic1').show(); $("body").css("overflowY", "scroll"); 
    $("body").css("visibility", "visible"); }
    else
    { $('.btn-ic1').hide(); $("body:not(.navbar)").css("overflowY", "hidden");
    $("body:not(.navbar)").css("visibility", "hidden"); $(".navbar").css("visibility", "visible"); $(".top-alert").css("visibility", "visible");
  }
  });         
});