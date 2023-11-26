import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express();
const port = 4000;

// Body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

///cors setup
app.use(cors());


routes(app);

// Replace this placeholder with your actual MongoDB connection string
const connectionString = "mongodb+srv://navindu.kfqv1l8.mongodb.net/";

// Connect to MongoDB using the latest recommended connection string format
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your MongoDB connection error handling
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define your MongoDB connection success message
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Your application routes and logic go here

app.get('/', (req, res) => {
  res.send('Our hutts pplication is running on port ${port}');
});

app.listen(port, () => {
  console.log(`Your soccer server is running on port ${port}`);
});


















/*import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const Port =3000;

//this is the mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://navindu0315:Navindu99@navindu.kfqv1l8.mongodb.net/',
{
    useNewUrlParser : true,
    useUnifiedTopology :true
}
);

//body parser setup
app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());








app.get('/',(req,res) =>
res.send('our soccer application is running ${Port}')

);
app.listen(Port,()=>
    console.log('your soccer server is running on port ${Port}')

);*/