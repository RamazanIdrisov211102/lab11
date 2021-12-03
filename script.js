const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e=> {
	e.preventDefault();

	var emailValue = email.value.trim();
	var passwordValue = password.value.trim();
	var pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	if (emailValue === ''){
		errorFunc(email, 'Email cannot be empty')
	}
	else if (!emailValue.match(pattern)) {
		errorFunc(email, 'Looks like not emai;')
	}
	else {
		successFunc(email)
	}

	if (passwordValue === ''){
		errorFunc(password, 'Password cannot be empty')
	}
	else {
		successFunc(password)
	}
})

function errorFunc(req, massage){
	const formControl = req.parentElement;
	const span = formControl.querrySelector('span');
	span.innerText = massage;
	req.className += 'error';
	span.className += 'error-text';
	if (req !== email){
		req.value = ' ';
	}
	else{
		req.style.color = "hsl(0, 100%, 74%)";
	}
}

function successFunc(req){
	req.className += 'success'
}