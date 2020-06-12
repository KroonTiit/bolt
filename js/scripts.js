var input = document.querySelector(".phone");
window.intlTelInput(input, {
  // any initialisation options go here
});

function checkSubmit() {
  if(document.getElementById('terms').checked) {
     return true; 
  } else {
    alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
    return false;
  }
}