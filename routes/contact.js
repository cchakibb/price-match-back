require('dotenv').config();
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


var transport = {
    host: 'malaprince@hotmail.fr', // Don’t forget to replace with the SMTP host of your provider
    service:"Gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'malaminebah91@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form tesr',
    text: content
  }

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
      transporter.sendMail({
    	from: "<your email address>",
    	to: email,
    	subject: "Submission was successful",
    	text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
  	}, function(error, info){
    	if(error) {
      	console.log(error);
    	} else{
      	console.log('Message sent: ' + info.response);
    	}
    }
      )}
})
});

module.exports =router;