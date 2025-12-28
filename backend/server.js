const express = require('express');

db = require('./config/database');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});