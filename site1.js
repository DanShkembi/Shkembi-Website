document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Perform form validation here

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // You can use this section to send form data to your server or display a success message
    alert('Thank you for your message!');
});
