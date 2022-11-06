<template>
  <section v-if="cartItems.length == 0" class="my-5 empty-section">
    <div class="container text-center">
      <div class="row">
        <div class="mb-4"><p class="empty-text" dir="rtl">متاسفانه سبد خرید شما خالی است!</p></div>
        <div><img class="img-fluid" :src="emptyCart" alt=""></div>
        <div class="start-lgin-programming my-5">
          <div class="mx-auto">
            <router-link class="btn-login-programming" to="/courses">
              <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 20.884 27.105">
                <path d="M9.358,6.463a5,5,0,0,1,8.388,0l4.347,6.7A5,5,0,0,1,17.9,20.884H9.205a5,5,0,0,1-4.194-7.722Z"
                      transform="translate(0 27.105) rotate(-90)" fill="#fff"></path>
              </svg>
              ثبت نام و شروع برنامه نویسی
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="cart-section">
    <div class="container text-center px-4 px-md-0 mb-5 mb-md-0">
      <div class="row d-flex flex-row-reverse">
        <div class="col-md-8 mb-5 mb-md-0">
          <div class="d-flex flex-row-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 57 76">
              <defs>
                <filter id="a" x="20" y="0" width="34" height="34" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="b"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="c" x="24" y="30" width="27" height="27" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur>
                  <feFlood floodpacity="0.161"></feFlood>
                  <feComposite operator="in" in2="d"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="e" x="0" y="48" width="28" height="28" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="f"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="f"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="g" x="33" y="50" width="24" height="24" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="h"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="h"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g transform="translate(-1717 -1141)">
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#a)">
                  <rect width="16" height="16" rx="5" transform="translate(29 6)" fill="#343434" opacity="0.84"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#c)">
                  <rect width="9" height="9" rx="3" transform="translate(33 36)" fill="#343434" opacity="0.7"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#e)">
                  <rect width="10" height="10" rx="3" transform="translate(9 54)" fill="#343434" opacity="0.69"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#g)">
                  <rect width="6" height="6" rx="2" transform="translate(42 56)" fill="#343434" opacity="0.39"></rect>
                </g>
              </g>
            </svg>
            <h3 class="ms-2 fw-bold title-head">لیست دوره ها</h3>
          </div>
          <div class="p-4 shadow-cart mt-4 rounded-3">
            <div v-for="item in cartItems" :key="item.id" class="row align-items-center mb-4">
              <div class="col-9">
                <h6 class="fw-bold text-start mb-4" dir="rtl">{{ item.name }}</h6>
                <div class="d-flex flex-row-reverse justify-content-between">
                  <div><p dir="rtl">{{ item.price }}<span class="ms-1">تومان</span></p></div>
                  <div>
                    <button @click="removeFromCart(item.id)" class="btn-cart">
                      <i class="bi bi-trash2"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div v-html="item.image" class="text-start"></div>
              </div>
              <hr class="mt-4">
            </div>
            <div class="row text-end">
              <div class="col-md-3">
                <button @click="clearAllCart" class="btn btn-danger">حذف سبد خرید</button>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-4 margin-bottom">
          <div class="d-flex flex-row-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 57 76">
              <defs>
                <filter id="a" x="20" y="0" width="34" height="34" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="b"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="c" x="24" y="30" width="27" height="27" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur>
                  <feFlood floodpacity="0.161"></feFlood>
                  <feComposite operator="in" in2="d"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="e" x="0" y="48" width="28" height="28" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="f"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="f"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
                <filter id="g" x="33" y="50" width="24" height="24" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha"></feOffset>
                  <feGaussianBlur stdDeviation="3" result="h"></feGaussianBlur>
                  <feFlood flood-opacity="0.161"></feFlood>
                  <feComposite operator="in" in2="h"></feComposite>
                  <feComposite in="SourceGraphic"></feComposite>
                </filter>
              </defs>
              <g transform="translate(-1717 -1141)">
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#a)">
                  <rect width="16" height="16" rx="5" transform="translate(29 6)" fill="#343434" opacity="0.84"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#c)">
                  <rect width="9" height="9" rx="3" transform="translate(33 36)" fill="#343434" opacity="0.7"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#e)">
                  <rect width="10" height="10" rx="3" transform="translate(9 54)" fill="#343434" opacity="0.69"></rect>
                </g>
                <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#g)">
                  <rect width="6" height="6" rx="2" transform="translate(42 56)" fill="#343434" opacity="0.39"></rect>
                </g>
              </g>
            </svg>
            <h3 class="ms-2 fw-bold title-head">هزینه دوره ها</h3>
          </div>
          <div class="p-4 shadow-cart mt-4 rounded-3">
            <div class="top-chechout d-flex flex-row-reverse justify-content-between">
              <div dir="rtl"><p>جمع کل:</p></div>
              <div dir="rtl"><p>{{ cartTotalAmount }} تومان</p></div>
            </div>
            <hr>
            <div class="discount-box d-flex flex-row-reverse justify-content-between mt-4">
              <div><input class="discount-input" type="text" placeholder="کد تخفیف"></div>
              <div>
                <button class="btn-discount">اعمال</button>
              </div>
            </div>
            <div class="mt-5 d-flex flex-row-reverse justify-content-between">
              <div><p dir="rtl">تخفیف:</p></div>
              <div><p dir="rtl" class="text-danger">۰ تومان</p></div>
            </div>
            <div class="d-flex flex-row-reverse justify-content-between">
              <div><p dir="rtl">قابل پرداخت:</p></div>
              <div><p dir="rtl" class="text-success">{{ cartTotalAmount }} تومان</p></div>
            </div>
            <div class="mt-4">
              <a href="https://sepehr.shaparak.ir:8080/Mpay" target="_blank ">
                <button class="btn-order">تکمیل سفارش</button>
              </a>
            </div>
          </div>
        </div>
        <div
            class="col d-md-none position-fixed bottom-0 bg-light d-flex flex-row-reverse justify-content-between align-items-center fixed-order">
          <div>
            <button class="btn-order-fixed">تکمیل سفارش</button>
          </div>
          <div class="me-2">
            <span><p dir="rtl" class="text-muted fs-6">قابل پرداخت</p></span>
            <span><p class="fw-bold">{{ cartTotalAmount }}</p></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {computed, ref} from "vue";
