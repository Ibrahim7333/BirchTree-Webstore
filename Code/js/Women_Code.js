
function initialize()
    {
      
      $(document).ready(function(){
        
        $('.all').hide();
        $('#lp_error').hide(); 
        $('.h').hide(); 
        $('.chk').hide(); 
        //$('.f_alert').hide();
        $('.error5').hide(); 
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
        var xc5=window.matchMedia("(min-width: 992px)");
        if (xc5.matches)
        {
          document.getElementById('user-cont').style.marginRight="4.5vw";
          document.getElementById('fl-cont').style.marginRight="10vw";
        }
        var a=sessionStorage.getItem("user");
        document.getElementById('user_id').innerHTML=a;
        document.getElementById('user_id').style.opacity="1";
        document.getElementById('count').style.display="inline";
        $(document).ready(function(){
            $('.out').show(); 
            $('.ord_h').show();
            $('.n3').show(); 
            $('.in').hide(); 
            $('.up').hide(); 
            });
      }

      //alert(sessionStorage.getItem("curr_data"));
      var price_us=["21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","100.00","154.00"]; 
      var price_uk=["16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","77.00","118.60"];
      var price_pk=["3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","16,650","25,640"];   

      var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"];

        var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];

        var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];

        

      if (sessionStorage.getItem("fl")==null)   // US 
      {    
        
        $(document).ready(function(){
        $('.pf3').show(); }); 

        document.getElementById("cart_curr").innerHTML="$";

        if (sessionStorage.getItem("user")!=null)
       { 

        var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_us="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) 
            { cr_us=cr_us+curr_string.substr(cr,1); }    
         } 
         document.getElementById('total').innerHTML=cr_us;
        }
      }

        for (var h=1; h<37; h++)
       {
         var n_c_id="pr_curr"+h;
         var n_p_id="pr_price"+h;
         document.getElementById(n_c_id).innerHTML="$";
         document.getElementById(n_p_id).innerHTML=price_us1[h-1];
       }
        
        document.getElementById('flag').src='Navbar_Images/us.png';
        sessionStorage.setItem("fl",1);
        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
        document.getElementById(cur_id).innerHTML="$"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_us[j-1];
            }

            document.getElementById('c_val1').innerHTML="50";
            document.getElementById('c_val2').innerHTML="50";
            document.getElementById('c_val3').innerHTML="100";
            document.getElementById('c_val4').innerHTML="100";

            document.getElementById('f_currency1').innerHTML="$ ";
            document.getElementById('f_currency2').innerHTML="$ ";
            document.getElementById('f_currency3').innerHTML="$ ";      
            document.getElementById('f_currency4').innerHTML="$ ";
            document.getElementById('f_currency5').innerHTML="$ ";
            
      }
      else if (sessionStorage.getItem("fl")==1) 
      { 
        $(document).ready(function(){
          $('.pf3').show(); });
          document.getElementById("cart_curr").innerHTML="$";
          

          if (sessionStorage.getItem("user")!=null)
          { 
            
          var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_us="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) 
            { cr_us=cr_us+curr_string.substr(cr,1); }    
         } 
         document.getElementById('total').innerHTML=cr_us;
        }
      }

          for (var h=1; h<37; h++)
          {
            var n_c_id="pr_curr"+h;
            var n_p_id="pr_price"+h;
            document.getElementById(n_c_id).innerHTML="$";
            document.getElementById(n_p_id).innerHTML=price_us1[h-1];
          }

        document.getElementById('flag').src='Navbar_Images/us.png'; 
        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
        document.getElementById(cur_id).innerHTML="$"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_us[j-1];
            }  
            document.getElementById('f_currency1').innerHTML="$ ";
            document.getElementById('f_currency2').innerHTML="$ ";
            document.getElementById('f_currency3').innerHTML="$ ";      
            document.getElementById('f_currency4').innerHTML="$ ";
            document.getElementById('f_currency5').innerHTML="$ ";
             
      }
      else if (sessionStorage.getItem("fl")==2) 
      { 
        $(document).ready(function(){
          $('.pf3').show(); });

          if (sessionStorage.getItem("user")!=null)
          { 
          document.getElementById("cart_curr").innerHTML="£";
          var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_uk="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>(curr_string.indexOf("$)")+1) && cr<curr_string.indexOf("(£")) 
            { cr_uk=cr_uk+curr_string.substr(cr,1); }    
         } 
         document.getElementById('total').innerHTML=cr_uk;
        }

      }
          for (var h=1; h<37; h++)
          {
            var n_c_id="pr_curr"+h;
            var n_p_id="pr_price"+h;
            document.getElementById(n_c_id).innerHTML="£";
            document.getElementById(n_p_id).innerHTML=price_uk1[h-1];
          }


        document.getElementById('flag').src='Navbar_Images/uk.png'; 

        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
        document.getElementById(cur_id).innerHTML="£"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_uk[j-1];
            }

            document.getElementById('c_val1').innerHTML="50";
            document.getElementById('c_val2').innerHTML="50";
            document.getElementById('c_val3').innerHTML="100";
            document.getElementById('c_val4').innerHTML="100";

            document.getElementById('f_currency1').innerHTML="£ ";
            document.getElementById('f_currency2').innerHTML="£ ";
            document.getElementById('f_currency3').innerHTML="£ ";      
            document.getElementById('f_currency4').innerHTML="£ ";
            document.getElementById('f_currency5').innerHTML="£ ";
          
      }
      else if (sessionStorage.getItem("fl")==3) 
      { 
        $(document).ready(function(){
          $('.pf3').show(); });

          if (sessionStorage.getItem("user")!=null)
          { 

          document.getElementById("cart_curr").innerHTML="PKR";
          var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_pk="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>(curr_string.indexOf("£)")+1) && cr<curr_string.indexOf("(PKR")) 
            { cr_pk=cr_pk+curr_string.substr(cr,1); }    
         } 
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
         document.getElementById('total').innerHTML=cr_pk1;
        }
      }

          for (var h=1; h<37; h++)
          {
            var n_c_id="pr_curr"+h;
            var n_p_id="pr_price"+h;
            document.getElementById(n_c_id).innerHTML="PKR";
            document.getElementById(n_p_id).innerHTML=price_pk1[h-1];
          }

        document.getElementById('flag').src='Navbar_Images/eu.png'; 

        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
        document.getElementById(cur_id).innerHTML="PKR"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_pk[j-1];
            }

            document.getElementById('c_val1').innerHTML="5,000";
            document.getElementById('c_val2').innerHTML="5,000";
            document.getElementById('c_val3').innerHTML="10,000";
            document.getElementById('c_val4').innerHTML="10,000";

            document.getElementById('f_currency1').innerHTML="PKR ";
            document.getElementById('f_currency2').innerHTML="PKR ";
            document.getElementById('f_currency3').innerHTML="PKR ";      
            document.getElementById('f_currency4').innerHTML="PKR ";
            document.getElementById('f_currency5').innerHTML="PKR ";
          
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
            $('.all').hide();
            $('.chk').hide(); 
            $('.h').hide();
            $('.count').hide();
            $('.error5').show();
            document.getElementById('error5').innerHTML="Sign in to view your cart";
            document.getElementById('cart').style.overflowY="hidden";
            document.getElementById('cart').style.background="transparent";
            document.getElementById('cart').style.border="none";
            
          });

        }

        else
        {
          var i=sessionStorage.getItem("user"), j=sessionStorage.getItem("psw"), li=i.length, lj=j.length;
          var st=i+li+"-"+j+lj+"/", dt=sessionStorage.getItem("data"), count=dt.search(st), lst=st.length+count;
          var i_count=0;

          for (var wa=lst; wa<dt.length; wa++)
            {
              if (dt.substr(wa,1)==" ") { break; }
              i_count++;
            }
         //

         if (i_count==0)
         {
          $(document).ready(function(){
            $('.all').hide();
            $('.chk').hide(); 
            $('.h').hide();
            //$('.count').hide();
            $('.error5').show();
            document.getElementById('error5').innerHTML="No items added to cart";
            document.getElementById('cart').style.overflowY="hidden";
            document.getElementById('cart').style.background="transparent";
            document.getElementById('cart').style.border="none";
            //sessionStorage.setItem("tot",0);
          });
         }
          
         else 
         {
          document.getElementById('item-counter').innerHTML=i_count;
          document.getElementById('count').innerHTML=i_count;
          $(document).ready(function(){
            $('.h').show(); 
            $('.chk').show();
            $('.count').show();
            $('.error5').hide(); 
            document.getElementById('cart').style.overflowY="scroll";
            document.getElementById('cart').style.background="white";
            document.getElementById('cart').style.background="white";
           

           var c1=window.matchMedia("(min-width: 992px)");

            if (c1.matches)
            {
            document.getElementById('cart').style.borderBottom="none";
            document.getElementById('cart').style.borderRight="none";  
            document.getElementById('cart').style.borderBottom="1px solid rgb(204, 204, 204)";
            document.getElementById('cart').style.borderLeft="1px solid rgb(204, 204, 204)";
            }
            /*else
            {
              document.getElementById('cart').style.border="3px solid rgb(204, 204, 204)";
            }*/
          });
 
          var st1=st, c=0, total_st="", st7=st;
    /*      
     for (var k=lst; k<dt.length; k++)
     {
         if (dt.substr(k,1)==" ") { break; }
         if (dt.substr(k,1)=="*") { c=k; }
         if (k>c && c!=0) { total_st=total_st+dt.substr(k,1); }
     }
     
     if (total_st!="")
     {
     var tot1=parseInt(total_st);
     sessionStorage.setItem("tot",tot1);
     }
     
     else
     { sessionStorage.setItem("tot",0); }
     
     if (c==0) { document.getElementById('total').innerHTML="0";}

     else
     {
         var total5=parseInt(total_st);
         document.getElementById('total').innerHTML=total5;
     }
     */

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
          var xc5=window.matchMedia("(min-width: 992px)");
        if (xc5.matches)
        {
          document.getElementById('user-cont').style.marginRight="2vw";
          document.getElementById('fl-cont').style.marginRight="7vw";
        }
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("psw");
            $(document).ready(function(){
                $('.out').hide();
                $('.ord_h').hide(); 
                $('.n3').hide(); 
                $('.in').show(); 
                $('.up').show(); 
                $('.all').hide();
                $('.chk').hide(); 
                $('.h').hide();
                $('.count').hide();
                $('.error5').show();
                });
                document.getElementById('error5').innerHTML="Sign in to view your cart";
                document.getElementById('user_id').style.opacity="0";
                document.getElementById('count').style.display="none";
                document.getElementById('cart').style.overflowY="hidden";
                document.getElementById('cart').style.background="transparent";
                document.getElementById('cart').style.border="none";

                $(document).ready(function(){ $('#lp_error').show(); });
          document.getElementById('lp_error').innerHTML="⚠ You must sign in to add items";
          document.getElementById('lp_error').style.opacity="1";
          document.getElementById('add_btn').style.background="grey";
          document.getElementById('add_btn').style.cursor="not-allowed";
        }

    function flag(a)
    { 
      $(document).ready(function(){
        $('.all_pr').show(); });
        var price_us=["21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","100.00","154.00"]; 
        var price_uk=["16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","77.00","118.60"];
        var price_pk=["3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","16,650","25,640"];
        
        var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00",  "59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
        var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
        var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];

    if (a==1) 
    { 
      $(document).ready(function(){
        $('.all_pr').show();
        $('.load').hide();
        $('.pf3').show();
        $('.loadmore').show();
        });
        resetfilters();
      document.getElementById('flag').src='Navbar_Images/us.png'; 

      document.getElementById("cart_curr").innerHTML="$";

      if (sessionStorage.getItem("user")!=null)
      { 
      var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_us="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>curr_string.indexOf("/") && cr<curr_string.indexOf("($")) 
            { cr_us=cr_us+curr_string.substr(cr,1); }    
         } 
         document.getElementById('total').innerHTML=cr_us;
        }
      }

       for (var h=1; h<37; h++)
       {
         var n_c_id="pr_curr"+h;
         var n_p_id="pr_price"+h;
         document.getElementById(n_c_id).innerHTML="$";
         document.getElementById(n_p_id).innerHTML=price_us1[h-1];
       }
        
        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
        document.getElementById(cur_id).innerHTML="$"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_us[j-1];
            }
       
            document.getElementById('c_val1').innerHTML="50";
            document.getElementById('c_val2').innerHTML="50";
            document.getElementById('c_val3').innerHTML="100";
            document.getElementById('c_val4').innerHTML="100";      
        
      document.getElementById('f_currency1').innerHTML="$ ";
      document.getElementById('f_currency2').innerHTML="$ ";
      document.getElementById('f_currency3').innerHTML="$ ";      
      document.getElementById('f_currency4').innerHTML="$ ";
      document.getElementById('f_currency5').innerHTML="$ ";
     
      sessionStorage.setItem("fl",1); 
      
    }


      else if (a==2) 
    { 
      $(document).ready(function(){
        $('.all_pr').show();
        $('.load').hide();
        $('.pf3').show();
        $('.loadmore').show();
        });
        resetfilters();
    document.getElementById('flag').src='Navbar_Images/uk.png';   

    document.getElementById("cart_curr").innerHTML="£";

    if (sessionStorage.getItem("user")!=null)
    { 
    var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_uk="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>(curr_string.indexOf("$)")+1) && cr<curr_string.indexOf("(£")) 
            { cr_uk=cr_uk+curr_string.substr(cr,1); }    
         } 
         document.getElementById('total').innerHTML=cr_uk;
        }
      }
    
    for (var h=1; h<37; h++)
       {
         var n_c_id="pr_curr"+h;
         var n_p_id="pr_price"+h;
         document.getElementById(n_c_id).innerHTML="£";
         document.getElementById(n_p_id).innerHTML=price_uk1[h-1];
       }

        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
          document.getElementById(cur_id).innerHTML="£"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_uk[j-1];
            }
    
            document.getElementById('c_val1').innerHTML="50";
            document.getElementById('c_val2').innerHTML="50";
            document.getElementById('c_val3').innerHTML="100";
            document.getElementById('c_val4').innerHTML="100";

            document.getElementById('f_currency1').innerHTML="£ ";
            document.getElementById('f_currency2').innerHTML="£ ";
            document.getElementById('f_currency3').innerHTML="£ ";      
            document.getElementById('f_currency4').innerHTML="£ ";
            document.getElementById('f_currency5').innerHTML="£ ";
         
    sessionStorage.setItem("fl",2); 
  
  }

    else if (a==3) 
    { 
      $(document).ready(function(){
        $('.all_pr').show();
        $('.load').hide();
        $('.pf3').show();
        $('.loadmore').show();
        });
        resetfilters();

        document.getElementById("cart_curr").innerHTML="PKR";

        if (sessionStorage.getItem("user")!=null)
        { 

        var user_1=sessionStorage.getItem("user"), psw_1=sessionStorage.getItem("psw");
        var curr_dt=sessionStorage.getItem("curr_data");
        var user_string=user_1+user_1.length+"-"+psw_1+psw_1.length+"/", first_indx=curr_dt.search(user_string);
        var curr_string="";
        
        for (var g=first_indx; g<curr_dt.length; g++)
       {
         if (curr_dt.substr(g,1)==" ") { break; }
         curr_string=curr_string+curr_dt.substr(g,1);
       }

        var c_string=curr_string.includes("$"), cr_pk="";

        if (c_string==false) 
        { document.getElementById('total').innerHTML="0.00"; }

        else 
        {
          for (var cr=0; cr<curr_string.length; cr++)
         {
           if (curr_string.substr(cr,1)==" ") { break; }
           if (cr>(curr_string.indexOf("£)")+1) && cr<curr_string.indexOf("(PKR")) 
            { cr_pk=cr_pk+curr_string.substr(cr,1); }    
         } 
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
         document.getElementById('total').innerHTML=cr_pk1;
        }
      }

        for (var h=1; h<37; h++)
       {
         var n_c_id="pr_curr"+h;
         var n_p_id="pr_price"+h;
         document.getElementById(n_c_id).innerHTML="PKR";
         document.getElementById(n_p_id).innerHTML=price_pk1[h-1];
       }

        for (var i=1; i<15; i++) { var cur_id="currency"+i; 
          document.getElementById(cur_id).innerHTML="PKR"; }  
   
            for (var j=1; j<15; j++)
            {
              var price_id="it_price"+j;
              document.getElementById(price_id).innerHTML=price_pk[j-1];
            }

            document.getElementById('c_val1').innerHTML="5,000";
            document.getElementById('c_val2').innerHTML="5,000";
            document.getElementById('c_val3').innerHTML="10,000";
            document.getElementById('c_val4').innerHTML="10,000";

            document.getElementById('f_currency1').innerHTML="PKR ";
            document.getElementById('f_currency2').innerHTML="PKR ";
            document.getElementById('f_currency3').innerHTML="PKR ";      
            document.getElementById('f_currency4').innerHTML="PKR ";
            document.getElementById('f_currency5').innerHTML="PKR ";
              
      document.getElementById('flag').src='Navbar_Images/eu.png'; 
      sessionStorage.setItem("fl",3); 
    
    }
  }

  function resetfilters()
			{
				
				$(document).ready(function()
				{
					$('.all_pr').show();
					$('.load').hide();
          $('.loadmore').show();
					
				document.getElementById("filt1").checked = false;
				document.getElementById("filt2").checked = false;
				document.getElementById("blackk").checked = false;
				document.getElementById("greyy").checked = false;
				document.getElementById("redd").checked = false;
				document.getElementById("bluee").checked = false;
				document.getElementById("brownn").checked = false;
				document.getElementById("whitee").checked = false;
				});
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

  
  function add()
  {
    if(parseInt(document.getElementById('value').innerHTML)<9)
    {
      var a= parseInt(document.getElementById('value').innerHTML);
      document.getElementById('value').innerHTML=a+1;
    } 
  }
  
    function subtract()
  {
      if(parseInt(document.getElementById('value').innerHTML)>1)
     { var a= parseInt(document.getElementById('value').innerHTML);
      document.getElementById('value').innerHTML=a-1;
     }
  }

  

  function delete1(a1,m,num1,index)
  {  
    var price_us=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
      var price_uk=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
      var price_pk=["3500","5000 ","7490","8660","9160","9990","10820","11660","11820","12490","12490","12820","3500","5330","5830","7490","8330","9160","9490","10490","12820","16650","19980","21810","9820","3160","9160","7160","5000","3500","18480","14820","10820","16650","19980","12820"];

  //var r=parseInt(sessionStorage.getItem("tot"));
  var qty_in="q_"+num1;
  var qty=document.getElementById(qty_in).innerHTML;

  /* CURRENCY CODE STARTS */

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
  sessionStorage.setItem("curr_data",curr_dt);

    if (sessionStorage.getItem("fl")==1) 
    { document.getElementById('total').innerHTML=new_cr_us; }
    else if (sessionStorage.getItem("fl")==2) 
    { document.getElementById('total').innerHTML=new_cr_uk; }
    else if (sessionStorage.getItem("fl")==3) 
    { document.getElementById('total').innerHTML=new_cr_pk; }
    var r=new_cr_us;
  
  
/* CURRENCY CODE ENDS */

  var element = document.getElementById(a1);
  element.classList.add("remove1");

  $(document).ready(function(){
       $(".remove1").hide(); 
       element.classList.remove("remove1"); 
      });

   if (r==0)
   {
    $(document).ready(function(){
      $('.chk').hide(); 
      $('.h').hide();
      //$('.count').hide();
      $('.error5').show();
      document.getElementById('error5').innerHTML="No items added to cart";
      document.getElementById('cart').style.overflowY="hidden";
      document.getElementById('cart').style.background="transparent";
      document.getElementById('cart').style.border="none";
    });
   }   

  var i=sessionStorage.getItem("user"), j=sessionStorage.getItem("psw"), li=i.length, lj=j.length;
   var st=i+li+"-"+j+lj+"/", dt=sessionStorage.getItem("data"), st1=st, count=dt.search(st), lst=st.length+count, nums_only="", st0=st;
   var quan_st=sessionStorage.getItem("quan_data");
   var size_st=sessionStorage.getItem("size_data");
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
      if (dt.substr(f,1)=="*" || dt.substr(f,1)==" ") { break; }
      if (dt.substr(f,1)==num1) { z5=f; break; }
   }

   var z7=z5-(st.length+dt.search(st));

   for (var k=st.length+dt.search(st); k<st.length+dt.search(st)+36; k++)
   {
       if (dt.substr(k,1)=="*" || dt.substr(k,1)==" ") { break; }
       if (k==z5) { st0=st0+dt.substr(k,1); continue; }
       st1=st1+dt.substr(k,1);
       st0=st0+dt.substr(k,1);
   }
   dt=dt.replace(st0,st1);
   sessionStorage.setItem("data",dt);

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

   sessionStorage.setItem("quan_data",quan_st);
   sessionStorage.setItem("size_data",size_st);

   var i_count=0;
for (var wa=lst; wa<dt.length; wa++)
{
if (dt.substr(wa,1)==" " || dt.substr(wa,1)=="*") { break; }
i_count++;
}
document.getElementById('item-counter').innerHTML=i_count;
document.getElementById('count').innerHTML=i_count;

  }

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

    function checkout_fun()
                 {
                   window.location.href="Checkout.html";
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
     
                 