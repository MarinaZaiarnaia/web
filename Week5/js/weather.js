window.onload = function(){
	function render(){
		var bangkok = document.getElementById("bangkok");
		bangkok.addEventListener("click", function(){
		//alert ("bangkok");
		var url="http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=0865a6da942c3c70913c678f4779c92c"
			$.ajax({
				type: "GET",
				url: url,
				success: function(data){
					var temp = data.main.temp - 273.15;
					var ele = document.getElementById("temp");
					ele.textContent = temp.toFixed(2) + "C";
					var icon = data.weather[0].icon;
					var ele2 = document.getElementById("icon");
					ele2.innerHTML = "<img src='http://openweathermap.org/img/w/" +icon+ ".png' />";
					var humid = data.main.humidity;
					var ele3 = document.getElementById("humid");
					ele3.textContent = humid;
				}

			});
		});
	}
	render();
};