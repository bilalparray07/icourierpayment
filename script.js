const bank = document.getElementById("bank");
const phone = document.getElementById("phone");
const amount = document.getElementById("amt");
const upi = document.getElementById("upi");
const phoneNumber = "917864812665";
const submitBtn = document.getElementById("submitBtn");
const serviceId = "service_6s9yd6j";
const templateId = "template_co2v5lh";

// mail function
function sendMail(event) {
  event.preventDefault();

  const bankValue = bank.value;
  const phoneValue = phone.value;
  const upiValue = upi.value;
  const amountValue = amount.value;
  const message = `Bank: ${bankValue}\nPhone: ${phoneValue}\nAmount: ${amountValue}\nUPI: ${upiValue}`;
  console.log("Bank:", bankValue);
  console.log("Phone:", phoneValue);
  console.log("UPI:", upiValue);
  console.log("Amount:", amountValue);

  var params = {
    message: message,
  };

  // send email
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Clear form fields
      bank.value = "";
      phone.value = "";
      amount.value = "";
      upi.value = "";

      const whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;
      window.open(whatsappLink, "_blank");
    })
    .catch((e) => {
      console.log(e);
    });
}

// event listener on submit button
submitBtn.addEventListener("click", sendMail);

// bootstrap validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
