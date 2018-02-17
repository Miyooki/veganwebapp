// name all the buttons 
var array = [0,0,0,0,0,0,0,0,0];
function clickEvent(){
	for (i = 1; i < 10; i++){
		var button_name_down = "button" + i.toString() + "down";
		var button_name_up = "button" + i.toString() + "up";
		document.getElementById(button_name_down).onclick = clickEvent();
		document.getElementById(button_name_down).onclick = clickEvent();
	}
	document.getElementById("button1down").onclick = clickEvent();
	document.getElementById("button1up").onclick = clickEvent();
	alert('hi');
    
};



function mod_list(button_name, index){
	if (button_name.slice(-1) == "n"){
		array[index] -= 1;
	}
	else{
		array[index] += 1;
	}
	alert(array[index].toString);
	
};

// document.getElementById("button1down").addEventListener("click", function(){
    // alert("hielo");
// });