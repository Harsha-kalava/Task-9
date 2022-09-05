let btn = document.getElementById("addForm");
let itemList = document.getElementById("items");
let button = document.querySelector("button");
let filter = document.getElementById("filter");
let subBtn = document.querySelector(".btn-dark");

btn.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

// Adding new input field
let inputText = document.createElement("input");

inputText.className = "form-control mr-2";
inputText.id = "another";
inputText.setAttribute("type", "text");
btn.appendChild(inputText);
btn.insertBefore(inputText, subBtn);

function addItem(e) {
	e.preventDefault();
	inputVal = document.getElementById("item").value;
	inputVal2 = document.getElementById("another").value;

	// Adding input values to the list
	let li = document.createElement("li");
	li.className = "list-group-item";
	// li.appendChild(document.createTextNode(inputVal));
	// li.appendChild(document.createTextNode(inputVal2));
	li.appendChild(document.createTextNode(`${inputVal} ${inputVal2}`));

	// Adding delete buttons to the added items

	let delbtn = document.createElement("button");
	delbtn.className = "btn btn-danger btn-sm float-right delete";
	delbtn.appendChild(document.createTextNode("X"));
	li.appendChild(delbtn);
	itemList.appendChild(li);

	let editbtn = document.createElement("button");
	editbtn.className = "btn float-right ";
	// editbtn.style.border = "white";
	// editbtn.style.backgroundColor = "black";
	editbtn.appendChild(document.createTextNode("EDIT"));
	li.appendChild(editbtn);
	// delbtn.appendChild(editbtn);
	itemList.appendChild(li);
	// delbtn.appendChild(editbtn);
	// li.insertBefore(editbtn, li.lastChild);
}

//Remove item event

function removeItem(e) {
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you sure?")) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

// Filter Items
function filterItems(e) {
	// converting text to lowercase
	let text = e.target.value.toLowerCase();
	// Fetching list
	let items = itemList.getElementsByTagName("li");

	// Converting Node list in to an array
	let itemArr = Array.from(items);
	// console.log(itemArr);

	itemArr.forEach(function (item) {
		let itemName = item.textContent.toLowerCase();
		// itemName = itemName.toLowerCase();
		if (itemName.indexOf(text) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
