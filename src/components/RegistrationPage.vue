<template>
    <div>
        <div class="bg">
            <p class="fs-1 text-center text-white fw-bold py-5">{{ selectedName }}</p>
        </div>
        <div class="px-4 pb-5">

            <div class="row">
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                    <img :src="`${publicPath}${img}`" width="300" style="max-width:80%;">
                </div>
                <form @submit.prevent="loginAccount()" class="col-lg-6 col-12">
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="name">
                        <label for="floatingInput" class="text-muted">Enter your Name</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="email">
                        <label for="floatingInput" class="text-muted">Enter your Email</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="number" class="form-control" id="floatingInput" placeholder="Mobile Number"
                            v-model="mobile">
                        <label for="floatingInput" class="text-muted">Mobile Number</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Message" v-model="message">
                        <label for="floatingInput" class="text-muted">Message</label>
                    </div>

                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn text-white py-2 fs-5 w-100 bg-danger"
                            style="padding: 10px 12px !important;">Submit</button>
                    </div>
                </form>
            </div>
            <router-link to="/login-page">
                <p class="text-center my-5">Already have an account ? Login</p>
            </router-link>


        </div>
        <div class="w-100 position-relative bottom-0">
            <BottomComp></BottomComp>
        </div>
    </div>
</template>

<script>
import BottomComp from './BottomComp.vue';
import axios from "axios";
// POST
// 'https://server.wsgbrand.in/api/business_query'
// FormData {
//     name, email, mobile(R), message
// }


export default {
    components: { BottomComp },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/reg.png",
            name: "",
            email: "",
            mobile: "",
            message: "",
            selectedName: ''
        };
    },
    methods: {
        loginAccount() {
            console.log('Submitting data:', {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                message: this.message
            });

            const requestData = {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                message: this.message
            };

            axios.post('https://server.wsgbrand.in/api/business_query', requestData)
                .then(() => {
                    console.log('Data sent');
                    // const token = response.data.data.token;
                    // localStorage.setItem('token', token);
                    // console.log('Login successful, token stored:', token);
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.message = '';
                })
                .catch(error => {
                    console.log('Error', error);
                });
        }
    },
    mounted() {
        this.selectedName = this.$route.params.name;
    },
}

</script>
<style scoped>
.bg {
    background: linear-gradient(101deg, rgba(220, 53, 69, 1) 52%, rgba(229, 104, 116, 1) 78%);
    background-size: 100% 100%;
    background-repeat: no-repeat
}
</style>