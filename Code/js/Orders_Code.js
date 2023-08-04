
function initialize()
    {
    
      
      $(document).ready(function(){
        
        $('.all').hide();
        $('#lp_error').hide(); 
        $('.h').hide(); 
        $('.chk').hide(); 
        $('.error5').hide(); 
        $('.f_alert').hide();
        $(".empty_err").hide(); 
        $(".empty_box").hide();
        $(".sign_in_err").hide(); 
        $(".lock_img").hide();
      });

      sessionStorage.setItem("fcheck",0);
      name_inside();

      if (sessionStorage.getItem("user")==null)
      {
        document.getElementById('user_id').innerHTML="";
        document.getElementById('user_id').style.opacity="0";
        $(document).ready(function(){
                $('.out').hide(); 
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
            $('.n3').show(); 
            $('.in').hide(); 
            $('.up').hide(); 
            });
      }

      var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
      var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
      var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];     

      if (sessionStorage.getItem("fl")==null)   // US 
      {    

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
            
      }
      else if (sessionStorage.getItem("fl")==1) 
      { 

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
             
      }
      else if (sessionStorage.getItem("fl")==2) 
      { 

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
          
      }
      else if (sessionStorage.getItem("fl")==3) 
      { 

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
              if (dt.substr(wa,1)==" " || dt.substr(wa,1)=="*") { break; }
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
            sessionStorage.setItem("tot",0);
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

          var st1=st, total_st="", st7=st;
          

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
        
        var user_nm=sessionStorage.getItem("user"), order_st="", order_num="";
   

        if (user_nm==null)
        {
          $(document).ready(function(){
            $(".sign_in_err").show(); 
            $(".lock_img").show();
            $(".empty_err").hide(); 
            $(".empty_box").hide();
            $(".all-orders-list").hide();
          });
            document.getElementById('empty_err').style.opacity="0";
            document.getElementById('empty_box').style.opacity="0";
            document.getElementById('sign_in_err').style.opacity="1";
            document.getElementById('lock_img').style.opacity="1";
            return;
        }

        if (sessionStorage.getItem("order_nums")==null)
        { 
          $(document).ready(function(){
            $(".empty_err").show(); 
            $(".empty_box").show(); 
            $(".all-orders-list").hide();
          });
            document.getElementById('empty_err').style.opacity="1";
            document.getElementById('empty_box').style.opacity="1";
            document.getElementById('sign_in_err').style.opacity="0";
            document.getElementById('lock_img').style.opacity="0";
            return;

        }

        

        var orders_data=sessionStorage.getItem("order_nums");
        var strt_in=orders_data.search(user_nm);
        var check_true=orders_data.includes(user_nm);      


        if (check_true==false)
        {
          $(document).ready(function(){
            $(".empty_err").show(); 
            $(".empty_box").show(); 
            $(".all-orders-list").hide();
          });
            document.getElementById('empty_err').style.opacity="1";
            document.getElementById('empty_box').style.opacity="1";
            document.getElementById('sign_in_err').style.opacity="0";
            document.getElementById('lock_img').style.opacity="0";
            return;
        }

       
        var letter_list="abcdefghijklmnopqrstuvwxyz0123456789";

        var items_list=["Diamond Print Shirt","Hallsville Shirt","Horseshoe Shirt","Houston Shirt","Ingleside Stretch Shirt","Printed Shirt","Tang Hooded Plaid Shirt","Riviera Shirt","Zip City Shirt","Switch Up Jacket","Charge Jacket","Niles Jacket","Smocked Hem Blouse","Ribbed Knit Sweater","Embelished Cuff Blouse","Open-back Cami Jumpsuit","Self Tie Jumpsuit","Trumpet Sleeve Jumpsuit","Lace Insert Peplum Top","Stripped Smock Top","Lace Yoke Smock Top","Bardot Dress","Polka Dot Jumpsuit","Vertical-stripped Jumpsuit","Mini Mermaid Shirt","Floral Top","Green Floral Top","Embroidered Frock","Pink Sunshine T-shirt","White T-shirt","Lining Shirt","Red Chequered Shirt","Blue Chequered Shirt","Red Underwater Shirt","Blue Underwater Shirt","Plaid Pattern Shirt"];

        var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00","59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
        var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
        var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];

        for (var a=strt_in; a<orders_data.length; a++)
        {
          if (orders_data.substr(a,1)==" ") { break; }
          order_st=order_st+orders_data.substr(a,1);
        }

        var ts=0;

        for (var tst=0; tst<order_st.length; tst++)
        { if (tst>order_st.indexOf("/")) { ts++; } }

        if (ts==0)
        {
          $(document).ready(function(){
            $(".empty_err").show(); 
            $(".empty_box").show(); 
            $(".all-orders-list").hide();
          });
            document.getElementById('empty_err').style.opacity="1";
            document.getElementById('empty_box').style.opacity="1";
            document.getElementById('sign_in_err').style.opacity="0";
            document.getElementById('lock_img').style.opacity="0";
            return;
        }

        
        for (var b=0; b<order_st.length; b++)
      { if (b>order_st.indexOf("/")) { order_num=order_num+order_st.substr(b,1); } }

       var order_count=order_num.length/5;
       var orders_list=sessionStorage.getItem("orders");

       var c1=0;
       for (var c=0; c<order_count; c++) // MAIN LOOP
       {
         var o_num=order_num.substr(c1,5);
  
         var base=o_num+o_num.length+"_"+user_nm+"/";
         var indx1=orders_list.search(base), the_string="", item_num="", quan_num="",size_num="", tot_num="", inside_text0="",inside_text1="",inside_text2="",currency="",price="";

         for (var d=indx1; d<orders_list.length; d++)
         {
           if (orders_list.substr(d,1)==" ") { break; }
           the_string=the_string+orders_list.substr(d,1);
         }

         for (var e=0; e<the_string.length; e++)
        {
            if (e>the_string.indexOf("/") && the_string.substr(e+1,1)=="(")
            { item_num=item_num+the_string.substr(e,1); }
            if (e>the_string.indexOf("/") && the_string.substr(e-1,1)=="(")
            { quan_num=quan_num+the_string.substr(e,1); }
            if (e>the_string.indexOf("/") && the_string.substr(e+1,1)==")")
            { size_num=size_num+the_string.substr(e,1); }
            if (e>the_string.indexOf("#") && e<the_string.indexOf("!"))
            { tot_num=tot_num+the_string.substr(e,1); }
            if (e>the_string.indexOf("!")) { currency=currency+the_string.substr(e,1); }
        }
       
        if (currency=="PKR")
        {
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
        }

        inside_text0="Order Number: "+o_num;
        inside_text1="Total: "+currency+" "+tot_num;
  
        var list = document.createElement("div");
        var node1 = document.createTextNode(inside_text0);
        list.appendChild(node1);
        list.classList.add("list_a");
        var list_id="list_"+c;
        list.id=list_id;
        list.classList.add("dropdown-item");
        list.classList.add("all-orders-list");
        list.classList.add("all-m");
        var element1 = document.getElementById("menu");
        element1.appendChild(list);

      
        for (var l=0; l<letter_list.length; l++)
        {
            for (var m=0; m<item_num.length; m++)
            {
                if (item_num.substr(m,1)==letter_list.substr(l,1))
                {                 
                  var qnt=quan_num.substr(m,1);                  
                  var sze=size_num.substr(m,1);
                  if (sze=="S") { sze="Small"; }
                  else if (sze=="M") { sze="Medium"; }
                  else if (sze=="L") { sze="Large"; }

                  if (currency=="$") { price=price_us1[l]; }
                  else if (currency=="£") { price=price_uk1[l]; }
                  else if (currency=="PKR") 
                  { 
                    price=price_pk1[l]; 
                    /*if (price.length==4) 
                      {
                       var les1=price.substr(0,1);
                       price=price.replace(les1,(les1+","));
                      }
                    else if (price.length==5) 
                      {
                       var les1=tot_num.substr(1,1);
                       price=price.replace(les1,(les1+","));
                      }*/
                  }
                  inside_text2=inside_text2+qnt+" X "+items_list[l]+" | "+sze+"  -  "+currency+" "+price;
                  
                  var list1 = document.createElement("li");
                  var node = document.createTextNode(inside_text2);
                  list1.appendChild(node);
                  list1.classList.add("list_1")
                  var l_id="list_"+c;
                  var element2 = document.getElementById(l_id);
                  element2.appendChild(list1);
                  inside_text2="";
                }
            }
        }
        var node2 = document.createTextNode(inside_text1);
        list.appendChild(node2);
        
      if (c<order_count-1)
      {
        list.classList.add("all-m1");
      }
         
     //alert(inside_text);

         c1=c1+5;
         
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
                $('.all-orders-list').hide();
                $('.out').hide(); 
                $('.n3').hide(); 
                $('.in').show(); 
                $('.up').show(); 
                $('.all').hide();
                $('.chk').hide(); 
                $('.h').hide();
                $('.count').hide();
                $('.error5').show();
                $(".sign_in_err").show(); 
                $(".lock_img").show();
                $(".empty_err").hide(); 
                $(".empty_box").hide();
                });

                document.getElementById('top-caption2').innerHTML="Hi! View your complete order history below. For each order, the items' names, sizes, quantities and prices are listed, along with the total amount.";

                document.getElementById('sign_in_err').style.opacity="1";
                document.getElementById('lock_img').style.opacity="1";
                document.getElementById('empty_err').style.opacity="0";
                document.getElementById('empty_box').style.opacity="0";

                document.getElementById('error5').innerHTML="Sign in to view your cart";
                document.getElementById('user_id').style.opacity="0";
                document.getElementById('count').style.display="none";
                document.getElementById('cart').style.overflowY="hidden";
                document.getElementById('cart').style.background="transparent";
                document.getElementById('cart').style.border="none";

                $(document).ready(function(){ $('#lp_error').show(); });
          
          document.getElementById('lp_error').style.opacity="1";
          document.getElementById('add_btn').style.background="grey";
          document.getElementById('add_btn').style.cursor="not-allowed";
        }

        function flag(a)
        { 
 
          var price_us1=["21.00","30.00","45.00","52.00","55.00","60.00","65.00","70.00","71.00","75.00","75.00","77.00","21.00","32.00","35.00","45.00","50.00","55.00","57.00","63.00","77.00","100.00","120.00","131.00",  "59.00","19.00","55.00","43.00","30.00","21.00","111.00","89.00","65.00","100.00","120.00","77.00"]; 
            var price_uk1=["16.20","23.10","34.70","40.00","42.40","46.20","50.10","53.90","54.70","57.80","57.80","59.30","16.20","24.60","27.00","34.70","38.50","42.40","43.90","48.50","59.30","77.00","92.40","100.90","45.40","14.60","42.40","33.10","23.10","16.20","85.50","68.50","50.10","77.00","92.40","59.30"];
            var price_pk1=["3,500","5,000 ","7,490","8,660","9,160","9,990","10,820","11,660","11,820","12,490","12,490","12,820","3,500","5,330","5,830","7,490","8,330","9,160","9,490","10,490","12,820","16,650","19,980","21,810","9,820","3,160","9,160","7,160","5,000","3,500","18,480","14,820","10,820","16,650","19,980","12,820"];
    
        if (a==1) 
        { 
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
         
          sessionStorage.setItem("fl",1); 
          
        }
    
    
          else if (a==2) 
        { 

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
             
        sessionStorage.setItem("fl",2); 
      
      }
    
        else if (a==3) 
        { 
        
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
                  
          document.getElementById('flag').src='Navbar_Images/eu.png'; 
          sessionStorage.setItem("fl",3); 
        
        }
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
                   
                   
                  }); 
                }

               
     



                function name_inside()
                {
                var us_name=sessionStorage.getItem("user");  
                if (us_name!=null)
                {
                document.getElementById('top-caption2').innerHTML="Hi "+us_name+"! View your complete order history below. For each order, the items' names, sizes, quantities and prices are listed, along with the total amount.";
                }
                else
                {
                  document.getElementById('top-caption2').innerHTML="Hi! View your complete order history below. For each order, the items' names, sizes, quantities and prices are listed, along with the total amount.";
                }
                }