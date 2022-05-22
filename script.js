/* Alerte submit en JavaScript */
const message =
  "Votre message à bien été pris en compte nous reviendrons vers vous trés prochainement.";
/* console.log(message); */
document
  .getElementById("contact-form")
  .addEventListener("submit", function name(event) {
    event.preventDefault();
    alert(message);
  });
/* ------------------------------------------------------- */
