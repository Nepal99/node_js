var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user:'nepalreddy.ch@gmail.com',
		pass:'indiausa'
	}
});

var mailOptions = {
	from: 'nepalreddy.ch@gmail.com',
	to: 'nepalreddy.chityala@gmail.com',
	subject: 'Sending Email using Node.JS',
	text: 'that was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	} else{
		console.log('Email sent: ' + info.response);
	}
});