<template>
  <main>    
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>

            <h2 style="text-align: center">Add a new Category</h2>

            <form>
              <div class="a-spacing-top-medium">
                <label>Type</label>
                <input class="a-input-text" type="text" style="width:100%" v-model="type">
              </div>
              <hr>
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddCategory">Add category</span>
                  </span>
                </span>
                <nuxt-link to="/" class="a-button-history ">Cancel</nuxt-link>
              </div>
            </form>
            <br/>
            <ul class="list-group-item">
                <li v-for="category in categories" :key="category._id">{{category.type}}</li>
            </ul>
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
            let response= await $axios.$get("http://localhost:3000/api/categories")    
            
            return {categories:response.categories}
        } catch (error) {
            console.log(error)
        }        
    },
  data() {
    return {
      type: ""
    };
  },
  methods: {
    async onAddCategory() {   
        try {
            let data={type:this.type}
            let result = await this.$axios.$post("http://localhost:3000/api/categories",data);        
            
            this.categories.push(data)
            this.$router.push("/")
            
        } catch (error) {
            console.log(error)
        }
    }
  }
};
</script>

<style>
</style>
