$(document).ready(function(){
    $("#order").click(function(event){
        let pizzatype = $("#pizza-type option:selected").val();
        let pizzasize = $("#pizza-size option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let crusttype = $("#crust-type option selected").val();
      console.log (
          pizzatype + pizzasize + toppings + crusttype
    )
    switch(pizzasize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 800;
         break;
         case "small":
           price = 500;
         default:
           console.log("No price  listed"); 
       }
       switch(pizzatype){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 800;
         break;
         case "small":
           price = 500;
         default:
           console.log("No price  listed"); 
       }
       switch(toppings){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 800;
         break;
         case "small":
           price = 500;
         default:
           console.log("No price  listed"); 
       }
        switch(crusttype){
        case "0":
          crustprice =0;
        break;
        case "large":
           crustprice= 1200;
           console.log(price);
         break;
         case "medium":
           crustprice = 800;
         break;
         case "small":
           crustprice = 500;
         default:
           console.log("No price  listed"); 
       }


    });   
  });
