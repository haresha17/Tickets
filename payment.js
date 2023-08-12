const mk = localStorage.getItem("formData");
const lov = JSON.parse(mk);
   
   if (lov) {
       for (const key in lov) {
           const markup = `<tr>
           <th>${key}</th><td>${lov[key]}</td>
           </tr>`;
           document.getElementById("tab1").innerHTML += markup;
        
        }
    }

const dot = localStorage.getItem("userInputs");
const at = JSON.parse(dot);
  
  if (at) {
      for (const key in at) {
          const markup = `<tr>
          <th>${key}</th><td>${at[key]}</td>
          </tr>`;
          document.getElementById("tab1").innerHTML += markup;
       
       }
   }

   
   
    /*const form = document.querySelector("form");
   
    const btn_continue = document.getElementById("btn_done");
   btn_continue.addEventListener("click", function(event) {
        // Validate the form data
     const cardNumber = document.querySelector(".card-number-input").value;
     const cardHolder = document.querySelector(".card-holder-input").value;
     const month = document.querySelector(".month-input").value;
     const year = document.querySelector(".year-input").value;
     const cvv = document.querySelector(".cvv-input").value;
   
     if (cardNumber.length != 16) {
       event.preventDefault();
       alert("Please enter a valid credit card number.");
       return;
     } else if (cardHolder.length < 2) {
       event.preventDefault();
       alert("Please enter your full name.");
       return;
     } else if (!month.match(/^[0-9]{1,2}$/)) {
       event.preventDefault();
       alert("Please enter a valid month.");
       return;
     } else if (!year.match(/^[0-9]{2}$/)) {
       event.preventDefault();
       alert("Please enter a valid year.");
       return;
     } else if (cvv.length != 4) {
       event.preventDefault();
       alert("Please enter a valid CVV number.");
       return;
     }
   
   
   
   
     window.location.href = "confirmation.html";
   });*/

var btn_done = document.querySelector(".btn_done");
btn_done.addEventListener("click", function (){
  window.location.href = "tickets.html";
})

const continueButton = document.getElementById("con_btn");
continueButton.addEventListener("click", function () {
  window.location.href = "confirmation.html";
});



var btn_done = document.querySelector(".btn_done");
btn_done.addEventListener("click", function (){
  window.location.href = "details.html";
})
   