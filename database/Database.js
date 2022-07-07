// const dbURI = 'mongodb+srv://Vikas9118:Vikassonisvm@noteweb.lrp2c.mongodb.net/Noteweb?retryWrites=true&w=majority';
const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/Vikas';

mongoose.connect("mongodb://localhost:27017/Vikas").then(()=>{
  console.log('connection succesful');
}).catch((err)=>{
  console.log('No connection');
  console.log(err);
});
