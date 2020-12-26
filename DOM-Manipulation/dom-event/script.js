var addItemButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ol");
var clearAllButton = document.getElementById("clearALl");


//checks for length of input
function inputLength() {
	return input.value.length;
}

//gets rid of list item
function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}



function createListElement(){

	var li = document.createElement("li");
	var removeButton = document.createElement("button");
	removeButton.innerHTML = "Remove";

	removeButton.onclick = removeParent;


	li.appendChild(document.createTextNode( input.value + " "));
	li.append(removeButton);
	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();

	}
}


function clearAll(){
	//get the list from html page
	var list = document.getElementById("list");
	//while the list still has items, keep deleting the first child
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}



addItemButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
clearAllButton.addEventListener('click',  clearAll);
