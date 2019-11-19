const express = require("express")

const app=express()

require('./routes/admin')(app)//引用app函数
require('./plugins/db')(app)//引用数据库

app.listen(3000,()=>{
    console.log('http://localhost:3000');
});