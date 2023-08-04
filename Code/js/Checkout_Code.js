if (sessionStorage.getItem("loadCheckout")==null )
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
    }  
  };
}

function showPage() 
{
  document.getElementById("animation_body").style.display = "block"; 
  document.getElementById("animation").style.display = "none"; 
  sessionStorage.setItem("loadCheckout",1);
}   



function initialize()
    {
      var string1=sessionStorage.getItem("data");
      var string2=sessionStorage.getItem("quan_data");
      var string3=sessionStorage.getItem("size_data");

      sessionStorage.setItem("data_temp",string1);
      sessionStorage.setItem("quan_data_temp",string2);
      sessionStorage.setItem("size_data_temp",string3);
      
      $(document).ready(function(){
        $('.c_all').hide();
        $('.err-btm').hide();
        $('#lp_error').hide(); 
        $('.h').hide(); 
        $('.chk').hide();
        $('.num_copied').hide(); 
        
      });

      if (sessionStorage.getItem("user")==null)
      {   
        document.getElementById('user_id').innerHTML="";
        document.getElementById('user_id').style.opacity="0";

        $(document).ready(function(){
                $('.out').hide(); 
                $('.ord_h').hide();
                $('.n3').hide(); 
                $('.in').show(); 
                $('.up').show();                
                });
      }

      else 
      {
        var a=sessionStorage.getItem("user");
        document.getElementById('user_id').innerHTML=a;
        document.getElementById('user_id').style.opacity="1";
        $(document).ready(function(){
            $('.out').show();
            $('.ord_h').show(); 
            $('.n3').show(); 
            $('.in').hide(); 
            $('.up').hide(); 
            });
      }


      $(document).ready(function(){
        $('.allf').hide();
        });
        if (sessionStorage.getItem("foot")==null) { document.getElementById('flag-country').innerHTML="UK ▼"; 
        $(document).ready(function(){
        $('.f2').show(); });
        }
        else
        {
            var a=sessionStorage.getItem("foot");
            if (a=="US ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f1').show(); }); }
            else if (a=="UK ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f2').show(); }); }
            else if (a=="EU ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f3').show(); }); }
            document.getElementById('flag-country').innerHTML=a;
        }

        if (sessionStorage.getItem("user")==null)
        {
          $(document).ready(function(){
            $('.c_all').hide();
           
            $('.user_img').show();
            $('.img_cap1').show();

            $('.empty_img').hide();
            $('.img_cap2').hide();
            $('.cart_head1').hide();
            $('.cart_head2').hide();
            
            document.getElementById('user_img').style.opacity="1";
            document.getElementById('img_cap1').style.opacity="1";
            document.getElementById('empty_img').style.opacity="0";
            document.getElementById('img_cap2').style.opacity="0";
            document.getElementById('main-card1').style.background="#015153";
            
          });

        }

        else
        {

          var i=sessionStorage.getItem("user"), j=sessionStorage.getItem("psw"), li=i.length, lj=j.length;
          var st=i+li+"-"+j+lj+"/", dt=sessionStorage.getItem("data"), count=dt.search(st), lst=st.length+count;
          var i_count=0;
          var st1=st, c=0, total_st="", st7=st;

          for (var wa=lst; wa<dt.length; wa++)
            {
              if (dt.substr(wa,1)==" ") { break; }
              i_count++;
            }
         //

         if (i_count==0)
         {
          $(document).ready(function(){
            $('.c_all').hide();
            $('.cart_head1').hide();
            $('.cart_head2').hide();

            $('.user_img').hide();
            $('.img_cap1').hide();
            $('.empty_img').show();
            $('.img_cap2').show();
           
          document.getElementById('user_img').style.opacity="0";
          document.getElementById('img_cap1').style.opacity="0";
          document.getElementById('empty_img').style.opacity="1";
          document.getElementById('img_cap2').style.opacity="1";
          document.getElementById('main-card1').style.background="#015153";         
          });
         }
          
         else 
         {
          $(document).ready(function(){
            $('.cart_head1').show();
            $('.cart_head2').show(); 
          
            $('.user_img').hide();
            $('.img_cap1').hide();
            $('.empty_img').hide();
            $('.img_cap2').hide();
          });
            
          document.getElementById('user_img').style.opacity="0";
          document.getElementById('img_cap1').style.opacity="0";
          document.getElementById('empty_img').style.opacity="0";
          document.getElementById('img_cap2').style.opacity="0";
          document.getElementById('main-card1').style.background="white";
        
          document.getElementById('my-cart-count').innerHTML=i_count;
       
        

       var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="", cr_us="",cr_us="",cr_uk="",cr_pk="";
            
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }
        
       for (var cr=0; cr<curr_string.length; cr++)
       {
         if (curr_string.substr(cr,1)==" ") { break; }
         if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) { cr_us=cr_us+curr_string.substr(cr,1); }
         if ((cr>curr_string.indexOf("$)")+1) && (cr<curr_string.indexOf("(£")))
         { cr_uk=cr_uk+curr_string.substr(cr,1); }
         if ((cr>curr_string.indexOf("£)")+1) && (cr<curr_string.indexOf("(PKR")))
         { cr_pk=cr_pk+curr_string.substr(cr,1); }       
       }
    
       //var b_ins=document.getElementById('btn1-inside').innerHTML;
          document.getElementById('my-cart-curr').innerHTML="$";
          document.getElementById('my-cart-curr1').innerHTML="$";
          document.getElementById('my-cart-total').innerHTML=cr_us;
          document.getElementById('my-cart-total1').innerHTML=cr_us;
       

       /*else if (b_ins=="United Kingdom (£)")
       {
          document.getElementById('my-cart-curr').innerHTML="£";
          document.getElementById('my-cart-total').innerHTML=cr_uk;
       }

       else if (b_ins=="Pakistan (PKR)")
       {
          document.getElementById('my-cart-curr').innerHTML="PKR";
          document.getElementById('my-cart-total').innerHTML=cr_pk;
       }*/
        
     var test="abcdefghijklmnopqrstuvwxyz0123456789";

     for (var q=lst; q<dt.length; q++)
     {
        if (dt.substr(q,1)==" " || dt.substr(q,1)=="*") { break; }
        for (var y=0; y<test.length; y++)
        {
            if (test.substr(y,1)==dt.substr(q,1))
            {
              var q_t=sessionStorage.getItem("quan_data"), s_t= sessionStorage.getItem("size_data");
              var ind1=dt.search(st7);
              var ind2=(ind1+st7.length)-1;
              var ind3=q-ind2;

              var q_ind1=q_t.search(st7);
              var q_ind2=(q_ind1+st7.length)-1;
              var q_ind3=q_ind2+ind3; /* FINAL */

              var size_show="s_"+dt.substr(q,1), quan_show="q_"+dt.substr(q,1);
              document.getElementById(size_show).innerHTML=s_t.substr(q_ind3,1);
              document.getElementById(quan_show).innerHTML=q_t.substr(q_ind3,1);

              var ck="i"+dt.substr(q,1), element1 = document.getElementById(ck);
             element1.classList.add("view");

             $(document).ready(function(){
               $(".view").show(); 
               element1.classList.remove("view"); });
            }
        }  
     }
          
        }

        }


        
    } // INITIALIZE FUNCTION ENDS HERE

    $(document).ready(function(){
    $('.order-display').hide();
    });

    function ini()
    {
      $(document).ready(function(){
        $('.allf').hide();
        });
        if (sessionStorage.getItem("foot")==null) { document.getElementById('flag-country').innerHTML="UK ▼"; 
        $(document).ready(function(){
        $('.f2').show(); });
        }
        else
        {
            var a=sessionStorage.getItem("foot");
            if (a=="US ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f1').show(); }); }
            else if (a=="UK ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f2').show(); }); }
            else if (a=="EU ▼") { $(document).ready(function(){ $('.allf').hide(); $('.f3').show(); }); }
            document.getElementById('flag-country').innerHTML=a;
        }
    }

    function logout() 
        {   
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("psw");
            $(document).ready(function(){
                $('.out').hide(); 
                $('.n3').hide(); 
                $('.in').show(); 
                $('.up').show(); 
                $('.c_all').hide();
                $('.chk').hide(); 
                $('.h').hide();
                $('.count').hide();
                $('.user_img').show();
            $('.img_cap1').show();

            $('.empty_img').hide();
            $('.img_cap2').hide();
            $('.cart_head1').hide();
            $('.cart_head2').hide();
                });

            
            document.getElementById('user_img').style.opacity="1";
            document.getElementById('img_cap1').style.opacity="1";
            document.getElementById('empty_img').style.opacity="0";
            document.getElementById('img_cap2').style.opacity="0";
            document.getElementById('main-card1').style.background="#015153";
          
                document.getElementById('user_id').style.opacity="0";
                
                document.getElementById('my-cart-count').innerHTML="0";
                document.getElementById('my-cart-total').innerHTML="0";
        }



    /* FOOTER FUNCTIONALITY */

    $(document).ready(function(){

      $('.o1').click(function(){
          document.getElementById('flag-country').innerHTML="US ▼";
          sessionStorage.setItem("foot","US ▼");
          ini();
           });
     $('.o2').click(function(){
          document.getElementById('flag-country').innerHTML="UK ▼";
          sessionStorage.setItem("foot","UK ▼");
          ini();
           });
     $('.o3').click(function(){
          document.getElementById('flag-country').innerHTML="EU ▼";
          sessionStorage.setItem("foot","EU ▼");
         ini();
           });          
     });

     $(document).ready(function(){
      $('.cont').hover(function(){
      var d1=window.matchMedia("(min-width: 990px)");
      var d2=window.matchMedia("(min-width: 550px) and (max-width: 990px");
      var d3=window.matchMedia("(min-width: 0px) and (max-width: 550px");
      if (d1.matches)
      {
      document.getElementById('em').style.marginLeft="11.5vw";
      document.getElementById('em').style.transition="1.5s";
      document.getElementById('bn').style.marginLeft="-12.5vw";
      document.getElementById('bn').style.transition="1.5s";
      }
      else if (d2.matches)
      {
      document.getElementById('em').style.marginLeft="11.5vw";
      document.getElementById('em').style.transition="1.2s";
      document.getElementById('bn').style.marginLeft="-14.5vw";
      document.getElementById('bn').style.transition="1.2s";
      }
      else if (d3.matches)
      {
      document.getElementById('em').style.marginLeft="18vw";
      document.getElementById('em').style.transition="1s";
      document.getElementById('bn').style.marginLeft="-16.5vw";
      document.getElementById('bn').style.transition="1s";
      }
      });

      $('.cont').mouseleave(function(){
      var d4=window.matchMedia("(min-width: 990px)");
      var d5=window.matchMedia("(min-width: 550px) and (max-width: 990px");
      var d6=window.matchMedia("(min-width: 0px) and (max-width: 550px");
      if (d4.matches)
      {   
      document.getElementById('em').style.marginLeft="0vw";
      document.getElementById('em').style.transition="1.5s";
      document.getElementById('bn').style.marginLeft="0vw";
      document.getElementById('bn').style.transition="1.5s";
      }
      else if (d5.matches)
      {
      document.getElementById('em').style.marginLeft="0vw";
      document.getElementById('em').style.transition="1.2s";
      document.getElementById('bn').style.marginLeft="0vw";
      document.getElementById('bn').style.transition="1.2s"; 
      }
      else if (d6.matches)
      {
      document.getElementById('em').style.marginLeft="0vw";
      document.getElementById('em').style.transition="1s";
      document.getElementById('bn').style.marginLeft="0vw";
      document.getElementById('bn').style.transition="1s"; 
      }
      });

  });
    
        $(document).ready(function(){
              $('.panel2').hide();
              $('.error_1').hide();
              $('.error_2').hide();
              //$('.panel1').hide();
             $('.panel3').hide();
            $('.prev2').hide();
            $('.prev1').hide();
            $('.next2').hide();
            $('.error_3').hide();
            $('.err-btm').hide();
     
            
            
            $('.next1').click(function(){   // NEXT 1
                
              var i67=sessionStorage.getItem("user");

              if (i67!=null) 
             {
                  if(parseInt(document.getElementById('my-cart-count').innerHTML)>0)
               { 
                
                if (document.getElementById('btn1-inside').innerHTML!="Select Region")
               { 
                $(document).ready(function(){
                  $('.panel1').hide();
                   });
                
                         
               document.getElementById('bar').style.transition="1s"; 
               document.getElementById('bar').style.width="33%";

               document.getElementById('panel-1a').style.opacity="0";
               document.getElementById('panel-1b').style.opacity="0";
               document.getElementById('panel-1c').style.opacity="0";
               document.getElementById('panel-1d').style.opacity="0";

               document.getElementById('panel-3a').style.opacity="0";
               document.getElementById('panel-3b').style.opacity="0";
               document.getElementById('panel-3c').style.opacity="0";
               document.getElementById('panel-3d').style.opacity="0";
               document.getElementById('panel-3e').style.opacity="0";

               document.getElementById('panel-2a').style.opacity="1";
               document.getElementById('panel-2b').style.opacity="1";
               document.getElementById('panel-2c').style.opacity="1";
               document.getElementById('panel-2d').style.opacity="1";
               

                $('.panel2').show();
                $('.prev1').show();
                $('.next2').show();
                $('.next1').hide(); 
                //$('.err-btm').hide();
               }
               else
               {
                 $(document).ready(function(){
                 $('.err-btm').show(); });
                 document.getElementById('err-btm').style.opacity="1";
               }
              }
             }
                         
            });
            
          
             $('.prev1').click(function(){   // PREV 1

              $(document).ready(function(){
                $('.err-btm').hide(); });
                document.getElementById('err-btm').style.opacity="0";

              document.getElementById('bar').style.transition="1s"; 
               document.getElementById('bar').style.width="0%";
               document.getElementById('bar').style.borderBottomLeftRadius="20px";
               document.getElementById('bar').style.borderTopLeftRadius="20px";

               document.getElementById('panel-1a').style.opacity="1";
               document.getElementById('panel-1b').style.opacity="1";
               document.getElementById('panel-1c').style.opacity="1";
               document.getElementById('panel-1d').style.opacity="1";

               document.getElementById('panel-3a').style.opacity="0";
               document.getElementById('panel-3b').style.opacity="0";
               document.getElementById('panel-3c').style.opacity="0";
               document.getElementById('panel-3d').style.opacity="0";
               document.getElementById('panel-3e').style.opacity="0";

               document.getElementById('panel-2a').style.opacity="0";
               document.getElementById('panel-2b').style.opacity="0";
               document.getElementById('panel-2c').style.opacity="0";
               document.getElementById('panel-2d').style.opacity="0";

                $('.panel1').show();
                $('.panel2').hide();
                $('.next2').hide();
                 $('.next1').show();
                $('.prev1').hide();
                $('.error_3').hide();
               
            });
            
            $('.next2').click(function(){  // NEXT 2

              $(document).ready(function(){
                $('.err-btm').hide(); });
                document.getElementById('err-btm').style.opacity="0";

              var i68=sessionStorage.getItem("user");
              if (i68!=null) 
         {
          if(parseInt(document.getElementById('my-cart-count').innerHTML)>0)
          {
            document.getElementById('bar').style.transition="1s"; 
               document.getElementById('bar').style.width="66%";

               document.getElementById('panel-1a').style.opacity="0";
               document.getElementById('panel-1b').style.opacity="0";
               document.getElementById('panel-1c').style.opacity="0";
               document.getElementById('panel-1d').style.opacity="0";

               document.getElementById('panel-3a').style.opacity="1";
               document.getElementById('panel-3b').style.opacity="1";
               document.getElementById('panel-3c').style.opacity="1";
               document.getElementById('panel-3d').style.opacity="1";
               document.getElementById('panel-3e').style.opacity="1";

               document.getElementById('panel-2a').style.opacity="0";
               document.getElementById('panel-2b').style.opacity="0";
               document.getElementById('panel-2c').style.opacity="0";
               document.getElementById('panel-2d').style.opacity="0";
               
                $('.panel1').hide();
                $('.panel2').hide();
                $('.panel3').show();
                $('.prev1').hide();
                $('.next2').hide();
                $('.next1').hide();
                $('.prev2').show();
                $('.error_3').hide();
          }
         }

    });
            
            $('.prev2').click(function(){   // PREV 2

              $(document).ready(function(){
                $('.err-btm').hide(); });
                document.getElementById('err-btm').style.opacity="0";
                
              document.getElementById('bar').style.transition="1s"; 
               document.getElementById('bar').style.width="33%";

               document.getElementById('panel-1a').style.opacity="0";
               document.getElementById('panel-1b').style.opacity="0";
               document.getElementById('panel-1c').style.opacity="0";
               document.getElementById('panel-1d').style.opacity="0";

               document.getElementById('panel-3a').style.opacity="0";
               document.getElementById('panel-3b').style.opacity="0";
               document.getElementById('panel-3c').style.opacity="0";
               document.getElementById('panel-3d').style.opacity="0";
               document.getElementById('panel-3e').style.opacity="0";

               document.getElementById('panel-2a').style.opacity="1";
               document.getElementById('panel-2b').style.opacity="1";
               document.getElementById('panel-2c').style.opacity="1";
               document.getElementById('panel-2d').style.opacity="1";

                $('.panel2').show();
                $('.panel1').hide();
                $('.panel3').hide();
                $('.next2').show();
                 $('.next1').hide();
                $('.prev2').hide();
                $('.prev1').show();
                $('.error_3').hide();
               
            });
            
                  
        });

      
        function  sign_in_func()
        {
          var a=window.location.href;
          sessionStorage.setItem("page",a);
          window.location.href="Sign_In.html";
        }

        function  sign_out_func()
        {
          var b=window.location.href;
          sessionStorage.setItem("page",b);
          window.location.href="Sign_Up.html";
        }

        function delete1(a1,m,num1,index)
    {  

      var price_us=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
        var price_uk=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
        var price_pk=["3500","5000 ","7490","8660","9160","9990","10820","11660","11820","12490","12490","12820","3500","5330","5830","7490","8330","9160","9490","10490","12820","16650","19980","21810","9820","3160","9160","7160","5000","3500","18480","14820","10820","16650","19980","12820"];

    var qty_in="q_"+num1;
    var qty=document.getElementById(qty_in).innerHTML;

    var i_a=sessionStorage.getItem("user"), j_a=sessionStorage.getItem("psw");
    var p_us=price_us[index-1], p_uk=price_uk[index-1], p_pk=price_pk[index-1];
    var curr_dt=sessionStorage.getItem("curr_data"); 
    var old_cr_us="", old_cr_uk="", old_cr_pk="";

    var user_string=i_a+i_a.length+"-"+j_a+j_a.length+"/", first_indx=curr_dt.search(user_string);
    var curr_string="";

    for (var g=first_indx; g<curr_dt.length; g++)
    {
      if (curr_dt.substr(g,1)==" ") { break; }
      curr_string=curr_string+curr_dt.substr(g,1);
    }

      for (var cr=0; cr<curr_string.length; cr++)
      {
        if (curr_string.substr(cr,1)==" ") { break; }
        if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) { old_cr_us=old_cr_us+curr_string.substr(cr,1); }
        if ((cr>curr_string.indexOf("$)")+1) && (cr<curr_string.indexOf("(£")))
        { old_cr_uk=old_cr_uk+curr_string.substr(cr,1); }
        if ((cr>curr_string.indexOf("£)")+1) && (cr<curr_string.indexOf("(PKR")))
        { old_cr_pk=old_cr_pk+curr_string.substr(cr,1); }       
      }
      var old_cr_us1=parseFloat(old_cr_us), old_cr_uk1=parseFloat(old_cr_uk), old_cr_pk1=parseInt(old_cr_pk);
  
    var new_cr_us=old_cr_us1-(p_us*qty);
    var new_cr_uk=old_cr_uk1-(p_uk*qty);
    var new_cr_pk=old_cr_pk1-(p_pk*qty);
    new_cr_us=new_cr_us.toFixed(2);
    new_cr_uk=new_cr_uk.toFixed(2);

    var curr_string2=user_string+new_cr_us+"($)"+new_cr_uk+"(£)"+new_cr_pk+"(PKR)";
    curr_dt=curr_dt.replace(curr_string,curr_string2);

    var curr_check=document.getElementById('my-cart-curr').innerHTML;

      if (curr_check=="$") 
      { document.getElementById('my-cart-total').innerHTML=new_cr_us; document.getElementById('my-cart-total1').innerHTML=new_cr_us; }
      else if (curr_check=="£") 
      { document.getElementById('my-cart-total').innerHTML=new_cr_uk; document.getElementById('my-cart-total1').innerHTML=new_cr_uk; }
      else if (curr_check=="PKR") 
      { 
        if (cr_pk.length==4) 
        {
          var let1=cr_pk.substr(0,1), cr_pk1=cr_pk;
          cr_pk1=cr_pk1.replace(let1,(let1+","));
        }
        else if (cr_pk.length==5) 
        {
          var let1=cr_pk.substr(1,1), cr_pk1=cr_pk;
          cr_pk1=cr_pk1.replace(let1,(let1+","));
        }
        else if (cr_pk.length==6) 
        {
          var let1=cr_pk.substr(2,1), cr_pk1=cr_pk;
          cr_pk1=cr_pk1.replace(let1,(let1+","));
        }
        document.getElementById('my-cart-total').innerHTML=new_cr_pk1; document.getElementById('my-cart-total1').innerHTML=new_cr_pk1; }
    
    var element = document.getElementById(a1);
    element.classList.add("remove1");

    $(document).ready(function(){
         $(".remove1").hide(); 
         element.classList.remove("remove1"); 
        });

    var i=sessionStorage.getItem("user"), j=sessionStorage.getItem("psw"), li=i.length, lj=j.length;
     var st=i+li+"-"+j+lj+"/", dt=sessionStorage.getItem("data_temp"), st1=st, count=dt.search(st), lst=st.length+count, nums_only="", st0=st;
     var quan_st=sessionStorage.getItem("quan_data_temp");
     var size_st=sessionStorage.getItem("size_data_temp");
     var rmv_index=z5-(lst-1); 
     var user_st=i+li+"-"+j+lj+"/", user_qt1=user_st, user_sz1=user_st;
     var start_index=quan_st.search(user_st);
     var last_index=(start_index+(user_st.length))-1;
     var final_index=last_index+rmv_index; /* FINAL */
     var org_q="", org_s="";

     for (var w=start_index; w<quan_st.length; w++)
     {
        if (quan_st.substr(w,1)==" ") { break; }
        org_q=org_q+quan_st.substr(w,1);
        org_s=org_s+size_st.substr(w,1);
     }

     var z5=0;
     for (var f=st.length+dt.search(st); f<dt.length; f++)
     {
        if (dt.substr(f,1)==" ") { break; }
        if (dt.substr(f,1)==num1) { z5=f; break; }
     }

     var z7=z5-(st.length+dt.search(st));

     for (var k=st.length+dt.search(st); k<st.length+dt.search(st)+36; k++)
     {
         if (dt.substr(k,1)==" ") { break; }
         if (k==z5) { st0=st0+dt.substr(k,1); continue; }
         st1=st1+dt.substr(k,1);
         st0=st0+dt.substr(k,1);
     }
     dt=dt.replace(st0,st1);
     sessionStorage.setItem("data_temp",dt);

     var num_qt_a="", num_sz_a="";

     for (var v=quan_st.search(user_st); v<quan_st.length; v++)
     {
        if (quan_st.substr(v,1)==" ") { break; }
        if ( (v-(quan_st.search(user_st)+user_st.length))==z7 ) { continue; }
        num_qt_a=num_qt_a+quan_st.substr(v,1);
        num_sz_a=num_sz_a+size_st.substr(v,1);
     }

     quan_st=quan_st.replace(org_q,num_qt_a);
     size_st=size_st.replace(org_s,num_sz_a);

     sessionStorage.setItem("quan_data_temp",quan_st);
     sessionStorage.setItem("size_data_temp",size_st);

     var i_count=0;
for (var wa=lst; wa<dt.length; wa++)
{
  if (dt.substr(wa,1)==" ") { break; }
  i_count++;
}
document.getElementById('my-cart-count').innerHTML=i_count;
if (i_count==0)
{
  $(document).ready(function(){
            $('.cart_head1').hide();
            $('.cart_head2').hide();

            $('.user_img').hide();
            $('.img_cap1').hide();
            $('.empty_img').show();
            $('.img_cap2').show(); });
           
          document.getElementById('user_img').style.opacity="0";
          document.getElementById('img_cap1').style.opacity="0";
          document.getElementById('empty_img').style.opacity="1";
          document.getElementById('img_cap2').style.opacity="1";
          document.getElementById('main-card1').style.background="#015153";
}

    }
        

    function place()
{
  if (parseInt(document.getElementById('my-cart-count').innerHTML)>0)
{
   document.getElementById('bar-cont').style.borderRadius="20px"; 
   document.getElementById('bar').style.borderRadius="20px"; 
    document.getElementById('bar').style.transition="1s"; 
    document.getElementById('bar').style.width="100%";      
    setTimeout(execute1,1500);

    function execute1()
    {
    var data1=sessionStorage.getItem("data_temp"), details="", name1=sessionStorage.getItem("user"), psw1=sessionStorage.getItem("psw");
    var b= Math.floor(Math.random() * 89999) + 10000;
    var base=name1+name1.length+"-"+psw1+psw1.length+"/", reset=base, original_st="";
    var i_start=data1.search(base),user_string=base;
    var i_firstnum=i_start+base.length;

    var qty1=sessionStorage.getItem("quan_data_temp"), sz1=sessionStorage.getItem("size_data_temp");
    var i_start1=qty1.search(base);
    var i_firstnum1=i_start1+base.length;
    var order_num=b, item_str="", tot_str="", q_str="", s_str="";

    var data_original=sessionStorage.getItem("data");
    var quantity_original=sessionStorage.getItem("quan_data");
    var size_original=sessionStorage.getItem("size_data");

    for (var d=i_start; d<data_original.length; d++)
    {
        if (data_original.substr(d,1)==" ") { break; }
        original_st=original_st+data_original.substr(d,1);
    }

    for (j=i_firstnum1; j<qty1.length; j++)
    {
        if (qty1.substr(i,1)==" ") { break; }
        q_str=q_str+qty1.substr(j,1);
        s_str=s_str+sz1.substr(j,1);
    }
    
    var original_qt="", original_sz="";
    for (x=i_start1; x<quantity_original.length; x++)
    {
        if (qty1.substr(x,1)==" ") { break; }
        original_qt=original_qt+quantity_original.substr(x,1);
        original_sz=original_sz+size_original.substr(x,1);
    }
    
    for (var i=i_firstnum; i<data1.length; i++)
    {
        if (data1.substr(i,1)==" ") { break; }
        item_str=item_str+data1.substr(i,1); 
    }


      var curr_dt=sessionStorage.getItem("curr_data"),first_indx=curr_dt.search(user_string);
      var curr_string="", cr_us="",cr_us="",cr_uk="",cr_pk="";
            
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }
        
       for (var cr=0; cr<curr_string.length; cr++)
       {
         if (curr_string.substr(cr,1)==" ") { break; }
         if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) { cr_us=cr_us+curr_string.substr(cr,1); }
         if ((cr>curr_string.indexOf("$)")+1) && (cr<curr_string.indexOf("(£")))
         { cr_uk=cr_uk+curr_string.substr(cr,1); }
         if ((cr>curr_string.indexOf("£)")+1) && (cr<curr_string.indexOf("(PKR")))
         { cr_pk=cr_pk+curr_string.substr(cr,1); }       
       }

       var curr_state=document.getElementById('my-cart-curr').innerHTML;

       if(curr_state=="$") { tot_str=cr_us+"!$"; }
       else if(curr_state=="£") { tot_str=cr_uk+"!£"; }
       else if(curr_state=="PKR") { tot_str=cr_pk+"!PKR"; }

        /* Currency Data Reset */

       curr_dt=curr_dt.replace(curr_string,user_string);
       sessionStorage.setItem("curr_data",curr_dt);

        /* Currency Data Reset */

    var item_final="";

    for (var s=0; s<item_str.length; s++)
    {
        item_final=item_final+item_str.substr(s,1)+"("+q_str.substr(s,1)+s_str.substr(s,1)+")";
    }

    item_final=item_final+"#"+tot_str;
    var semi_final=name1+"/"+item_final;

    var ord1="", ord2="", ord_check=0;

    if (sessionStorage.getItem("orders")==null)
    {
        var a= (Math.floor(Math.random() * 89999) + 10000);
        var num_st="", a1=a;
        while (a1!=0)
        {
            num_st=a1%10+num_st;
            a1=Math.trunc( a1/10 );
        }
        var final=num_st+num_st.length+"_"+semi_final;
        //view_number(num_st);
        ord1=num_st;
        ord_check=1;
        /*$(document).ready(function(){
          $('.order-display').show(); });
          document.getElementById('order-number').innerHTML=num_st;*/
          var ord_num=name1+"/"+num_st;
        sessionStorage.setItem("order_nums",ord_num);
        sessionStorage.setItem("orders",final);
    }

    else
    {
        var c=sessionStorage.getItem("orders");
        while (c.includes(b)==true) { b= Math.floor(Math.random() * 89999) + 10000; }
        var num_st1="", b1=b;
        while (b1!=0)
        {
            num_st1=b1%10+num_st1;
            b1=Math.trunc( b1/10 );
        }
        var final1=num_st1+num_st1.length+"_"+semi_final;
        var getOrders=sessionStorage.getItem("orders");
        getOrders=getOrders+" "+final1;
        sessionStorage.setItem("orders",getOrders);

        var get_nums=sessionStorage.getItem("order_nums");
        if (get_nums.includes(name1)==true)
        {
           var prv_indx=get_nums.search(name1), ord_str="";
           for (var indx1=prv_indx; indx1<get_nums.length; indx1++)
           {
              if (get_nums.substr(indx1,1)==" ") { break; }
              ord_str=ord_str+get_nums.substr(indx1,1);
           }
           var ord_str1=ord_str+num_st1;
           get_nums=get_nums.replace(ord_str,ord_str1);
           sessionStorage.setItem("order_nums",get_nums);
        }

        else
        {
          get_nums=get_nums+" "+name1+"/"+num_st1;
          sessionStorage.setItem("order_nums",get_nums);
        }
        
       
        ord2=num_st1;
        ord_check=2;
        /*$(document).ready(function(){
          $('.order-display').show(); });
          document.getElementById('order-number').innerHTML=num_st1;*/
    }

var rep=data_original.replace(original_st,reset);
var rep2=quantity_original.replace(original_qt,reset);
var rep3=size_original.replace(original_sz,reset);
sessionStorage.setItem("quan_data",rep2);
sessionStorage.setItem("size_data",rep3);
sessionStorage.setItem("data",rep);


var last_name1=sessionStorage.getItem("user");
sessionStorage.setItem("last_name",last_name1);

//sessionStorage.removeItem("user");
//sessionStorage.removeItem("psw");
sessionStorage.removeItem("all_details");
sessionStorage.removeItem("tot");
sessionStorage.removeItem("data_temp");
sessionStorage.removeItem("quan_data_temp");
sessionStorage.removeItem("size_data_temp");

if (ord_check==1)
{
  view_number(ord1);
}

else if (ord_check==2)
{
  view_number(ord2);
}
}
}

else
{
  document.getElementById('error55').style.color="red";
              document.getElementById('error55').style.opacity="0.5";
              setTimeout(anim1, 500);
}

}
  
