let theme = 1;
let arrays = {
	1: [],
	2: [],
	3: [],
	4: [],
	5: [],
};


let cycle = 1;
document.getElementById("addItemInput" + cycle).focus();

for (let i = 1; i <= 5; i++) {
	retreiveListFromStorage(arrays[i]);
}


document.querySelector(':root').style.setProperty('--themeColor', localStorage.getItem("themeColorLocalStorage"));
updateThemeColor();

function showThemes() {
	//toggles the theme-color-picker
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
	//sets the new theme color
	localStorage.setItem("themeColorLocalStorage", getComputedStyle(document.documentElement).getPropertyValue('--themeColor'));
	document.getElementById("palette-icon").style.color = 'var(--themeColor)';
	document.getElementById("wave").style.color = 'var(--themeColor)';
}

function addItemToPage() {
	//adds one Item from the input field into the list
	var ul = document.getElementById("todo-list" + cycle);
	var li = document.createElement("li");
    li.innerHTML = '<button id="deleteButton" onclick="deleteItem(this);"><i class="fa-regular fa-circle-xmark deleteIcon"></i></button>';
	li.appendChild(document.createTextNode(document.getElementById("addItemInput" + cycle).value));
	ul.appendChild(li);
}

function addItemToStorage() {
	//adds Item to localStorage
	console.log(document.getElementById("addItemInput" + cycle).value);
	(arrays[cycle]).push(document.getElementById("addItemInput" + cycle).value);
	console.log(localStorage.getItem(arrays[cycle]));
	localStorage.setItem("array" + cycle, JSON.stringify((arrays[cycle])));
}

function retreiveListFromStorage(value) {
	//adds back the stored items to the array in the localStorage
	if (localStorage.getItem(arrays[cycle]) != null) {
		let i = 0;
		while(i < JSON.parse(localStorage.getItem(arrays[cycle])).length) {
			value.push(JSON.parse(localStorage.getItem(arrays[cycle]))[i]);
			addItemToPage(JSON.parse(localStorage.getItem(arrays[cycle]))[i]);
			i++;
		}
	}
	localStorage.setItem("array" + cycle, JSON.stringify(value));
}


function clearInput() {
	//clears inputfield
	document.getElementById("addItemInput" + cycle).value = "";
}


function call() {
	//executes addItemToPage() with value of input field as parameter
	addItemToPage(document.getElementById("addItemInput" + cycle).value);
}

function deleteItem() {

}



function cycleLeft() {
	if(cycle > 1) {
		cycle--;
		document.getElementById("listHeader").innerHTML = "List " + cycle;
		cycleUpdate();
	}
	document.getElementById("addItemInput" + cycle).focus();
}

function cycleRight() {
	if(cycle < 5) {
		cycle++;
		document.getElementById("listHeader").innerHTML = "List " + cycle;
		cycleUpdate();
	}
	document.getElementById("addItemInput" + cycle).focus();
}

function cycleUpdate() {
	document.getElementById("list-container1").style = "display: none";
	document.getElementById("list-container2").style = "display: none";
	document.getElementById("list-container3").style = "display: none";
	document.getElementById("list-container4").style = "display: none";
	document.getElementById("list-container5").style = "display: none";
	document.getElementById("list-container" + cycle).style = "display: block";
}