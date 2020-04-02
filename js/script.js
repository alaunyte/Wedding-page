const table = document.querySelector("tbody");

document.forms.registration.addEventListener("submit", e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const surname = e.target.elements.surname.value.trim();
    const name2 = e.target.elements.name2.value.trim();
    const surname2 = e.target.elements.surname2.value.trim();

    if(name !== "" && surname != "" && name2 !=="" && surname2 !== ""){
	    addPerson(name, surname);
	    addPerson(name2, surname2);
    }else if (name !== "" && surname != ""){
    	addPerson(name, surname);
    }else{
    	const errorMessage = document.querySelector(".notification");
    	errorMessage.textContent = "Please fill all inputs";
    	errorMessage.style.display = "block";
    }

});

document.querySelector(".notification").addEventListener("click", () => (document.querySelector(".notification").style.display = "none"));

function addPerson(name, surname){
	const tr = table.insertRow(-1);
    const td1 = tr.insertCell(-1);
    const td2 = tr.insertCell(-1);
    td1.textContent = name;
    td2.textContent = surname;
};
