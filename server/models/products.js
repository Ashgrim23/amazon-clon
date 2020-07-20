const mongoose =require("mongoose")
const Schema =mongoose.Schema;

const ProductSchema=new Schema({
    category: {type:Schema.Types.ObjectId,ref:'Category'},
    owner: {type:Schema.Types.ObjectId,ref:'Owner'},
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity:Number,    
    reviews: [{type:Schema.Types.ObjectId,ref:"Review"}]
},{
    toObject:{virtuals:true},
    toJSON: {virtuals:true}
})

ProductSchema.virtual("statsRating").get(function(){
    let statsRating=[0,0,0,0,0,0]
    if (this.reviews.length>0){
        let sum=0
        this.reviews.forEach(review => {
            sum+=review.rating
            statsRating[review.rating]+=1                 
        });
        statsRating[0]=(sum/this.reviews.length).toFixed(1);
        let dif=100
        for (let i=1;i<=5;i++){
            statsRating[i]=(statsRating[i]/this.reviews.length).toFixed(2)*100
            dif-=statsRating[i]
        }
        statsRating[5]+=dif
        return statsRating
    }
    else return statsRating
})


module.exports=mongoose.model("Product",ProductSchema)