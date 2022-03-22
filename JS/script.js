$(document).ready(function(){
    $("#order").click(function(event){
        let pizzatype = $("#pizza-type option:selected").val();
        let pizzasize = $("#pizza-size option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let crusttype = $("#crust-type option selected").val();
      console.log (
          pizzatype + pizzasize + toppings + crusttype
    )
    });   
  });
