$(document).ready(function(){

    
    $('#em1').mouseover(function(){ if(sessionStorage.getItem("fcheck")==0){effect(1,0,1);} });
    $('#em1').mouseleave(function(){ if(sessionStorage.getItem("fcheck")==0){effect(0,1,1);} });
    $('#em2').mouseover(function(){ if(sessionStorage.getItem("fcheck")==0){effect(1,0,2);} });
    $('#em2').mouseleave(function(){ if(sessionStorage.getItem("fcheck")==0){effect(0,1,2);} });
    $('#em3').mouseover(function(){ if(sessionStorage.getItem("fcheck")==0){effect(1,0,3);} });
    $('#em3').mouseleave(function(){ if(sessionStorage.getItem("fcheck")==0){effect(0,1,3);} });
    $('#em4').mouseover(function(){ if(sessionStorage.getItem("fcheck")==0){effect(1,0,4);} });
    $('#em4').mouseleave(function(){ if(sessionStorage.getItem("fcheck")==0){effect(0,1,4);} });
    $('#em5').mouseover(function(){ if(sessionStorage.getItem("fcheck")==0){effect(1,0,5);} });
    $('#em5').mouseleave(function(){ if(sessionStorage.getItem("fcheck")==0){effect(0,1,5);} });
    

$('#em1').click(function(){ effect(1,0,1); if (sessionStorage.getItem("fcheck")!=2) { sessionStorage.setItem("fcheck",1);  final();} });
$('#em2').click(function(){ effect(1,0,1); if (sessionStorage.getItem("fcheck")!=2) { sessionStorage.setItem("fcheck",1); final();} });
$('#em3').click(function(){ effect(1,0,1); if (sessionStorage.getItem("fcheck")!=2) { sessionStorage.setItem("fcheck",1);  final(); } });
$('#em4').click(function(){ effect(1,0,1); if (sessionStorage.getItem("fcheck")!=2) { sessionStorage.setItem("fcheck",1); final();} });
$('#em5').click(function(){ effect(1,0,1); if (sessionStorage.getItem("fcheck")!=2) { sessionStorage.setItem("fcheck",1); final();} });

$(".launchf").click(function(){
    $('#loadModal').modal('show');
    if (sessionStorage.getItem("fcheck")!=0)
    {
        var a=sessionStorage.getItem("fcheck");
        $('.f_alert').show();
        document.getElementById("f_alert").innerHTML="Your response has been recorded";
    }
 });

});

function effect(a,b,c)
{
  for (var i=1; i<c+1; i++)
  {
      var id1="fl"+i, id2="em"+i;
      document.getElementById(id1).style.opacity=a;
      document.getElementById(id2).style.opacity=b;
  }
}

function final()
{
    $(document).ready(function(){
    $('.f_alert').show(); 
 document.getElementById("f_alert").innerHTML="Thank you for your feedback!";
 sessionStorage.setItem("fcheck",2);
});
}

/*$(window).on('load',function(){
    setTimeout(function(){
        $('#loadModal').modal('show');
    }, 0000);
 });*/

 