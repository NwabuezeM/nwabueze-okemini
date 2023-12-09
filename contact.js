

const enquiryBtn = () => {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const enquiry = document.getElementById("message").value;

    const body = `Name: ${name} <br> Number: ${number} <br> Email: ${email} <br> Enquiry: ${enquiry}`;

     Email.send({
        SecureToken : "0d6de75b-a407-4b67-a40e-18db3a4173a4",
        To : 'okemininwabueze9@gmail.com',
        From : "okemininwabueze9@gmail.com",
        Subject : "Message from the Nwabueze Okemini Contact Form",
        Body : body
    }).then(
      message => alert(message)
    );
  } 