// variables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
resetBtn = document.getElementById('resetBtn'),
sendEmailForm = document.getElementById('email-form');



// event listners

removeEventListeners();

function removeEventListeners(){
   // app init
   document.addEventListener('DOMContentLoaded', appInit);

// validate the form
email.addEventListener('blur', validateField);
subject.addEventListener('blur', validateField);
message.addEventListener('blur', validateField);

// send email & reset botton
sendEmailForm.addEventListener('submit', sendEmail);
resetBtn.addEventListener('click', resetForm);
}


//function

// app initilazation
function appInit(){
  // disable the sent botton on load
  sendBtn.disabled = true;
}
function sendEmail(e){
  e.preventDefault();

  // show the spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';

  // show the image
  const sendEmailImg = document.creatElement('img');
  sendEmailImg.src = ' img/mail.gif';
  sendEmailImg.style.display = 'block';

  //hide spinner then show the send email image
  setTimeout(function() {
    // hide the spinner
    spinner.style.display = 'none';

    // show the image
    document.querySelector('#loaders').appendChild(sendEmailImg);

    // after 5 second , hide the image  and reset the form
    setTimeout(fuction() {
       sendEmailForm.reset();
       sendEmailImg.remove();

    }, 5000);
  }, 3000 );
}
 // validate the field
 function validateField(){
   let errors;
 }
if(this.type === 'email'){
  validateEmail(this);
}

// both will from error, then check if there're any error
errors = document.querySelectorAll('.error');

// check that the inputs are not empty
if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
  if(errors.length === 0) {
    // the botton should be enable
    sendBtn.disabled = false;
  }
}
// validate the length of the fields
function validateLength(field) {
if (field.value.length > 0) {
field.style.borderBottonColor = 'green';
field.classList.remove('error');
}else {
 field.style.borderBottonColor = 'red';
 field.classList.add('error');
}
}
// validate email checks for o in the value
function validateEmail(field) {
let emailText = field.value;
// check it the emailtext contains the o sign
if(emailText.indexOf('0') !== -1) {
field.style.borderBottonColor = 'green';
field.classList.remove('error');
} else {
field.style.borderBottonColor = 'green';
field.classList.remove('error');
}

}

// reset the form
function resetForm() {
sendEmailForm.reset();
}


 