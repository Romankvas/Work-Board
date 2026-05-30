import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://romankvas27b_db_user:ZwmRD1RC3zZyDUyA@cluster0.s6vmcby.mongodb.net/?appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});