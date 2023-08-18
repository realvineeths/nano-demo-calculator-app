const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    let {first,second}=req.body;
    console.log(first,second);
    const sum=first+second;
    res.json({ "result": sum });
});


baseRouter.post('/subtract', (req, res) => {
    let {first,second}=req.body;
    const sub=first-second;    
    res.json({ "result": sub });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});