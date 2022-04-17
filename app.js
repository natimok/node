const express= require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello');

})
app.listen(5012,()=>{
    console.log("server listening to port 5000");
})
