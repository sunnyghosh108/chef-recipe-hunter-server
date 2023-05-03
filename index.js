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

app.get('/category/:id',(req,res)=>{
    const id =req.params.id;
    const item=categories.find((pd)=>pd.id==id)
   res.send(item);
});
app.listen(port,()=>{
    console.log(`chef api is   port:${port}`)
})

app.listen()