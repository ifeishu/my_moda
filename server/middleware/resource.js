module.exports=options=>{
    const jwt=require('jsonwebtoken')
    return async (req,res,next) => {
        const modelName=require(`inflection`).classify(req.params.resource)
    req.Model=require(`../models/${modelName}`)
    next()}
}