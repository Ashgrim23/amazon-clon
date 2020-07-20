const router=require('express').Router()
const Product=require("../models/products")
const deletePhoto=require("../middlewares/delete-photo")
const upload=require("../middlewares/upload-photo")

//POST request, crea un nuevo producto
// admin app not online, no need for this endpoint
// router.post('/products',upload.single("photo"), async (req,res)=>{
//     try{
//         let product= new Product()
//         product.owner=req.body.ownerID
//         product.category=req.body.categoryID
//         product.title=req.body.title
//         product.description=req.body.description
//         product.photo=req.file.location
//         product.price=req.body.price
//         product.stockQuantity=req.body.stockQuantity  
        
//         await product.save()
//         res.json({
//             success:true,
//             message: "Grabado exitosamente"
//         })
//     } catch(err){
//         res.status(500).json({
//             success:false,
//             message: err.message
//         })
//     }
// })

//GET request, obtiene todos los productos
router.get('/products',async (req,res)=>{
    try {
        let products=await Product.find()
            .populate('owner category')
            .populate("reviews","rating")
            .exec()
         res.json({
            success:true,
            products: products
         })
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
        
    }
})

//GET request, obtiene un solo producto
router.get('/products/:id',async(req,res)=>{
    try {
        let product=await Product.findOne({_id: req.params.id})
            .populate('owner category')
            .populate("reviews","rating")
            .exec();
        
        res.json({
            success:true,
            product:product
        })
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })        
    }
})

// //PUT request, actualiza un solo producto
// admin app not online, no need for this endpoint
// router.put('/products/:id',[ upload.single("photo"),deletePhoto] ,async(req,res)=>{
//     try {        
//         let product=await Product.findOne({_id:req.params.id})
        
//         if (product){
//             if (req.body.title) product.title=req.body.title
//             if (req.body.description) product.description=req.body.description
//             if (req.file) product.photo=req.file.location
//             if (req.body.price) product.price=req.body.price
//             if (req.body.stockQuantity) product.stockQuantity=req.body.stockQuantity 
//             if(req.body.ownerID) product.owner=req.body.ownerID
//             if (req.body.categoryID) category=req.body.categoryID
//         }       

//         await product.save()
//         res.json({
//             success:true,
//             updatedProduct:product
//         })
        
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({
//             success:false,
//             message:err.message
//         })    
//     }
// })

// DELETE request, borra 1 producto
// admin app not online, no need for this endpoint
// router.delete('/products/:id',deletePhoto, async (req,res)=>{
//     try {        
//         let product=await Product.findOneAndDelete({_id:req.params.id})
//         if (product){
//             res.json({
//                 success:true,
//                 deletedProduct:product
//             })
//         }        
        
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message:err.message
//         })   
//     }
// })

module.exports=router