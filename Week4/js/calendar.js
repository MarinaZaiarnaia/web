var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	displayCalendar: function(){
	var ele = document.getElementById("calendar");
	var calendarText = "<table class = 'table table-condensed'>";
	calendarText += this.header;
	var days = 0;
	for (var i = 1; i <=31; i++){
	if (days === 7) {
		calendarText += "</tr><tr>" + "<td>" + i + "</td>"  ;
		days = 1; 
	}
	else { 
		calendarText += "<td>" + i + "</td>";
		days++;
	}
	}
	calendarText += "</table>"
	ele.innerHTML = calendarText;
	}
}
calendar.displayCalendar();