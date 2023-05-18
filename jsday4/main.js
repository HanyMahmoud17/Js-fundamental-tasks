const fullName = document.getElementById('fullname');
const nameValidation = document.getElementById('name-validation');

fullName.addEventListener('blur', () => {
	if (fullName.value.length < 3) {
		nameValidation.style.display = 'inline';
		fullName.style.border = 'solid 3px red';
		fullName.focus();
		fullName.select();
	} else {
		nameValidation.style.display = 'none';
		fullName.style.border = '';
	}
})

const repeatPassword = document.getElementById('repeatpassword');
const passwordValidation = document.getElementById('password-validation');

repeatPassword.addEventListener('blur', () => {
	if (repeatPassword.value !== document.getElementById('password').value) {
		passwordValidation.style.display = 'inline';
		repeatPassword.style.border = 'solid 3px red';
		repeatPassword.focus();
		repeatPassword.select();
	} else {
		passwordValidation.style.display = 'none';
		repeatPassword.style.border = '';
	}
})




const img = document.createElement('img');
		
		// Set the image source
		img.setAttribute('src', 'C:\Users\LAPTOP WORLD\Desktop\jsday4\Screenshot (22).png');
		
		// Append the image to the div
		const container = document.getElementById('image-container');
		container.appendChild(img);
		
		// Alert the number of child nodes
		alert(container.childNodes.length); //output4
		
		// Remove the added image
		container.removeChild(img);