const express = require("express");
const dotenv = require("dotenv");


const app = express();
dotenv.config()
const PORT  = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Crud Application")
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})