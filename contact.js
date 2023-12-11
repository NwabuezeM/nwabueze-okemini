const formSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const acceptance = document.getElementById("acceptance");
  const acceptanceError = document.getElementById("acceptanceError");

  if (name.value.trim() == "") {
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid red";
    return false;
  } else {
    name.nextElementSibling.style.display = "none";
    name.style.border = "none";
  }

  if (!number.value.match(/^(\+\d{1,3}\s?)?(\(\d{1,4}\))?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/) || number.value.trim() == "") {
    number.nextElementSibling.style.display = "block";
    number.style.border = "1px solid red";
    return false;
  } else {
    number.nextElementSibling.style.display = "none";
    number.style.border = "none";
  }

  if (!email.value.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/) || email.value.trim() == "") {
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "none";
  }

  if (message.value.trim() == "") {
    message.nextElementSibling.style.display = "block";
    message.style.border = "1px solid red";
    return false;
  } else {
    message.nextElementSibling.style.display = "none";
    message.style.border = "none";
  }

  if (acceptance.checked == false) {
    acceptanceError.style.display = "block";
    acceptanceError.innerHTML = "Please accept all terms and conditions";
    acceptance.style.border = "1px solid red";
    return false;
  } else {
    acceptanceError.style.display = "none";
    acceptance.style.border = "none";
  }

  // If all conditions are met, call the enquiryBtn function
  enquiryBtn();
};

const enquiryBtn = () => {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const enquiry = document.getElementById("message").value;

  const body = `Name: ${name} <br> Number: ${number} <br> Email: ${email} <br> Enquiry: ${enquiry}`;

  Email.send({
    SecureToken: "0d6de75b-a407-4b67-a40e-18db3a4173a4",
    To: "okemininwabueze9@gmail.com",
    From: "okemininwabueze9@gmail.com",
    Subject: "Message from the Nwabueze Okemini Contact Form",
    Body: body,
  }).then((message) => alert(message));
};