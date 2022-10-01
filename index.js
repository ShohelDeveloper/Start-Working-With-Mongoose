const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,'minimum 3 chars'],
        maxlength:[10,'minimum 3 chars'],
    },
   lastName:String,
   email:String,
   age:Number,
   bio:String,
   single:Boolean
})

const Person = mongoose.model('Person',personSchema)

mongoose.connect("mongodb+srv://ShohelRana:VD3aTF2Vkyiz6nfE@cluster0.82mknop.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(async() => {
    console.log('Database Connected')
    // const person = new Person({
    //     firstName:'Sabana',
    //     lastName:'Jannat',
    //     email:"ripon334t5r@gmail.com",
    //     age:"20",
    //     bio:"I am a Back-End Developer",
    //     single:'true'
    // })

    // for faield validation
    const person = new Person({firstName:'11'})
    await person.save()
    console.log('Person Created')
    console.log(person)

    // find
    // const people =await person.find({lastName:'Sabana'})
    // conosle.log(people) 
})
.catch((e) =>{
    console.log(e)
})
.finally(() => {
    mongoose.connection.close()
})


