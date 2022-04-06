let b = document.querySelector('.add');
let inp = document.querySelector('input');

b.addEventListener('click', addTask);

function addTask(){
	let newElem = document.createElement('p');
	newElem.innerText = inp.value;
	newElem.addEventListener('click', crossLine);
	inp.value = '';
  
	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.classList.add("done");
	checkbox.addEventListener('change', transport);


	let bin = document.createElement('input');
	bin.type = "checkbox";
	bin.addEventListener('change', eliminate);
	
	let container = document.createElement('div');
	container.style.display = "flex";
	container.style.alignItems = "center";
	container.style.justifyContent = "center";
	container.appendChild(newElem);
	container.appendChild(checkbox);
	container.appendChild(bin);

	mainContainer = document.querySelector('.main-container');

	mainContainer.appendChild(container);
}
function crossLine(){
	if(this.style.textDecoration == "line-through"){
		this.style.textDecoration = "";
	}
	else if(this.style.textDecoration == ""){
		this.style.textDecoration = "line-through";
	}
	
}

function eliminate(){
	if(this.checked){
			mainContainer.removeChild(this.parentNode);
	}
}

function transport(){
	mainContainer.removeChild(this.parentNode);
	mainContainer.appendChild(this.parentNode);
}