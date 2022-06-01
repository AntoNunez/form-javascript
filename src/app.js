window.onload = function() {
  let form = document.querySelector("form");
  let alert = document.getElementById("alert");
  alert.style.display = "none";

  form.addEventListener("submit", e => {
    e.preventDefault();

    let Card = /^[0-9]{16}$/;
    let CVC = /^[0-9]{1,3}$/;
    let Amount = /^[0-9]{1,15}$/;
    let FirstName = /^[a-zA-Z\s]+$/;
    let LastName = /^[a-zA-Z\s]+$/;
    let City = /^[a-zA-Z\s]+$/;
    let State = /^[a-zA-Z\s]+$/;
    let PostalCode = /^[0-9]{7}$/;
    let Messaje = /^[(?=^.$)((?=.*\d)|(?=.*\W+))(?![.\n)(?=.*A-Z)(?=.*a-z)]+$/;

    if (!Card.test(form.card.value)) {
      form.card.classList.add("is-invalid");
      form.card.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.card.classList.remove("is-invalid");
      form.card.style.background = "none";
      alert.style.display = "none";
    }

    if (!CVC.test(form.cvc.value)) {
      form.cvc.classList.add("is-invalid");
      form.cvc.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.cvc.classList.remove("is-invalid");
      form.cvc.style.background = "none";
      alert.style.display = "none";
    }
    if (!Amount.test(form.amount.value)) {
      form.amount.classList.add("is-invalid");
      form.amount.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.amount.classList.remove("is-invalid");
      form.amount.style.background = "none";
      alert.style.display = "none";
    }
    if (!FirstName.test(form.firstname.value)) {
      form.firstname.classList.add("is-invalid");
      form.firstname.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.firstname.classList.remove("is-invalid");
      form.firstname.style.background = "none";
      alert.style.display = "none";
    }
    if (!LastName.test(form.lastname.value)) {
      form.lastname.classList.add("is-invalid");
      form.lastname.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.lastname.classList.remove("is-invalid");
      form.lastname.style.background = "none";
      alert.style.display = "none";
    }
    if (!City.test(form.city.value)) {
      form.city.classList.add("is-invalid");
      form.city.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.city.classList.remove("is-invalid");
      form.city.style.background = "none";
      alert.style.display = "none";
    }

    if (!PostalCode.test(form.postal.value)) {
      form.postal.classList.add("is-invalid");
      form.postal.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.postal.classList.remove("is-invalid");
      form.postal.style.background = "none";
      alert.style.display = "none";
    }

    if (!Messaje.test(form.message.value)) {
      form.message.classList.add("is-invalid");
      form.message.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.message.classList.remove("is-invalid");
      form.message.style.background = "none";
      alert.style.display = "none";
    }
    if (!State.test(form.state.value)) {
      form.state.classList.add("is-invalid");
      form.state.style.background = "#e5816a";
      alert.style.display = "block";
    } else {
      form.state.classList.remove("is-invalid");
      form.state.style.background = "none";
      alert.style.display = "none";
    }
  });
};
