document.addEventListener("DOMContentLoaded", () =>{
	const nameSection = document.querySelector(".name h1");
	const editButton = document.createElement("button");
	let isEditing = false;

	editButton.textContent = "Edit";
	nameSection.after(editButton);

	editButton.addEventListener("click", () =>{
		if(isEditing){
			const inputField = document.querySelector(".name input");
			nameSection.textContent = inputField.value;
			inputField.remove();
			editButton.textContent = "Edit";
		}else{
			const inputField = document.createElement("input");
			inputField.value = nameSection.textContent;
			nameSection.textContent = "";
			nameSection.appendChild(inputField);
			editButton.textContent = "Save";
		}
		isEditing = !isEditing;
	})
})

const addButton = document.createElement("button");
const musicSection = document.querySelector(".favorite-music .music-covers");
addButton.textContent = "add";
musicSection.after(addButton);

addButton.addEventListener("click", () =>{
	const form = document.createElement("form");
	form.innerHTML = `
	<input type="text" placeholder="Music Name" required />
    <input type="url" placeholder="Music URL" required />
    <button type="submit">Submit</button>
    `;
    addButton.after(form);

    form.addEventListener("submit", (e) =>{
    	e.preventDefault();
    	const [nameInput, urlInput] = form.querySelectorAll("input");
    	if(nameInput.value && urlInput.value){
    		const musicItem = document.createElement("div");
    		musicItem.classList.add("music-item");
    		musicItem.innerHTML = `
    		<a href="${urlInput.value}" target="_blank">
            	<img src="spotify.png" alt="${nameInput.value}" />
            </a>
          	<p>${nameInput.value}</p>
          	`;
          	musicSection.appendChild(musicItem);
          	form.remove();
    	}else{
    		alert("Please fill out all fields!");
    	}
    });
});
