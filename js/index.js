const submit = document.getElementsByClassName('form-contact1')[0];
console.log(submit);

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    const fname = document.getElementById('name1').value;
    const email = document.getElementById('emailid1').value;
    const number = document.getElementById('phoneno1').value;



    console.log("hiiii.......");

    console.log(fname);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lalitkmr5100@gmail.com",
        Password: "6B2FE6CBC47F7EE2C2836EF6385F6FC224C7",
        To: 'lalitsinghal.marketingfundas@gmail.com',
        From: "lalitkmr5100@gmail.com",
        Subject: "This is the subject",
        Body: "Name: " + fname + "<br/> E-mail: " + email + "<br/> Phone: " + number
    }).then(
        message => alert("Thank you for registed your self our team contact soon")
    );

})