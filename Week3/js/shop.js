var customerName = "Marina";
var price = 10; 
var quantity = 2;
var totalPrice = price * quantity;
var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var priceElement = document.getElementById("total-price");
priceElement.textContent = "$" + totalPrice;