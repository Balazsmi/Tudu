let theme = 1;

let array = ["banana", "tomato", "apple"];
let array2 = ["test"];
localStorage.setItem("array", array);
localStorage.setItem("array2", array2);


document.querySelector(':root').style.setProperty('--themeColor', localStorage.getItem("themeColorLocalStorage"));

displayItems();

updateThemeColor();

function showThemes() {
	var x = document.getElementById("themes");
	if (x.style.visibility == "visible") {
		document.getElementById("palette-icon").style.color = 'var(--iconColor)';
	  	x.style.visibility = "hidden";
	} else {
		document.getElementById("palette-icon").style.color = 'var(--themeColor)';
	  	x.style.visibility = "visible";
		
	}
}

function updateThemeColor() {
	localStorage.setItem("themeColorLocalStorage", getComputedStyle(document.documentElement).getPropertyValue('--themeColor'));
	document.getElementById("palette-icon").style.color = 'var(--themeColor)';
	document.getElementById("wave").style.color = 'var(--themeColor)';
}

function addItem() {
	var ul = document.getElementById("todo-list");
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(document.getElementById("addItemInput").value));
	ul.appendChild(li);
	array.push(document.getElementById("addItemInput").value);
	localStorage.setItem("array", array);
	alert(array);
}

function clearInput() {
	document.getElementById("addItemInput").value = "";
}

function displayItems() {
	alert(localStorage.getItem("array").length);
	for (let index = 0; index < localStorage.getItem("array").length; index++) {
		array2[index] = localStorage.getItem("array")[index];
		localStorage.setItem("array2", array2);
	}
}