function close_order()
{
  $(document).ready(function(){
  $('.order-display').hide(); });
  window.location.href="Last.html";
}

function view_number(o_num)
{
  $(document).ready(function(){
  $('.order-display').show(); });
  document.getElementById('order-number').innerHTML=o_num;
  document.getElementById('order-display').style.opacity="1";
  document.getElementById('order-display').style.transition="0.7s";
  document.getElementById('body').style.overflowY="hidden";

  document.getElementById('ovr').style.height="200vh";
  document.getElementById('ovr').style.width="100%";
  document.getElementById('ovr').style.opacity="0.5";
  document.getElementById('ovr').style.zIndex="700";
  document.getElementById('ovr').style.background="black";
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



function addHyphen (element) {
  let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1,4}/g).join('-');
    document.getElementById(element.id).value = finalVal;
}



function anim1()
{
  $(document).ready(function(){
  $('.err-btm').hide(); });   
}

function reset_nav_styling()
                 { 
                  var cs1=window.matchMedia("(min-width: 992px)");
                  var cs2=window.matchMedia("(max-width: 992px)");
                  
                  $(document).ready(function(){ 
                   $("body").css("visibility", "visible"); 
                   $("body").css("overflowY", "scroll"); 
                   var d0=window.matchMedia("(min-width: 992px)");
                   if (d0.matches) { $(".btn-ic1").show(); }

                   if (cs1.matches)
                   { $(".cart").css("border", "1px solid rgb(204, 204, 204)"); }
                   
                   else if (cs2.matches)
                   { $(".cart").css("border", "3px solid rgb(204, 204, 204)"); }
                  }); }



                 