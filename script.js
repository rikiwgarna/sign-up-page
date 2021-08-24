const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const signUpForm = document.querySelector('.signup-form');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const firstNameVal = firstName.value;
  const lastNameVal = lastName.value;
  const passwordVal = password.value;
  const emailVal = email.value;

  if (firstNameVal === '') {
    setErrorMsg(firstName, 'First Name cannot be empty');
  } else {
    setSucces(firstName);
  }

  if (lastNameVal === '') {
    setErrorMsg(lastName, 'Last Name cannot be empty');
  } else {
    setSucces(lastName);
  }

  if (emailVal === '') {
    setErrorMsg(email, 'Looks like this is not an email');
  } else {
    setSucces(email);
  }

  if (passwordVal === '') {
    setErrorMsg(password, 'Password cannot be empty');
  } else {
    setSucces(password);
  }
}

function setErrorMsg(input, message) {
  const formControl = input.parentElement;
  const notification = formControl.querySelector('.notification');

  formControl.classList.add('error');
  notification.innerHTML = message;
}

function setSucces(input) {
  const formControl = input.parentElement;

  formControl.classList.remove('error');
}
