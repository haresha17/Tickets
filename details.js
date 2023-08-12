

  const countryCodeDropdown = document.getElementById('countryCode');

// Fetch country data from the Rest Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Populate the dropdown with country codes and flags
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.cca2;
      option.textContent = `${country.name.common} (${country.cca2})`;
      option.style.backgroundImage = `url('${country.flags.png}')`;
      countryCodeDropdown.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching country data:', error));

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

   const continueButton = document.getElementById("con_btn");

continueButton.addEventListener("click", function (event) {
  event.preventDefault();

  const formData = {
    fullName: document.getElementById("fullName").value,
    mobileNumber: document.getElementById("mobileNumber").value,
    email: document.getElementById("email").value,
    gender: document.getElementById("gender").value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "payment.html";
});



var btn_done = document.querySelector(".btn_done");
btn_done.addEventListener("click", function (){
  window.location.href = "tickets.html";
})
