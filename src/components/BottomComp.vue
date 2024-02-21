<template>
    <div class=" pt-3" style="background-color: #fbf4f4">

        <div class="d-md-flex flex-column-sm justify-content-evenly py-4 px-3  ">
            <div class="mb-3">
                <router-link to="/">
                    <img :src="`${publicPath}${img}`" style="width: 100px;object-fit: contain;">
                </router-link>
                <p class="mb-2 fw-bold">Welcome to WSG Brand</p>
                <p class="mb-2">Digital Marketplace For Wholesellers</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : support@wsgbrand.in</p>
                <p class="mb-2">Mob no. : 9999437620</p>
                <p class="mb-2">Address : B-74, Okhla Phase-II,<br> New Delhi - 110020, Delhi, India</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Reach Us</p>
                <a href="https://www.instagram.com/" class="text-decoration-none text-dark">
                    <p class="mb-2">Instagram</p>
                </a>
                <a href="https://in.linkedin.com/" class="text-decoration-none text-dark">
                    <p class="mb-2">Linkdin</p>
                </a>
                <a href="https://www.facebook.com/" class="text-decoration-none text-dark">
                    <p class="mb-2">Facebook</p>
                </a>
                <a href="https://www.youtube.com/" class="text-decoration-none text-dark">
                    <p class="mb-2">Youtube</p>
                </a>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Resources</p>
                <router-link to="/get-support" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Get Support</p>
                </router-link>
                <router-link to="/faq" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Ask Faqs</p>
                </router-link>
                <router-link to="/privacy-policy" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Privacy Policy</p>
                </router-link>
                <router-link to="/term-of-use" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Terms Of Use</p>
                </router-link>
            </div>
        </div>
        <div class="bg-dark text-center py-3 d-flex align-items-center justify-content-center">
            <p class="text-white mb-0"> Copyright © 2024 wsgbrand.in All rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/wb.png",
        }
    },
}
</script>

<style></style>
