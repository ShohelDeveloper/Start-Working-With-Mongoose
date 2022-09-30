const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database Connected')
})
.catch((e) =>{
    console.log(e)
})

const uri = "mongodb+srv://ShohelDeveloper:D!TwYSqeH2uyPbD@cluster0.82mknop.mongodb.net/?retryWrites=true&w=majority"