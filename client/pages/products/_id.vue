<template>
    <main>
        <div class="a-spacing-top-medium"></div>
        <div class="container-fluid">
            <div class="wayfinding-breadcrumbs-container">
                <ul class="a-unordered-list a-horizontal a-size-small">
                    <li>
                        <span class="a-list-item">
                            <a class="a-link-normal a-color-tertiary" href="#">{{product.category.type}}</a>
                        </span>
                    </li>
                    <li>
                        <span class="a-list-item">></span>
                    </li>
                    <li>
                        <span class="a-list-item">
                            <a class="a-link-normal a-color-tertiary" href="#">{{product.title}}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid">
            <div class=dp-container>
                <div class="row">
                    <!-- first 3 grid - product image, and author section -->
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="leftCol">
                            <!-- Image -->
                            <div class=imgBlock>
                                <div class=eBookimg>
                                    <img :src="product.photo" class="img-fluid"/>
                                </div>
                            </div>
                            <!-- follow author -->
                            <div class="authorFollow">
                                <hr class="a-divider-normal"/>
                                <h1 class="authorFollowHeading">Follow The Author</h1>
                                <div class="a-spacing-top-small">
                                    <div class="row">
                                        <!-- author image -->
                                        <div class="col-xl-3 col-lg-3 col-mg-3 col-sm-3 col-3">
                                            <div class="smallAuthorImageContainer">
                                                <a href="#">
                                                    <img :src="product.owner.photo" class="img-fluid"/>
                                                </a>
                                            </div>
                                        </div>
                                        <!-- author name -->
                                        <div class="col-xl-4 col-lg-3 col-mg-3 col-sm-3 col-3">
                                            <div class="authorNameCol">
                                                <a href="#">{{product.owner.name}}</a>
                                            </div>    
                                        </div>
                                        <!-- author follow button -->
                                        <div class="col-xl-5 col-lg-6 col-mg-6 col-sm-6 col-6">
                                            <div class="authorBtn mt-2">
                                                <a href="#">
                                                    <span class="btnFollow">
                                                        <span class="a-btn-inner">
                                                            <button class="a-btn-text">+ Follow</button>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- middle 6 grid Descripcion -->
                    <div class="col-lg-6 col-md-6 col-sm-8">
                        <div class="centerCol">
                        <!-- product title -->
                            <div class="titleDiv">
                                <h1 class="productTitle">
                                    <span class="lageTitle">{{product.title}}</span>
                                    <span class="smallTitle">Paperback</span>                                    
                                </h1>
                            </div>
                            <div class="bylineinfo">
                                by
                                <a href="#" class="authorName">{{product.owner.name}}
                                    <i class="fas fa-chevron-down" style="font-size: 8px !important; color:#555 !important"></i>
                                </a> (Author)
                            </div>
                            
                            <div class="reviewGroup">
                                 <no-ssr>
                                  <StarRating
                                    :rating="parseInt(product.statsRating[0])" 
                                    :show-rating="false" 
                                    :glow="1" 
                                    :border-width="1"
                                    :round-start-rating="false"
                                    :rounded-corners="true"
                                    :read-only="true"
                                    :star-size="18"
                                    :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]"/>
                                </no-ssr> 
                            </div>
                            <hr style="margin-top: 10px;"/>
                            <!-- a tags dummy data -->
                            <div class="mediaMatrix">
                                <div class="formats">
                                    <a href="#" class="link-expander">
                                        >
                                        <span class="tmmShowPrompt">See all 18 formats and editions</span>
                                    </a>
                                    <ul>
                                        <!-- kindle -->
                                        <li class="swatchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>Kindle</span>
                                                            <br/>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                Read with Our
                                                                <span class="a-text-bold">Free app</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>
                                        <!-- audiobook -->
                                         <li class="swatchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>
                                                                <img src="/img/audiblelogo.png"
                                                                    class="img-fluid"
                                                                    style="width:20px;"/>
                                                                Audible
                                                            </span>
                                                            <br/>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                
                                                                <span class="a-text-bold">Free app</span> with you Audible Trial
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>
                                        <!-- paperback -->
                                         <li class="swatchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>Paperback</span>
                                                            <br/>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- description -->
                            <div class="bookDescription">
                                <div class="bookDescriptionInner">{{product.description}}</div>
                            </div>

                            <!-- product specification -->
                            <div class="aboutEbooksFeature">
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-4 mb-1">
                                        <div class="a-declarative">
                                            Length: <span><a href="#">386 pages<i class="a-icon a-icon-popover"></i> </a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- middle 3 grid buy section -->
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="combinedBuyBox">
                            <div class="buyBox">
                                <div class="a-section">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <form>
                                                <input type="radio" id="test1" name="radio-group checked"/>
                                                <label for="text1">Buy now</label>
                                            </form>
                                        </div>
                                        <!-- product price -->
                                        <div class="float-right">
                                            <span class="a-size-medium a-color-price offer-price a-text-normal">
                                                ${{product.price}}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                
                                <div class="a-section a-spacing-none">
                                    <div class="row">
                                        <div class="col-sm-5 col-5">
                                            <select v-model="qty">
                                                <option v-for="i in 10" :value="i" :key="i">Qty: &nbsp;{{i}}</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="a-section a-spacing-small a-spacing-top-micro">
                                    <div class="row">
                                        <span class="a-color-base buyboxShippingLabel"></span>
                                    </div>
                                </div>
                                <div class="a-section a-spacing-small">
                                    <div class="a-section a-spacing-none">
                                        <span class="a-size-medium a-color-success">In Stock</span>
                                    </div>
                                    <div class="a-section a-spacing-mini">Ships from and sold by Amazon.com</div>
                                </div>
                                <div cass="a-section">
                                    <div class="a-button-stack" @click="addProductToCart({product: product, qty:qty})">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-cart"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                                <span class="a-button-text">Add to Cart</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="a-button-stack">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-buynow"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                                <span class="a-button-text">Buy Now</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="a-row">
                                    <div class="a-spacing-top-small">
                                        <div class="a-section a-spacing-none">
                                            <div class="a-section a-spacing-none a-spacing-top-mini">
                                                this item ships to
                                                <b>California</b>
                                                <b>Get it by Monday, Sept 23 - Monday, Sept. 30</b>
                                                Choose this date at checkout
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <span class="a-declarative">
                                    <a href="#" class="a-link-normal">
                                        <div class="a-row a-spacing-mini">
                                            <i class="fal fa-map-market-alt"></i>
                                            <span class="a-size-small">Deliver to California</span>
                                        </div>
                                    </a>
                                </span>
                                <br/>
                                <hr/>
                                <div class="a-section">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <form>
                                                <input type="radio" id="test2" name="radio-group"/>
                                                <label for="test2">Buy Now</label>
                                            </form>
                                        </div>
                                        <div class="float-right">
                                            <span class="a-color-base offer-price a-text-normal">${{product.price}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="kcpAppBaseBox text-center">
                            <img src="/img/readyondevice.png" class="img-fluid"/>
                        </div>

                    </div>
                </div>
                <br/>
                <hr/>
                <div class="books-entity-tease">
                    <div class="bucket">
                        <h2>More about the author</h2>
                        <div class="content">
                            <div class="row">
                                <!-- author photo and button -->
                                <div class="col-md-2 col-sm-4 col-4">
                                    <div class="authorContent">
                                        <div class="authorImageSingle">
                                            <a href="#">
                                                <img :src="product.owner.photo" class="img-fluid"/>                                                
                                            </a>
                                        </div>
                                        <div class="authorFollow">
                                            <button class="followButton" type="button">
                                                <span class="pr-fb-icon"></span>
                                                <span class="pr-fb-text">Follow</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- author about -->
                                <div class="col-md-10 col-sm-8 col-8 pl-0">
                                    <div class="mainContent">
                                        <h3>Biography</h3>
                                        <div id="authorBio">{{product.owner.about}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ReviewSection :product="product" :reviews="reviews" />
            </div>
        </div>
    </main>
</template>

<script>
import {mapActions} from "vuex"
import StarRating from "vue-star-rating"
import ReviewSection from "~/components/ReviewSection"
export default {
    components:{
        ReviewSection,
        StarRating
    },
 async asyncData({$axios,params}){     
     try {         
         let singleProduct =  $axios.$get(`/api/products/${params.id}`)         
         let manyReviews =  $axios.$get(`/api/reviews/${params.id}`)                  
         
         const [productResponse,reviewsResponse] = await Promise.all([
             singleProduct,
             manyReviews
         ])                  
         
         return {
             product:productResponse.product,
             reviews:reviewsResponse.reviews
         }
     } catch (error) {
         console.log(error)         
     }
 },
 data(){
     return {
         qty:1
     }
 },
 methods: {
     ...mapActions(["addProductToCart"])
 }
}
</script>


<style>

</style>
