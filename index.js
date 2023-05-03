const express =require('express');
const app=express();
const cors = require('cors')
const port=process.env.PORT || 5000;

const categories =require('./data/category.json');

app.use(cors());

app.get('/category',(req,res)=>{
    console.log(categories);
    res.send(categories);

});
app.listen(port,()=>{
    console.log(`chef api is coming on port:${port}`)
})

app.listen()