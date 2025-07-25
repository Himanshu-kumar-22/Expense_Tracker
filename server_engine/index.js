const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

//Redirect all requests which are coming at /api/users path
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})
