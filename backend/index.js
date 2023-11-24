import express from 'express';

const app = express();
const Port =3000;

app.get('/',(req,res) =>
res.send('our soccer application is running ${Port}')

);
app.listen(Port,()=>
    console.log('your soccer server is running on port ${Port}')

);