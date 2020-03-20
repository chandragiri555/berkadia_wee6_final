const express=require('express');
const app=express();
const details=require('./routes/details');
const userlogin=require('./routes/userlogin');
app.use(express.json());
app.use(details);

app.listen(3000,()=>{
    console.log('server is running on 3000');
})
