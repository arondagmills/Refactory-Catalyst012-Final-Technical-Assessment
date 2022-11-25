const fname = document.querySelector("#su_name");
const G_name = document.querySelector("#G_name");
const gender1 = document.querySelector("#gender1");
const gender2 = document.querySelector("#gender2");
const nin = document.querySelector("#title");
const role1 = document.querySelector("#residence");
const dateOfBirth = document.querySelector("#date1");
const country= document.querySelector("#country");
const nationality = document.querySelector("#nationality");


const checkName1 = () => {
	let alphabet = /^[a-zA-Z]+ [a-zA-Z]+$/;
	if (su_name.value === "") {
		// alert("User Name is Empty");
		su_name.style.border = "2px solid red";
		p.textContent = 'Invalid Field'
		su_name.focus();
		return false;
	} else {
		su_name.style.border = "2px solid #198754";
		document.querySelector("#G_name").focus();
	}

	if (su_name.match(alphabet)) {
		document.querySelector("#G_name").focus();
		return true;
	} else {
		su_name.style.border = "2px solid green";
		su_name.focus();
	}
};


const checkName2 = () => {
	let alphabet = /^[a-zA-Z]+ [a-zA-Z]+$/;
	if (G_name.value === "") {
		// alert("User Name is Empty");
		G_name.style.border = "2px solid red";
		G_name.focus();
		return false;
	} else {
		G_name.style.border = "2px solid #198754";
		document.querySelector("#G_name").focus();
	}

	if (G_name.match(alphabet)) {
		document.querySelector("#G_name").focus();
		return true;
	} else {
		G_name.style.border = "2px solid green";
		G_name.focus();
	}
};

const checkGender = () => {
    if (gender1.value === '') {
        gender1.style.border = "3px solid red";
        gender1.focus();
        return true;
    } else {
		gender1.style.border = "3px solid green";
		gender1.focus();
	}

}

const checkTitle = () => {
    if (title.value === '') {
        title.style.border = "3px solid red";
        title.focus();
        return true;
    } else {
		title.style.border = "3px solid green";
		title.focus();
	}

}

const checkGender2 = () => {
    if (gender2.value === '') {
        gender2.style.border = "3px solid red";
        gender2.focus();
        return true;
    } else {
		gender2.style.border = "3px solid green";
		gender2.focus();
	}

}


const checkResidence = () => {
    if (residence.value === '') {
        residence.style.border = "3px solid red";
        residence.focus();
        return true;
    } else {
		residence.style.border = "3px solid green";
		residence.focus();
	}

}

const checkDate = () => {
    if (date1.value === '') {
        date1.style.border = "3px solid red";
        date1.focus();
        return true;
    } else {
		date1.style.border = "3px solid green";
		date1.focus();
	}

}


const checkCountry = () => {
    if (country.value === '') {
        country.style.border = "3px solid red";
        country.focus();
        return true;
    } else {
		country.style.border = "3px solid green";
		country.focus();
	}

}

const checkNationality = () => {
    if (nationality.value === '') {
        nationality.style.border = "3px solid red";
        nationality.focus();
        return true;
    } else {
		nationality.style.border = "3px solid green";
		nationality.focus();
	}

}
