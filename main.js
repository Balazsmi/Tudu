let theme = 1;
let array = [];

retreiveListFromStorage();

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

function addItem(value) {
	//adds one Item from the input field into the list
	var ul = document.getElementById("todo-list");
	var li = document.createElement("li");
    li.innerHTML = '<button id="deleteButton" onclick="deleteItem(this);"><i class="fa-regular fa-circle-xmark deleteIcon"></i></button>';
	li.appendChild(document.createTextNode(value));
	ul.appendChild(li);
}

function addItemToStorage() {
	//adds Item to localStorage
	array.push(document.getElementById("addItemInput").value);
	localStorage.setItem("array", JSON.stringify(array));
}

function retreiveListFromStorage() {
	//adds back the stored items to the array in the localStorage
	if (localStorage.getItem("array")[0] != null) {
		let i = 0;
		while(i < JSON.parse(localStorage.getItem("array")).length) {
			array.push(JSON.parse(localStorage.getItem("array"))[i]);
			addItem(JSON.parse(localStorage.getItem("array"))[i]);
			i++;
		}
	}
	localStorage.setItem("array", JSON.stringify(array));
}


function clearInput() {
	//clears inputfield
	document.getElementById("addItemInput").value = "";
}


function call() {
	//executes addItem() with value of input field as parameter
	addItem(document.getElementById("addItemInput").value);
}


function deleteItem(button) {
	//gets the index using getIndex() and deletes the list element
	let index = getIndex(button);
	if (index >= 0 && index < array.length) {
		document.getElementById("todo-list").removeChild(document.getElementById("todo-list").children[index]);
		array.splice(index, 1);
		localStorage.setItem("array", JSON.stringify(array));
	}

}

function getIndex(button) {
	//returns index of the li in which the delete-button was clicked
	let listItem = button.parentNode;
	let ulItem = listItem.parentNode;
	let index = Array.from(ulItem.children).indexOf(listItem);
	return index;
}