var customerName = "Marina";
var products = ["Brooklyn T-Shirt White", "Brooklyn T-Shirt Black", "Apple Watch", "Android Phone"];
var prices = [10, 10, 199, 159];
var productsText = "";
var total = 0;
var productsElement = document.getElementById("product-list");

for( var i = 0; i < products.length; i++){

productsText += "<li class='list-group-item'><span class='badge'>$" + prices[i]+"</span>" + products[i] + "</li>";
total += prices[i];
}

productsElement.innerHTML = productsText;  

var discount = total * 0.25;

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = "$" + (total - discount);

var hour;
var date = new Date()
var time = date.getHours()
if (time < 12) {
hour = "Good Morning";
  
} else if (time < 18) {
hour = "Good Afternoon";
} else {
 hour = "Good Evening";
}

var timeElement = document.getElementById("time");
timeElement.textContent = hour;
 

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;