<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/">
              <img src="/img/logo-black.png">
            </nuxt-link>
          </div>
          <div class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Sign in</h1>

                <!-- email -->
                <div class="a-row a-spacing-base">
                  <label for="ap-customer-name" class="a-form-label">Email</label>
                  <input
                    type="email"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="email"
                  >
                </div>

                <!-- password -->
                <div class="a-row a-spacing-base">
                  <label for="ap-customer-name" class="a-form-label">Password</label>
                  <input
                    type="password"
                    id="ap_customer_password"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="password"
                  >
                  <div class="a-alert-container">
                    <div class="a-alert-content">Password must be at least 6 characters</div>
                  </div>
                </div>
                <!-- button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onLogin">Continue</span>
                    </span>
                  </span>
                </div>
                <div class="a-row a-spacing-top-medium a-size-small">
                  <b>
                    By creating an account, you agree to Amazon's
                    <a href="#">Conditions of Use</a> and
                    <a href="#">Privacy Notice</a>
                  </b>
                </div>
                <hr>
                <div class="a-row">
                  <b>
                    Dont't have an account?
                    <nuxt-link to="/signup" class="a-link-emphasis">Signup</nuxt-link>
                  </b>
                </div>
              </div>
              <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['visita'],
  layout: "none",
  data() {
    return {
      error: null,
      email: "",
      password: ""
    };
  }, 
  methods: {
    async onLogin() {
      try {
        let res = await this.$auth.loginWith("local", {
          data: { email: this.email, password: this.password }
        });        
          let tmpCart=await this.$axios.get('/api/cart')               
          this.$store.commit("setCart",tmpCart.data.cart)
        
      } catch (error) {
        console.log(error);
        this.error="Authentication failed"
      }
    }
  }
};
</script>

<style>
</style>
