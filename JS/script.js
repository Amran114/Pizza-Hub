$(document).ready(function() {
  $("#order").click(function(event) {
      let pizzatype = $("#pizza-type option:selected").val();
      let pizzasize = $("#pizza-size option:selected").val();
      let toppings = $("#toppings option:selected").val();
      let crusttype = $("#crust-type option:selected").val();
      // console.log(
      //     pizzatype + pizzasize + toppings + crusttype
      // )
      switch (pizzasize) {
          case "no-price":
              alert("Kindly select pizza type.");
              break;
          case "large":
              pizzaprice = 1300;
              break;
          case "medium":
              pizzaprice = 800;
              break;
          case "small":
              pizzaprice = 500;
          default:
              pizzaprice = 0;
      }
      switch (toppings) {
          case "no-price":
              alert("Kindly select a topping");
              break;
          case "veggies":
              toppingmoney = 200;
              break;
          case "chick-veggie":
              toppingmoney = 400;
              break;
          case "black-olives":
              toppingmoney = 50;
          default:
              toppingmoney = 0;
      }
      switch (crusttype) {
          case "0":
              alert("Kindly select a crust");
              break;
          case "thin-crust":
              crustpesa = 100;
              break;
          case "large-crust":
              crustpesa = 300;
          default:
              crustpesa = 0;
      }
      let total = parseInt(pizzaprice + toppingmoney + crustpesa);
      // alert("Thank you for ordering  " + pizzatype + " , your order total is " + total);
      if ((pizzatype == " ") && (pizzasize == "0") && (crusttype == "0")) {
          $("#order").show();
          $(".hidden").hide();
          alert("Please select pizzatype and crust");
      } else {
          $("#order").hide();
          $("#hakunaDelivery").hide();
          $(".hidden").fadeIn(2000);
      }
      //Displaying what customer have chosen.
      $("#type").html(pizzatype);
      $("#size").html(pizzasize);
      $("#topping").html(toppings);
      $("#crust").html(crusttype);
      $("#Total").html(total);
      // Checkout without home delivery button
      $("#noDeliveryButton").click(function() {
          $("#noDeliveryTotal").html("Your order bill is Kshs: <span class='blue'>" + total + "</span>");
      });
      // Checkout with home delivery button
      $("#finaleOrder").click(function() {
          let checkoutWithDelivery = total + 300;
          let person = $("input#customerName").val();
          let location = $("input#customerLocation").val();
          $("#homeDeliveryTotal").html("<span class='blue'>" + person + "</span>" + ", " + "Your order bill is Kshs: <span class='blue'>" + checkoutWithDelivery + "</span>" + ", and will be delivered to you at, <span class='blue'>" + location + "</span>" + " sooner.");
      });
  });
});