const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
    isValid = form.checkValidity();
    // Style message for an error
    if (!isValid) {
      message.textContent = "Please fill out all fields";
      message.style.color = "red";
      return;
    }
    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.backgroundColor = "rgb(103, 206, 90)";
        password2.style.backgroundColor = "rgb(103, 206, 90)";        
    } else {
        passwordsMatch = false;
        message.textContent = "Make sure paswords match";
        message.style.color = "red";
        password1.style.backgroundColor = "rgb(206, 90, 90)";
        password2.style.backgroundColor = "rgb(206, 90, 90)";
        return
    }
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered !';
        message.style.color = "rgb(50, 255, 23)";
    }
}
    
const storeFormData = () => {
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    console.log(user);
}



const processFormData = (e) => {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
      storeFormData();
    }
}

form.addEventListener('submit', processFormData);