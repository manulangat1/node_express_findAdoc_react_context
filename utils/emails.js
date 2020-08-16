const nodemailer = require('nodemailer')



exports.sendEmail = async (mail) => {
    const transport = {
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    }
    //transported fn 
    const transporter = await nodemailer.createTransport(transport)
    await transporter.verify((error,success) => {
        if(error){
            console.log(error)
        } else {
            console.log('user ready to send email'.green.bold)
        }
    })

    const mails = {
        from:process.env.EMAIL,
        to:`${mail.to}`,
        subject:`${mail.subject}`,
        text:`${mail.text}`
    }
    return await transporter.sendMail(mails,(err,data) => {
        if (err){
            console.log(`err:${err}`.red)
        } else {
            console.log("Sent Successfully".green.bold)
        }
    })
}