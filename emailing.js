var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"kalumbasml@gmail.com",
        pass:"$"
    }
});

var mailoptions = {
    from:"kalumbasml@gmail.com",
    to:"kalumbasml27@gmail.com",
    subject:"Its a node message from Sam",
    text:"Am using nodejs"
}

transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Message is sent")
    }
})
