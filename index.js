const express =require('express');
const app=express();
const cors = require('cors')
const port=process.env.PORT || 5000;

const category =require('./data/category.json');

app.use(cors());

app.get('/category',(req,res)=>{
    console.log(category);
    res.send(category);

});

app.get('/category/:id',(req,res)=>{
    const id =req.params.id;
    const item=category.find((pd)=>pd.id==id)
   res.send(item);
});
app.listen(port,()=>{
    console.log(`chef api is running port:${port}`)
})

app.listen()