let theme = 1;

let array = [];

let arrayLength = JSON.parse(localStorage.getItem("array")).length;
alert(arrayLength);

if (localStorage.getItem("array") != null) {
	let i = 0;
	while(i < arrayLength) {
		array.push(JSON.parse(localStorage.getItem("array")[i]));
		i++;
	}
}



localStorage.setItem("array", JSON.stringify(array));

alert(localStorage.getItem("array"));


document.querySelector(':root').style.setProperty('--themeColor', localStorage.getItem("themeColorLocalStorage"));
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
	//add Item to the list
	var ul = document.getElementById("todo-list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(document.getElementById("addItemInput").value));
	ul.appendChild(li);
}

function addItemToStorage() {
	//add Item to localStorage
	array.push(document.getElementById("addItemInput").value);
	localStorage.setItem("array", JSON.stringify(array));
	alert(array);
}

function clearInput() {
	document.getElementById("addItemInput").value = "";
}
