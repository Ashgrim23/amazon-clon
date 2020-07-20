<template>
  <main>    
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>

            <h2 >Profile Page</h2>
            <a href="#" @click="onLogout">Logout</a>
            <form>
                <!-- nombre -->
              <div class="a-spacing-top-medium">
                <label>Name</label>
                <input class="a-input-text" type="text" style="width:100%" v-model="data.name" :placeholder="this.$auth.user.name">
              </div>

              <!-- email -->
              <div class="a-spacing-top-medium">
                <label>Email</label>
                <input class="a-input-text" type="text" style="width:100%" v-model="data.email" :placeholder="this.$auth.user.email">
              </div>

                <!-- password -->
              <div class="a-spacing-top-medium">
                <label>Password</label>
                <input class="a-input-text" type="text" style="width:100%" v-model="data.password">
              </div>
              
              <hr>              
              <!-- button -->
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                  </span>
                </span>
              </div>
            </form>
            <br/>
          
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from "vuex"
export default {    
   middleware:["auth"],
  data() {
    return {   
        data:{     
            name:"",
            email:"",
            password:""
        }
    };
  },
  computed:{
    ...mapGetters(["getCart","getCartLength"])
  },
  methods:{
      async onUpdateProfile(){
        
          try {
              let response =await this.$axios.$put("/api/auth/user",this.data)
              if (response.success){
                this.data.name="";
                this.data.email="";
                this.data.password="";
                await this.$auth.fetchUser();
              }
          } catch (error) {
              console.log(error)
          }
      },
      async onLogout(){              
          
            let response = await this.$axios.post("/api/cart",this.getCart)
          
          await this.$auth.logout()          
          this.$store.commit("clearCart")          
      }
  }

};
</script>

<style>
</style>
