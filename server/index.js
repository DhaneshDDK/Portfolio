const express = require('express');
const app = express();
app.use(express.json());

const MailSender = require('./Mail/MailSener')
const {mailTemplate} = require('./Mail/MailSendingTemplate')
const {mailTemplateToMe} = require('./Mail/MailToMe')

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials : true
  }));

require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is up on port number ${port}`);
})

app.get('/',(req,res)=>{
    res.json({
        message : "Welcome to Dhanesh portfolio api",
    })
})

app.post('/sendMail', async (req,res)=>{
    const {firstName, lastName, email, subject, message} = req.body;
    
    try {
        const emailResponse1 = await MailSender(email , "Mail Sent Successfully", mailTemplate("Message sent successfully", 
        firstName, lastName, email, subject, message));

        const emailResponse2 = await MailSender(process.env.MAIL_USER , "Mail from portfolio", mailTemplateToMe("Message from portfolio", 
        firstName, lastName, email, subject, message));

        
    } catch (error) {
        console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message, 
			});
    }

    return res.status(200).json({
        success: true,
        message: "Mail sent successfully",
    });

})