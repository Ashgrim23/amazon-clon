const router=require('express').Router()
const Cart=require("../models/cart")
const Product=require("../models/products")
const verifyToken=require('../middlewares/verify-token')

router.get('/cart',verifyToken,async(req,res)=>{
    try {
        const tmpCart=await Cart.findOne({owner : req.decoded._id})        
        let cart=[]
        
        if (tmpCart){                            
                let ids = tmpCart.products.map(item=>item._id)
                cart=await Product.find({'_id':{$in:ids}})
                .populate('owner category')
                .populate("reviews","rating")
                .lean()
                .exec()            
                tmpCart.products.forEach((item,idx)=>{
                    cart[idx].quantity=item.quantity
                })    
        }
        res.json({
            success:true,
            cart:cart
        }) 
        
        
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
})


router.post('/cart',verifyToken,async(req,res)=>{
    try {
        const res =await Cart.updateOne({owner:req.decoded._id},{products:req.body},{upsert:true} )
        res.json({
            success:true,
            message:"cart saved"
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
})

module.exports=router