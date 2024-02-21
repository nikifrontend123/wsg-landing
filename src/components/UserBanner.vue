<template>
    <div class="pb-5 mb-5">
        <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
            <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                <img :src="review.imgr" alt="User Image">
            </div>
        </div>

        <div >
            <div class="text d-flex justify-content-center text-center">
                <p class="w-75 fs-4">{{ getSelectedReviewText }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedReview: 0,
        };
    },
    computed: {
        reviews() {
            return this.$store.getters.getReviews;
        },
        infiniteReviews() {
            const reviews = this.reviews.slice();
            return reviews.concat(reviews);
        },
        getSelectedReviewText() {
            return this.infiniteReviews[this.selectedReview].text;
        },
    },
    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, index) {
            this.selectedReview = index;
            this.$store.dispatch('toggleReview', review);
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    },
};
</script>
  
<style lang="scss" scoped>
.btn.selectedDiv {
    border: 2px solid red;
}

img {
    width: 80px;
    height: 80px;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4 {
    scroll-behavior: smooth; // Add smooth scrolling
    overflow-x: scroll;
}

#style-4::-webkit-scrollbar {
    display: none;
}
 
.hide-scroll {
    overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px; /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: #ffffff; /* Color of the scrollbar track */
}

::-webkit-scrollbar-thumb {
  background: rgb(134, 132, 132)4f4; /* Color of the scrollbar thumb */
  border-radius: 5px; /* Rounded corners of the thumb */
  width: 10px; 
}

::-webkit-scrollbar-thumb:hover {
  background: #f5e5e5; 
  width: 10px;
}


</style>
  