import {useTitle} from '@vueuse/core';
import {useStore} from "vuex";

export default {
  name: "CartPage",
  setup() {
    const title = useTitle();
    title.value = 'سبد خرید | بوتواستارت';
    let emptyCart = ref(require("@/assets/img/cart/empty-basket.webp"));
    const store = useStore();
    const cartItems = computed(() => store.getters['cart/allItems']);
    const cartTotalAmount = computed(() => store.getters['cart/totalAmount']);


    function removeFromCart(id) {
      store.dispatch("cart/remove", id);
    }

    function clearAllCart() {
      store.dispatch("cart/clearAllCart");
    }


    return {emptyCart, cartItems, cartTotalAmount, removeFromCart, clearAllCart}
  }
}
</script>

<style scoped>
.empty-text {
  line-height: 1.334;
  font-weight: 800;
  color: rgb(121, 127, 169);
  font-size: 1.5rem;
}

a {
  text-decoration: none;
}

.start-lgin-programming {
  display: flex;
}

img {
  width: 192px;
  height: 317.25px;
}

.btn-login-programming {
  background-color: rgb(126, 87, 194);
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 10px 45px;
  border-radius: 15px;
  margin: 0px 4px;
  cursor: pointer;
}

.title-head {
  font-size: 1.5rem;
}


.shadow-cart {
  box-shadow: rgb(94 129 209 / 16%) 0px 8px 24px;
}

.btn-cart {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  margin: 0px 0px 0px 16px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: YekanBakh, IRANSansWeb, Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(211, 47, 47, 0.5);
  color: rgb(211, 47, 47);
  padding: 0px;
  border-radius: 7px;
}

.btn-cart:hover {
  text-decoration: none;
  background-color: rgba(211, 47, 47, 0.04);
  border: 1px solid rgb(211, 47, 47);
}

.discount-input {
  border: 1px solid #d5cdcd;
  border-radius: 4px;
  padding: 6.8px 30px;
}

.discount-input::placeholder {
  opacity: 0.6;
  text-align: end;
}

.btn-discount {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6.8px 15px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(126, 87, 194, 0.5);
  color: rgb(126, 87, 194);
}

.btn-discount:hover {
  text-decoration: none;
  background-color: rgba(126, 87, 194, 0.04);
  border: 1px solid rgb(126, 87, 194);
}

.btn-order {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(126, 87, 194);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  width: 100%;
  font-weight: 800;
  font-size: 17px;
  border-radius: 11px;
}

.btn-order:hover {
  text-decoration: none;
  background-color: rgb(88, 60, 135);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
}

.btn-order-fixed {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(126, 87, 194);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}

.margin-bottom {
  margin-bottom: 6rem;
}

@media (max-width: 992px) {
  .empty-text {
    font-size: 1rem;
    margin-top: 2rem;
  }

  .title-head {
    font-size: 1.1rem;
  }

  .fixed-order {
    border-top: 1px solid #bbb8b8;
  }
}
</style>