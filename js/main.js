// SELECT 

const select = document.querySelector("select");
const choices = new Choices(select, {
  searchEnabled: false,
});

// FORM VALIDATE

const form = document.getElementById("form");
const submitButton = document.querySelector(".button-form");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const nameRegex = /^[а-яёА-ЯЁ -]{2,30}$/;
const emailInput = form.elements["email"];
const nameInput = form.elements["name"];
const errorEmail = document.getElementById('error-email');
const errorName = document.getElementById('error-name');

function formSend() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (!emailRegex.test(emailInput.value)) {
      errorEmail.classList.remove('hidden');
      return;
    } else {
      errorEmail.classList.add('hidden');
    }

    if (!nameRegex.test(nameInput.value)) {        
      errorName.classList.remove('hidden');
      return;
    } else {
      errorName.classList.add('hidden');
    }
  });
}

// BUTTON ENABLE

function toggleSubmitButton() {
  if (select.value === '') {
    submitButton.disabled = true;
  } submitButton.disabled = false;
}

select.addEventListener('change', () => {
  toggleSubmitButton();
  formSend();
});


