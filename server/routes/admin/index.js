module.exports=app=>{
    const express=require('express')
    const router=express.Router()//子路由

    router.post('/categories',async(req,res)=>{
        //把数据存进去数据库
    })

    app.use('/admin/api',router)//挂载子路由
}