const express = require('express');
const router =  express.Router();
var nodemailer = require('nodemailer');


const Tasks = require('../models/tasks');
// Express Mail







router.post('/:id', async (req,res) =>{
  const task = await Tasks.findById(req.params.id); //arquitectura y toma los datos task.title etc

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raptoream@gmail.com',
      pass: '23121984'
    }
  });

  var mailOptions = {
      to: task.email,
     // subject: req.body.subject,
       subject: task.title,
      text: task.description
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message Sent: '+ info.response);
    res.redirect('/');
  });
});

router.get('/:id', async (req,res) =>{
  const task = await Tasks.findById(req.params.id);
  res.json(task);
});

module.exports = router;