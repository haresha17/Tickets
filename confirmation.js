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