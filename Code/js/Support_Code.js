

if (sessionStorage.getItem("loadSupport")==null )
{
  var myVar;
  myVar = setTimeout(showPage, 2000);
}

else
{
  document.onreadystatechange = function() { 
    if (document.readyState === "complete") { 
        document.getElementById("animation_body").style.display = "block"; 
        document.getElementById("animation").style.display = "none";

        setTimeout(delay0,500);

        function delay0()
        {

        if (sessionStorage.getItem("goTrack")==1)
        {
          var elmnt1 = document.getElementById("trck_ord");
          elmnt1.scrollIntoView();
          sessionStorage.setItem("goTrack",0);
        }
      
        else if (sessionStorage.getItem("goEmail")==1)
        {
          var elmnt2 = document.getElementById("trck_email");
          elmnt2.scrollIntoView();
          sessionStorage.setItem("goEmail",0);
        } 
      }
    }  
  };
}

function showPage() 
{
  document.getElementById("animation_body").style.display = "block"; 
  document.getElementById("animation").style.display = "none"; 
  sessionStorage.setItem("loadSupport",1);
  setTimeout(delay1,500);
  function delay1()
  {
  if (sessionStorage.getItem("goTrack")==1)
  {
    var elmnt1 = document.getElementById("trck_ord");
    elmnt1.scrollIntoView();
    sessionStorage.setItem("goTrack",0);
  }

  else if (sessionStorage.getItem("goEmail")==1)
  {
    var elmnt2 = document.getElementById("trck_email");
    elmnt2.scrollIntoView();
    sessionStorage.setItem("goEmail",0);
  }
}
}   

/*58968*/
$(document).ready(function()
{
  $('.all_mod').hide(); 
  $('.item-all').hide();
  $('.white_space2').show();
  $('.error11').hide();
  $('.load-animation').hide();
  
});



