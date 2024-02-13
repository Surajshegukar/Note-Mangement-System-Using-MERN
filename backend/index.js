const connectDB = require('./db');
const express = require('express');
const port = 3000;
const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.get("/",(req,res)=>{
    res.send("Hello Welcome to /Home.");
})
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}.`);
})

