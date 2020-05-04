module.exports=options=>{
    const jwt=require('jsonwebtoken')
    const AdminUser=require('../models/AdminUser')

    return async(req,res,next)=>{
        const token=String(req.headers.authorization || '').split(' ').pop()
        if(!token){
            return res.status(401).send({
                message:'请先登录'
            })
        }
        const {id}=jwt.verify(token,req.app.get('secret'))
        
        req.user=await AdminUser.findOne({id})
        // if(!req.user){
        //     return res.status(401).send({
        //         message:'请先登录'
        //     })
        // }
        await next() 
    }
}