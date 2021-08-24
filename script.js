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
    setErrorMsg(email, 'Email cannot be empty');
  } else if (!isEmail(emailVal)) {
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

function isEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Empty the input when refresh the page
window.onload = function () {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
};
