const router=require('express').Router()
const Address=require("../models/address")
const verifyToken=require("../middlewares/verify-token")
const axios=require("axios")
const User=require("../models/user")


router.post("/address",verifyToken,async(req,res)=>{
    try {
        let address=new Address()
        with (address){
            user=req.decoded._id;
            country=req.body.country;
            fullName=req.body.fullName;
            streetAddress=req.body.streetAddress1+" "+req.body.streetAddress2;
            city=req.body.city   
            state=req.body.state
            zipCode=req.body.zipCode;
            phoneNumber=req.body.phoneNumber
            deliverInstructions=req.body.deliverInstructions;
            securityCode=req.body.securityCode
        }
        let savedAddress =await address.save()
        if (savedAddress){
            res.json({
                success:true,
                message:"Address saved succesfully"
            })
        }        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.get("/address",verifyToken,async (req,res)=>{
    try {
        let addresses=await Address.find({user:req.decoded._id})
        if (addresses){
            res.json({
                success:true,
                addresses:addresses
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.get("/countries",async (req,res)=>{
    try {
        let response= await axios.get("https://restcountries.com/v2/all")
        res.json(response.data)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.put("/address/:id",verifyToken, async (req,res)=>{
    try {
        let foundAddress=await Address.findOne({_id: req.params.id})
        if (foundAddress){
            with (foundAddress){                
                if (req.body.country) country=req.body.country;
                if (req.body.fullName) fullName=req.body.fullName;
                if (req.body.streetAddress || req.body.streetAddress2) streetAddress=req.body.streetAddress1+" "+req.body.streetAddress2;
                if (req.body.city) city=req.body.city   
                if (req.body.state) state=req.body.state
                if (req.body.zipCode) zipCode=req.body.zipCode;
                if (req.body.phoneNumber) phoneNumber=req.body.phoneNumber
                if (req.body.deliverInstructions) deliverInstructions=req.body.deliverInstructions;
                if (req.body.securityCode) securityCode=req.body.securityCode

                await foundAddress.save()
                res.json({
                    success:true,
                    message:"Succesfully updated address"
                })
            }
        }
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.delete("/address/:id",verifyToken, async (req,res)=>{
    try {
        let deletedAddress = await Address.remove({user:req.decoded._id,_id: req.params.id})
        if (deletedAddress){
            res.json({
                success:true,
                message:"Address hasn been deleted"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.put("/address/set/default",verifyToken,async (req,res)=>{
    try {
        console.log(req.body)
        const updatedAddressUser=await User.findOneAndUpdate({_id:req.decoded._id},{$set:{address:req.body.id}})
        
        if (updatedAddressUser){
            res.json({
                success:true,
                message:"Succesfully set this address as default"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })  
    }
})

router.get("/address/:id",verifyToken,async (req,res)=>{
    try {
        let address =await Address.findOne({_id: req.params.id})
        
        res.json({
            success:true,
            address:address
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })   
    }
})

module.exports=router;
