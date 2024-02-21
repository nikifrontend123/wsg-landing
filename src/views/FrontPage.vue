<template>
    <div>
        <!-- ------------------------Banner------------------ --> 
        <div id="banner" class="d-md-flex d-lg-flex justify-content-center align-items-center w-100"
            style="background: linear-gradient(101deg, rgba(220,53,69,1) 52%, rgba(229,104,116,1) 78%);
            background-repeat: no-repeat;
            height: 700px;">
            <div class="d-flex flex-column justify-content-center align-items-center pt-5">
                <div class="text-center">
                    <img src="img/wb.png" style="filter: brightness(0) invert(1);" width="115" alt="">  
                    <p class="fs-1 text-white fw-bold m-0 ">WSG Brand</p>
                </div>
                <h1 class="text-center text-white mt-3">India's largest B2B Platform for <br> businesses & shop-owners</h1>
                <RouterLink to="/LoginPage">
                    <div class="btn btn-light text-danger my-4 fs-5 fw-bold">
                        Get Started 
                    </div>
                </RouterLink>
                <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
            </div>
            <div class="d-flex justify-content-center align-items-center pt-5">
                <img src="img/laptop.png" width="800" style="max-width:80%; ">
            </div>
        </div> 
        <!-- ------------------------Banner------------------ -->

        <!-- ------------------------Route------------------ -->
        <div class="text-center my-5" id="second">
            <h1 class="text-center py-5 container">Select Your Partnership Mode</h1>
            <div class="row m-0 gy-2">
                <div v-for="(text, index) in texts" :key="index" class="col-12 col-lg-4">
                    <RouterLink :to="'/registraion/' + text.name" class="text-decoration-none">
                        <div class="card p-3 my-card text-decoration-none">
                            <div class="fs-3">
                                <i class="fs-2 me-2" :class="text.icon"></i> {{ text.name }}
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- ------------------------Route------------------ -->
  
        <!-- ------------------------KYC------------------ -->
        <div class="my-5 pb-5" style="background-color: #fbf4f4;">
            <h1 class="text-center py-5 container">Partnership With Us in 3 simple steps</h1>
            <div class="row m-0 gy-2 mb-4">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-lg-4">
                    <div class="card p-3 ">
                        <div class="">
                            <div class="d-flex justify-content-center align-items-center">
                                <img :src="data.img" width="120" class="">
                            </div>
                            <h3 class=" text-center">{{ data.head }}</h3>
                            <p class="text-center w-100">{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- ------------------------KYC------------------ -->

        <!-- ------------------------user Banner------------------ -->
        <div class="my-5">
            <div class="heading d-flex justify-content-center text-center pt-4">
                <p class="fs-1" style="font-weight: 600;">Success Stories of Our Partners</p>
            </div>
            <div class="banner w-100 d-block ">
                <UserBanner></UserBanner>
            </div>

        </div>
        <!-- ------------------------user Banner------------------ -->

        <!-- ------------------------counter------------------ -->
        <div class="bg py-5">
            <div class="d-flex justify-content-center">
                <h1 class="text-white text-center">Join India's largest B2B platform</h1>
            </div>
            <div class="text-white d-md-flex justify-content-between mt-4 ">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="30"> </AutoCounter>&nbsp;L+
                    </p>
                    <p class="fs-5 mt-0">Authorised Sellers</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="25"> </AutoCounter>&nbsp;k+
                    </p>
                    <p class="fs-5 mt-0">Fashion Categories</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="10"> </AutoCounter>&nbsp;k+
                    </p>
                    <p class="fs-5 mt-0">Product Already Listed</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="60"> </AutoCounter>&nbsp;L+
                    </p>
                    <p class="fs-5 mt-0">Happy Customer</p>
                </div>
                <div class="text-center fw-bold">
                    <p class=" m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="900"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 d-flex justify-content-center">Daily Cities</p>
                </div>
            </div>
        </div>
        <!-- ------------------------counter------------------ -->

        <!-- ------------------------bottom------------------ -->
        <div class=" ">
            <BottomComp></BottomComp>
        </div>
        <!-- ------------------------bottom------------------ -->
    </div>
</template>

<script>
import BottomComp from '@/components/BottomComp.vue';
import AutoCounter from '@/components/AutoCounter.vue';
import UserBanner from '@/components/UserBanner.vue';

export default {
    components: { UserBanner, BottomComp, AutoCounter },
    data() {
        return {
            //   publicPath: process.env.BASE_URL,
            datas: [
                {
                    id: 1,
                    img: 'img/registration.png',
                    // img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/ppuy1q441skzq5rkviqh.png',
                    head: 'Register Your Account',
                    text: 'Register your account and get verified.'
                },
                {
                    id: 2,
                    img: 'img/1.png',
                    // img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/complete_kyc_pic.png',
                    head: 'Setup Your Account',
                    text: 'Setup your account as per your business details.'
                },
                {
                    id: 3,
                    img: 'img/2.png',
                    // img: '	https://ud-img.azureedge.net/w_720,q_90/u/assets/start_buying_pic.png',
                    head: 'Start Selling',
                    text: 'Start receiving orders'
                },
            ],
            test: [
                {
                    id: 1,
                    icon: 'bi bi-arrow-down-square-fill fs-1',
                    head: 'Great Wholesale Prices',
                    text: 'Avail best price on 10+ top quality categories'
                },
                {
                    id: 2,
                    icon: 'bi bi-arrow-down-square-fill fs-1',
                    head: 'Trending Products Wide Range',
                    text: 'Shop 1,000+ trending products across all categories'
                },
                {
                    id: 3,
                    icon: 'bi bi-arrow-down-square-fill fs-1',
                    head: 'Orders From PAN India',
                    text: 'Delivery services available for 3,000+ cities'
                },

            ],
            texts: [
                {
                    icon: 'bi bi-star',
                    name: 'Brand Owner',
                },
                {
                    icon: 'bi bi-buildings',
                    name: 'Manufacturer',
                },
                {
                    icon: 'bi bi-shop-window',
                    name: 'Market Seller',
                }
            ]
        }
    },
}
</script>

<style  scoped>
.bg {
    background-image: linear-gradient(66deg, rgba(220, 53, 69, 1) 33.33%, rgba(229, 104, 116, 1) 33.33%, rgba(229, 104, 116, 1) 66.66%, rgba(220, 53, 69, 1) 66.66%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    align-items: stretch;
    box-sizing: content-box;
    padding: 34px 68px;
}

.my-card {
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.my-card:hover {
    color: red;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>