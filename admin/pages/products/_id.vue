<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Update {{title}}</h2>
            <form>
              <div class="a-spacing-top-medium">                
                <label>Category</label>
                <select class="a-select-option" v-model="product.category._id">
                  <option  v-for="category in categories" :value="category._id" :key="category._id">{{category.type}}</option>                 
                </select>
              </div>

              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="product.owner._id">
                  <option v-for="owner in owners" :key="owner._id" :value="owner._id" >{{owner.name}}</option>                  
                </select>
              </div>
              <!-- title -->
              <div class="a-spacing-top-medium">
                <label>Title</label>
                <input style="width:100%" type="text" class="a-input-text" v-model="product.title" >
              </div>

              <!-- price -->
              <div class="a-spacing-top-medium">
                <label>Price</label>
                <input style="width:100%" type="number" class="a-input-text" v-model="product.price" >
              </div>

              <!-- Stock Quantity -->
              <div class="a-spacing-top-medium">
                <label>Stock Quantity</label>
                <input style="width:100%" type="number" class="a-input-text" v-model="product.stockQuantity">
              </div>

              <!-- description -->
              <div class="a-spacing-top-medium">
                <label>Description</label>
                <textarea
                    v-model="product.description"                  
                  style="width:100%"
                  type="text"
                  class="a-input-text"
                />
              </div>

              <!-- photo -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom:0px">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected">                    
                  </label>
                  <p >{{fileName}}</p>
                </div>
              </div>

              <hr>

              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProduct">Update product</span>
                  </span>
                </span>
                <nuxt-link to="/" class="a-button-history ">Cancel</nuxt-link>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({$axios,params}){
        try {
            let categories=$axios.$get("http://localhost:3000/api/categories");
            let owners=$axios.$get("http://localhost:3000/api/owners");
            let product=$axios.$get(`http://localhost:3000/api/products/${params.id}`)

            const [catResponse,ownerResponse,productResponse] = await Promise.all([
                categories,
                owners,
                product
            ])
            
            return{
                title:productResponse.product.title,
                categories:catResponse.categories,
                owners:ownerResponse.owners,
                product:productResponse.product
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    data(){
        return {                        
            selectedFile:null,
            fileName:""
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile=event.target.files[0]
            this.fileName=event.target.files[0].name
        },

        async onUpdateProduct(){
            let data=new FormData()
            data.append("title",this.product.title)
            data.append("price",this.product.price)
            data.append("description",this.product.description)
            data.append("ownerID",this.product.owner._id)
            data.append("categoryID",this.product.category._id)
            data.append("stockQuantity",this.product.stockQuantity)            
            if (this.selectedFile){
              data.append("photo",this.selectedFile,this.selectedFile.name)
              if (this.product.photo) data.append("deletePhoto",this.product.photo)              
            }
            let result=await this.$axios.$put(`http://localhost:3000/api/products/${this.$route.params.id}`,data);
            this.$router.push("/")
        }
    }
}
</script>

<style>
</style>
