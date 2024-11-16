const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://nirbhaysingh9029909678:Nirbhay@contacts.7qayg.mongodb.net/?retryWrites=true&w=majority&appName=Contacts',{useNewUrlParser:true})

const contactSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    company:String,
    job:String,
})

const Contact=mongoose.model('Contact',contactSchema);

app.post('/contacts',async(req,res)=>{
    const contact=new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
});

app.get('/contacts',async(req,res)=>{
    const contacts=await Contact.find();
    res.send(contacts);
})

app.put('/contacts/:id',async(req,res)=>{
    const contact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(contact);
})

app.delete('/contacts/:id',async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).send();
})

app.listen(5000,()=>console.log('Server runing on https://localhost:5000'));