function check()
{
  //alert(sessionStorage.getItem("orders"));
 
    $(document).ready(function()
{ $('.item-all').hide(); document.getElementById('mod1').style.opacity="1";});

    var a=document.getElementById("num_input").value;
    if (a=="") 
    { 
      document.getElementById('error11').innerHTML="⚠ Input Required";
      $(document).ready(function() {$('#error11').show(); document.getElementById('error11').style.opacity="1";  });
      setTimeout(function() { $(document).ready(function() {$('#error11').hide(); document.getElementById('error11').style.opacity="0";  }); }, 1500);
      return;
    }
    var a1=a+a.length;
    var order_list=sessionStorage.getItem("orders");
    var st="", u_name="", item_num="", quan_num="", size_num="", tot_num="", curr_num="";

    if (order_list==null) 
    { 
        document.getElementById('error11').innerHTML="⚠ No orders placed";
        $(document).ready(function() {$('#error11').show(); document.getElementById('error11').style.opacity="1"; });
      setTimeout(function() { $(document).ready(function() {$('#error11').hide(); document.getElementById('error11').style.opacity="0"; }); }, 1500);
      return;
    }

    if (order_list.includes(a1)==true && a1.length==6)
    {
      document.getElementById('trck_button').disabled = true;
      document.getElementById('trck_button').style.background = "lightgray";
      document.getElementById('trck_button').style.cursor="not-allowed";
  
        $(document).ready(function()
        {  $('.load-animation').show(); document.getElementById('order-load-anim').style.opacity="1"; });

        setTimeout(function() 
        { 
          $(document).ready(function(){
          $('.load-animation').hide(); document.getElementById('order-load-anim').style.opacity="0";  $('.all_mod').show(); $('.white_space2').hide();
        document.getElementById('mod1').style.opacity="1";
     
        });
        }, 1200);

        var start_index=order_list.search(a1);
        for (var c=start_index; c<order_list.length; c++)
        {
            if (order_list.substr(c,1)==" ") { break; }
            st=st+order_list.substr(c,1);
        } 
    }

    else 
    { 
     document.getElementById('error11').innerHTML="⚠ Invalid number";
     $(document).ready(function() {$('#error11').show(); document.getElementById('error11').style.opacity="1"; });
      setTimeout(function() { $(document).ready(function() {$('#error11').hide(); document.getElementById('error11').style.opacity="0";  }); }, 1500);
      return;
    }

    document.getElementById('ord-num').innerHTML=a;
       
        for (var i=0; i<st.length; i++)
        {
            if (i>st.indexOf("_") && i<st.indexOf("/"))
            { u_name=u_name+st.substr(i,1); }9
            if (i>st.indexOf("/") && st.substr(i+1,1)=="(")
            { item_num=item_num+st.substr(i,1); }
            if (i>st.indexOf("/") && st.substr(i-1,1)=="(")
            { quan_num=quan_num+st.substr(i,1); }
            if (i>st.indexOf("/") && st.substr(i+1,1)==")")
            { size_num=size_num+st.substr(i,1); }
            if (i>st.indexOf("#") && i<st.indexOf("!"))
            { tot_num=tot_num+st.substr(i,1); }
            if (i>st.indexOf("!")) { curr_num=curr_num+st.substr(i,1); }
        }

        if (u_name.length!=0) 
        {
          document.getElementById('cust-name').innerHTML=u_name; 
        }


        var test="abcdefghijklmnopqrstuvwxyz0123456789";

        var items_list=["Diamond Print Shirt","Hallsville Shirt","Horseshoe Shirt","Houston Shirt","Ingleside Stretch Shirt","Printed Shirt","Tang Hooded Plaid Shirt","Riviera Shirt","Zip City Shirt","Switch Up Jacket","Charge Jacket","Niles Jacket","Smocked Hem Blouse","Ribbed Knit Sweater","Embelished Cuff Blouse","Open-back Cami Jumpsuit","Self Tie Jumpsuit","Trumpet Sleeve Jumpsuit","Lace Insert Peplum Top","Stripped Smock Top","Lace Yoke Smock Top","Bardot Dress","Polka Dot Jumpsuit","Vertical-stripped Jumpsuit","Mini Mermaid Shirt","Floral Top","Green Floral Top","Embroidered Frock","Pink Sunshine T-shirt","White T-shirt","Lining Shirt","Red Chequered Shirt","Blue Chequered Shirt","Red Underwater Shirt","Blue Underwater Shirt","Plaid Pattern Shirt"];

        var nums_list=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"];

        var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
        var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
        var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];

        if (curr_num=="$") 
        { document.getElementById('delivery-carrier').innerHTML="United States";
        document.getElementById('cust-curr').innerHTML="$";
      }
        else if (curr_num=="£") 
        { document.getElementById('delivery-carrier').innerHTML="United Kingdom"; 
        document.getElementById('cust-curr').innerHTML="£";
      }
        else if (curr_num=="PKR") 
        { document.getElementById('delivery-carrier').innerHTML="Pakistan"; 
        if (tot_num.length==4) 
        {
          var let1=tot_num.substr(0,1);
          tot_num=tot_num.replace(let1,(let1+","));
        }
        else if (tot_num.length==5) 
        {
         var let1=tot_num.substr(1,1);
         tot_num=tot_num.replace(let1,(let1+","));
        }
        else if (tot_num.length==6) 
        {
         var let1=tot_num.substr(2,1);
          tot_num=tot_num.replace(let1,(let1+","));
        }
        else if (tot_num.length==7) 
        {
         var let1=tot_num.substr(0,1);
         var let2=tot_num.substr(3,1);
         tot_num=tot_num.replace(let1,(let1+","));
         tot_num=tot_num.replace(let2,(let2+","));
        }
        document.getElementById('cust-curr').innerHTML="PKR";

      }
      if (tot_num.length!=0) 
        { 
            document.getElementById('cust-total').innerHTML=tot_num;
        }


        $(document).ready(function() { $('.delivery-info').show(); 
        });

        for (var l=0; l<test.length; l++)
        {
            for (var m=0; m<item_num.length; m++)
            {
                if (item_num.substr(m,1)==test.substr(l,1))
                {
                  
                    var l1=l+1;
                    var cont_name="it-"+l1;
                    var it_name="item-name"+l1;
                    var qt_name="item-quant"+l1;
                    var sz_name="item-size"+l1;

                    var cr_name="scurr"+l1, pr_name="sprice"+l1;
                    if (curr_num=="$")
                    { document.getElementById(cr_name).innerHTML="$";
                      document.getElementById(pr_name).innerHTML=price_us1[l];
                    }
                    else if (curr_num=="£")
                    { document.getElementById(cr_name).innerHTML="£";
                      document.getElementById(pr_name).innerHTML=price_uk1[l];
                    }
                    else if (curr_num=="PKR")
                    { document.getElementById(cr_name).innerHTML="PKR"; 
                      document.getElementById(pr_name).innerHTML=price_pk1[l];
                    }

                    var show_item = document.getElementById(cont_name);
                    
                    show_item.classList.add("show1");
                    $(document).ready(function(){ 
                    $(".show1").show(); 
                    show_item.classList.remove("show1"); });

                    document.getElementById(it_name).innerHTML=items_list[l];
                    document.getElementById(qt_name).innerHTML=quan_num.substr(m,1);
                    document.getElementById(sz_name).innerHTML=size_num.substr(m,1);
                    
                }
            }
        }
       

         
}

