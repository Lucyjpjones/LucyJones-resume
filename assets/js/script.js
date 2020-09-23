// Code taken from EmailJS.com with small personal amendments
// EmailJS sendmail function with 'service ID', 'template ID', 'template parameters'
// Template parameters linked to name attributes in form template
function sendMail(contactForm) {
  emailjs
    .send("lucyjpjones@gmail.com", "lucy", { 
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      project_subject: contactForm.subject.value,
      project_request: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        alert("MESSAGE SENT", response); // If message is sent successfully, alert "message sent"
      },
      function (error) {
        alert("SENDING FAILED", error); // If message fails to send, alert "sending failed"
      }
    );
  return false; // To block from loading a new page
}