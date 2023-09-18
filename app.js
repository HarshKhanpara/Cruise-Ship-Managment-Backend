const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const corsOptions = require('./cors-options');
const authRoutes = require('./routes/auth');

app.use(cors(corsOptions));


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

connectDB();


app.use('/auth', authRoutes);       

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}
);


