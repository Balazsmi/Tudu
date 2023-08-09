let theme = 1;

document.querySelector(':root').style.setProperty('--themeColor', localStorage.getItem("themeColorLocalStorage"));
playVisibility();


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

	localStorage.setItem("workLocalStorage",  document.getElementById("workInput").value);
	localStorage.setItem("shortBreakLocalStorage", document.getElementById("shortBreakInput").value);
	localStorage.setItem("longBreakLocalStorage", document.getElementById("longBreakInput").value);

}

function addItem() {
	var ul = document.getElementById("todo-list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(document.getElementById("addItemInput").value));
	ul.appendChild(li);
}

function clearInput() {
	document.getElementById("addItemInput").value = "";
}