function close_order_modal()
{
    $(document).ready(function()
{ 
  $(".item-all").removeClass("show1");
  $('.all_mod').hide(); $('.item-all').hide(); $('.white_space2').show();  });
document.getElementById('num_input').value="";
document.getElementById('trck_button').disabled=false;
document.getElementById('trck_button').style.background = "#055";
document.getElementById('trck_button').style.cursor="pointer";
}


$(document).ready(function(){
  $('#bn').click(function(){
   if (document.getElementById('em').value.length<5)
   {
    document.getElementById('bn').innerHTML="Invalid address!";
    document.getElementById('bn').style.background="rgb(247, 119, 119)";
    document.getElementById('bn').style.color="white";
    document.getElementById('em').style.border="2px solid rgb(247, 119, 119)";
    document.getElementById('em').placeholder="";
    setTimeout(fun1,4000)
    function fun1() 
    {
    document.getElementById('bn').innerHTML="Subscribe";
    document.getElementById('bn').style.background="white";
    document.getElementById('bn').style.color="black";
    document.getElementById('em').style.border="2px solid white";
    document.getElementById('em').placeholder="Email Address";
    }
   }
   else
   {
    document.getElementById('bn').innerHTML="Subscribed!";
    document.getElementById('bn').style.background="#5cb85c";
    document.getElementById('bn').style.color="white";
    document.getElementById('em').style.border="2px solid #5cb85c";
    document.getElementById('em').value="";
    setTimeout(fun2,4000)
    function fun2() 
    {
    document.getElementById('bn').innerHTML="Subscribe";
    document.getElementById('bn').style.background="white";
    document.getElementById('bn').style.color="black";
    document.getElementById('em').style.border="2px solid white";
   }
  }
  });
});     


$(document).ready(function(){      
  $('.navbar-toggler').click(function(){
    
    if ($('.navbar-toggler').attr('aria-expanded') === "true")
    { $("body").css("overflowY", "scroll"); 
    $("body").css("visibility", "visible"); $(".to_top").css("visibility", "visible"); }
    else
    { $("body:not(.navbar)").css("overflowY", "hidden");
    $("body:not(.navbar)").css("visibility", "hidden"); $(".navbar").css("visibility", "visible"); $(".top-alert").css("visibility", "visible"); $(".to_top").css("visibility", "hidden");
  }
  });         
});


function reset_nav_styling()
                 { 
                  var cs1=window.matchMedia("(min-width: 992px)");
                  var cs2=window.matchMedia("(max-width: 992px)");
                  
                  $(document).ready(function(){ 
                   $("body").css("visibility", "visible"); 
                   $("body").css("overflowY", "scroll"); 

                   if (cs1.matches)
                   { $(".cart").css("border", "1px solid rgb(204, 204, 204)"); }
                   
                   else if (cs2.matches)
                   { $(".cart").css("border", "3px solid rgb(204, 204, 204)"); }
                  }); }