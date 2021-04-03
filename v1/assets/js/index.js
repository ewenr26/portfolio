import 'regenerator-runtime/runtime'

console.log("Test");
const sendMailForm = document.querySelector('#sendMailForm');
const buttonSendMailForm = sendMailForm.querySelector('button[type="submit"]');

buttonSendMailForm.addEventListener('click', async function(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/mail');
    console.log(await response.json())
})