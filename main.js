
document.addEventListener("DOMContentLoaded", function () {
  // ... (your existing code for form and table data)

  // Show modal when "Next" button is clicked
  var btn_done = document.querySelector(".btn_done");
 

});



let ticketsTable = document.getElementById("tickets-table");
let totalPayable = 0;

// Bind the `insertDataToTable` function to the `input` event of all input fields in the form
const inputFields = document.querySelectorAll("input");
inputFields.forEach((inputField) => {
  inputField.addEventListener("input", updateSummaryTable);
});

function updateSummaryTable() {
  // Get form data
  /*const name = document.querySelector(".details.personal input[type='text']").value;
  const contactNumber = document.querySelector(".details.personal input[type='number']").value;*/
  const date = document.querySelector(".details.personal input[type='date']").value;
  const Time = document.querySelector(".details.personal select").value;
  const foreignerAdult = parseInt(document.querySelector(".input-field:nth-of-type(5) input").value) || 0;
  const foreignerChild = parseInt(document.querySelector(".input-field:nth-of-type(6) input").value) || 0;
  const slAdult = parseInt(document.querySelector(".input-field:nth-of-type(7) input").value) || 0;
  const slChild = parseInt(document.querySelector(".input-field:nth-of-type(8) input").value) || 0;
  const infant = parseInt(document.querySelector(".input-field:nth-of-type(9) input").value) || 0;

  // Calculate the total number of tickets and total price
  const totalTickets = foreignerAdult + foreignerChild + slAdult + slChild + infant;
  const ticketPrices = [10, 5, 4, 2, 0]; // Prices for each ticket category in the same order
  const totalPrice = foreignerAdult * ticketPrices[0] +
                    foreignerChild * ticketPrices[1] +
                    slAdult * ticketPrices[2] +
                    slChild * ticketPrices[3] +
                    infant * ticketPrices[4];

  // Clear the existing table body
  ticketsTable.innerHTML = '';

  // Create a new row in the table
  const newRow = ticketsTable.insertRow();
  /*const nameCell = newRow.insertCell(0);
  const contactCell = newRow.insertCell(1);*/
  const dateCell = newRow.insertCell(0);
  const timeCell = newRow.insertCell(1);
  const guestsCell = newRow.insertCell(2);
  const ticketsCell = newRow.insertCell(3);
  const priceCell = newRow.insertCell(4);

  // Populate the cells with the form data
  /*nameCell.textContent = name;
  contactCell.textContent = contactNumber;*/
  dateCell.textContent = date;
  timeCell.textContent = Time;
  guestsCell.textContent = 'ForeignerAdult'+foreignerAdult+ 'ForeignerChild' +foreignerChild+ 'SlAdult'+slAdult+ 'SlChild'+slChild+ 'infant'+infant; // Update this if needed
  ticketsCell.textContent = totalTickets;
  priceCell.textContent = '$' + totalPrice;

  // Update the total payable
  totalPayable = totalPrice;
  document.getElementById("total-paypal").textContent = '$' + totalPayable;
}




const continueBtn = document.getElementById('con_btn');

continueBtn.addEventListener('click', () => {
/*const name = document.getElementById('name').value;
const contactNumber = document.getElementById('con_num').value;*/
const selectedDate = document.getElementById('date').value;
const duration = document.getElementById('duration').value;
const slAdult = parseInt(document.getElementById('sl-adult').nextElementSibling.value);
const slChild = parseInt(document.getElementById('sl-child').nextElementSibling.value);
const foreignerAdult = parseInt(document.getElementById('foreigner-adult').nextElementSibling.value);
const foreignerChild = parseInt(document.getElementById('foreigner-child').nextElementSibling.value);
const infant = parseInt(document.getElementById('infant').nextElementSibling.value);

const userInputs = {
/*name,
contactNumber,*/
selectedDate,
duration,
slAdult,
slChild,
foreignerAdult,
foreignerChild,
infant,
Total: '$' +totalPayable,
};

localStorage.setItem('userInputs', JSON.stringify(userInputs));

window.location.href = 'details.html';
});


