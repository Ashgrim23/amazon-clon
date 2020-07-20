<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new Product</h2>
            <form>
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID">
                  <option v-for="category in categories" :value="category._id" :key="category._id">{{category.type}}</option>                 
                </select>
              </div>

              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerID">
                  <option v-for="owner in owners" :key="owner._id" :value="owner._id" >{{owner.name}}</option>                  
                </select>
              </div>
              <!-- title -->
              <div class="a-spacing-top-medium">
                <label>Title</label>
                <input style="width:100%" type="text" class="a-input-text" v-model="title">
              </div>

              <!-- price -->
              <div class="a-spacing-top-medium">
                <label>Price</label>
                <input style="width:100%" type="number" class="a-input-text" v-model="price">
              </div>

              <!-- Stock Quantity -->
              <div class="a-spacing-top-medium">
                <label>Stock Quantity</label>
                <input style="width:100%" type="number" class="a-input-text" v-model="stockQuantity">
              </div>

              <!-- description -->
              <div class="a-spacing-top-medium">
                <label>Description</label>
                <textarea
                    v-model="description"
                  placeholder="Provide details of your product"
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
                    <span class="a-button-text" @click="onAddProduct">Add product</span>
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
    async asyncData({$axios}){
        try {
            let categories=$axios.$get("http://localhost:3000/api/categories");
            let owners=$axios.$get("http://localhost:3000/api/owners");

            const [catResponse,ownerResponse] = await Promise.all([
                categories,
                owners
            ])
            return{
                categories:catResponse.categories,
                owners:ownerResponse.owners
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    data(){
        return {
            categoryID:null,
            ownerID:null,
            title:"",
            description:"",
            price:0.00,
            stockQuantity:0,
            selectedFile:null,
            fileName:""
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile=event.target.files[0]
            this.fileName=event.target.files[0].name
        },

        async onAddProduct(){
            let data=new FormData()
            data.append("title",this.title)
            data.append("price",this.price)
            data.append("description",this.description)
            data.append("ownerID",this.ownerID)
            data.append("categoryID",this.categoryID )
            data.append("stockQuantity",this.stockQuantity)
            data.append("photo",this.selectedFile,this.selectedFile.name)

            let result=await this.$axios.$post("http://localhost:3000/api/products",data);
            this.$router.push("/")
        }
    }
}
</script>

<style>
</style>
