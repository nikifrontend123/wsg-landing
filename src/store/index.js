import { createStore } from "vuex";

export default createStore({
  state: {
    reviews: [
      {
        id: 1,
        show: false,
        imgr: 'img/users/1.png',
        text: ' "Using Retailpur.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
      },
      {
        id: 2,
        show: false,
        imgr: 'img/users/2.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 3,
        show: false,
        imgr: 'img/users/3.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 4,
        show: false,
        imgr: 'img/users/4.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 5,
        show: false,
        imgr: 'img/users/5.png',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 6,
        show: false,
        imgr: 'img/users/6.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 7,
        show: false,
        imgr: 'img/users/7.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 8,
        show: false,
        imgr: 'img/users/8.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 9,
        show: false,
        imgr: 'img/users/9.png',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 10,
        show: false,
        imgr: 'img/users/4.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 11,
        show: false,
        imgr: 'img/users/1.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 12,
        show: false,
        imgr: 'img/users/10.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 13,
        show: false,
        imgr: 'img/users/8.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 14,
        show: false,
        imgr: 'img/users/6.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
    ],
  },
  getters: {
    getReviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    toggleReview(state, review) {
      let index = state.reviews.indexOf(review);
      state.reviews.forEach(user_review => {
        user_review.show = false
      });
      state.reviews[index].show = true
    },
  },
  actions: {
    toggleReview({ commit }, review) {
      commit("toggleReview", review);
    },
  },
  modules: {},
});
