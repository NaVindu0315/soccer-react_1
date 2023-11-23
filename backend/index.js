import express from 'express';

const app = express();
const port =3000;

app.get('/',(req,res) =>
res.send('our soccer application is running ${port}')

);
app.listen(port,()=>
    console.log('your soccer server is running on port ${port}')

);