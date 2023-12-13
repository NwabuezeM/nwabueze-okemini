const form = document.getElementById('contactForm');
const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const address = document.getElementById("location");
const description = document.getElementById("description");
const acceptance = document.getElementById("acceptance");
function sendEmail() {
  const messageBody = `Name: ${name.value}<br> Number: ${number.value}<br> Email: ${email.value}<br> Location: ${address.value}<br> Deadline: ${deadline.value}<br> Project Description: ${description.value}<br>`;
  console.log("clicked");
  Email.send({
    SecureToken: "0d6de75b-a407-4b67-a40e-18db3a4173a4",
    To : 'okemininwabueze9@gmail.com',
    From : "okemininwabueze9@gmail.com",
    Subject : "Message from Nwabueze Okemini Hire me form",
    Body : messageBody
}).then(
  message => {
    if(message == 'OK') {
      Swal.fire({
        title: "Success!",
        text: "Message was successfully sent and we will get back to you soon",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Ooops!",
        text: "An error occured, please try again later",
        icon: "error"
      });
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for(const item of items) {
    if(item.value.trim() == "") {
      item.classList.add("error");
      item.parentElement.classList.add("empty");
    }

    if (items[1].value.trim() == "") {
      checkNumber();
    }

    items[1].addEventListener("keyup", () => {
      checkNumber();
    })

    item.addEventListener("keyup", () => {
      if(item.value.trim() != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("empty");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("empty");
      }
    })
    if (items[2].value.trim() == "") {
      checkEmail();
    }

    items[2].addEventListener("keyup", () => {
      checkEmail();
    })

    item.addEventListener("keyup", () => {
      if(item.value.trim() != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("empty");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("empty");
      }
    })
  }
}

function checkNumber() {
  const numberRegEx = /^\+?[\d]{10,14}$/;
  const numberError = document.getElementById("numberError");
  if (!number.value.trim().match(numberRegEx)) {
    number.classList.add("error");
    number.parentElement.classList.add("empty");

    if (number.value.trim() !== "") {
      numberError.innerText = "Enter a valid phone number";
    } else {
      numberError.innerText = "Enter your phone number";
    }
  } else {
    number.classList.remove("error");
    number.parentElement.classList.remove("empty");
  }
}
function checkEmail() {
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailError = document.getElementById("emailError");
  if (!email.value.trim().match(emailRegEx)) {
    email.classList.add("error");
    email.parentElement.classList.add("empty");

    if (email.value.trim() !== "") {
      emailError.innerText = "Enter a valid email address";
    } else {
      emailError.innerText = "Enter your email address";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("empty");
  }
}

function checkDeadline() {
  const deadline = document.getElementById("deadline");
  const deadlineError = document.getElementById("deadlineError");
  if (deadline.value == "") {
    deadlineError.style.display = "block";
  } else {
    deadlineError.style.display = "none";
  }
  deadline.addEventListener("change", () => {
    if (deadline.value != "") {
      deadlineError.style.display = "none";
    } else {
      deadlineError.style.display = "block";
    }
  })
}


function checkAcceptance() {
  const acceptance = document.getElementById("acceptance");
  const acceptanceError = document.getElementById("acceptanceError");
  const acceptanceBorder = document.querySelector(".acceptance")
  if (!acceptance.checked) {
    acceptanceError.style.display = "block";
    acceptanceBorder.classList.add("acceptance-error");
  } else {
    acceptanceError.style.display = "none";
    acceptanceBorder.classList.remove("acceptance-error");
  }
  acceptance.addEventListener("change", () => {
    if (acceptance.checked) {
      acceptanceError.style.display = "none";
      acceptanceBorder.classList.remove("acceptance-error");
    } else {
      acceptanceError.style.display = "block";
      acceptanceBorder.classList.add("acceptance-error");
    }
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  checkDeadline();
  checkAcceptance();
  if (!name.classList.contains("error") && !number.classList.contains("error") && !email.classList.contains("error") && deadline.value != "" && acceptance.checked) {
    sendEmail();

    form.reset();
    return false;
  }
});