const router=require('express').Router()
const Products=require("../models/products")

router.post("/search", async (req,res)=>{
    try {
        let hits = await Products.find({title: { $regex: '(?i).*' + req.body.title + '.*' } })
            .populate('owner category')
            .populate("reviews","rating")
            .exec()
        
        res.json({
            success:true,
            hits:hits
        })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})


module.exports=router