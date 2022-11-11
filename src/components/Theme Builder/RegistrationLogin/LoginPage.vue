<template>
  <section class="d-grid justify-content-center">
    <div class="container-fluid">
      <div class="row mx-3 mx-lg-0">
        <div class="col">
          <div class="row text-center">
            <span class="span-logo"><img :src="logo" alt="logo"></span>
          </div>
          <div class="row mt-5 text-center form-login">
            <div class="btns">
              <router-link class="register-router" to="/register">
                <button class="register-btn ms-3">
                  <span class="ms-2">ثبت نام</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.2">
                    <path fill="#7e57c2"
                          d="M21 14h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm-3 3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zM9 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2C6.236 4 4 6.238 4 9s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445C12.1 18.705 10.814 19 9 19c-1.984 0-3.206-.305-3.818-.542C5.641 17.743 6.959 17 9 17m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"></path>
                  </svg>
                </button>
              </router-link>
              <button class="login-btn">
                <span class="ms-2">ورود</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="#fff" viewBox="0 0 17.14 21.425">
                  <g id="_000000ff" data-name="#000000ff" transform="translate(-85.345 -42.66)">
                    <path id="Path_170" data-name="Path 170"
                          d="M130.627,42.712a3.487,3.487,0,0,1,.626-.052h8.489a3.209,3.209,0,0,1,3.214,2.778,5.762,5.762,0,0,1,.031.806V60.2a5.76,5.76,0,0,1-.1,1.443,3.231,3.231,0,0,1-2.3,2.332,5.637,5.637,0,0,1-1.5.106H131.2a3.22,3.22,0,0,1-3.212-3.179c0-1.071,0-2.142,0-3.213a1.071,1.071,0,1,1,2.141-.053c0,1.089,0,2.177,0,3.266a1.075,1.075,0,0,0,1.067,1.036q4.3,0,8.59,0a1.076,1.076,0,0,0,1.053-1.085q0-7.332,0-14.665a1.873,1.873,0,0,0-.07-.7,1.073,1.073,0,0,0-.984-.69q-4.294,0-8.588,0a1.074,1.074,0,0,0-1.068,1.04c0,.986,0,1.972,0,2.958a1.516,1.516,0,0,1-.118.773,1.07,1.07,0,0,1-2.023-.472q0-1.631,0-3.264a3.221,3.221,0,0,1,2.636-3.127Z"
                          transform="translate(-40.503 0)" fill="#fff"></path>
                    <path id="Path_171" data-name="Path 171"
                          d="M93.612,170.98a1.072,1.072,0,0,1,1.057.253c1.042,1.033,2.071,2.08,3.118,3.108a1.107,1.107,0,0,1,.4,1.068,1.254,1.254,0,0,1-.475.731c-1.025,1.017-2.041,2.044-3.066,3.06a1.07,1.07,0,0,1-1.708-1.214,1.6,1.6,0,0,1,.4-.5c.407-.4.807-.814,1.218-1.213q-4.06.006-8.119,0a1.071,1.071,0,0,1-.362-2.085,1.634,1.634,0,0,1,.563-.058c2.639,0,5.279,0,7.918,0-.461-.448-.91-.908-1.367-1.361a1.071,1.071,0,0,1,.429-1.794Z"
                          transform="translate(0 -121.831)" fill="#fff"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="title-login my-5 text-center">
              <h5 class="fw-semibold">ورود به بوتواستارت</h5>
            </div>
            <div class="form-input">
              <label for="phone-field"
                     class="enter-number d-flex flex-row-reverse align-items-center justify-content-between">
                <div class="number">
                  <p>شماره موبایل خود را وارد نمایید</p>
                </div>
                <div class="question">
                  <p data-bs-toggle="tooltip" data-bs-placement="top"
                     data-bs-title="لطفا شماره موبایلی که واتساپ دارد را وارد کنید تا پیام پشتیبانی برایتان ارسال شود"
                     class="question-icon">?</p>
                </div>
              </label>
              <input v-model="confirmCodeValue" type="text" id="phone-field">
            </div>
            <div class="grecaptcha-badge d-none">
              <div class="mt-1 text-muted fw-lighter" dir="rtl">
                اتصال به خدمات reCAPTCHA امکان‌پذیر نبود. برای دریافت چالش reCAPTCHA پس از بررسی اتصال اینترنت بار کردن
                مجدد کنید.
              </div>
            </div>
            <div class="send-confirm-code mt-5">
              <button type="button" @click.prevent="sendConfirmCode">ارسال کد تایید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import {useTitle} from "@vueuse/core";
import {Tooltip} from 'bootstrap';

import Swal from "sweetalert2";


export default {
  name: "LoginPage",
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  },
  setup() {
    const title = useTitle();
    title.value = "ورود به بوتواستارت"
    const logo = ref(require('@/assets/img/login/logo.png'));

    const confirmCodeValue = ref('');

    function sendConfirmCode() {
      if (confirmCodeValue.value === '') {

        Swal.fire({
          title: 'شماره موبایل وارد شده صحیح نمیباشد',
          icon: 'error',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: 'top',
        });
      } else {
        console.log("Send Confirm Code");
      }
    }


    return {logo, confirmCodeValue, sendConfirmCode}
  }
}
</script>

<style scoped>

section {
  margin-bottom: 10rem;
}

img {
  width: 177px;
  height: 84px;
}

.form-login {
  padding: 40px 40px;
  max-width: 500px;
  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
  border-radius: 15px;
}

.register-router {
  text-decoration: none;
  color: #7e57c2;
}

.login-btn {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  background-color: #7E57C2;
  color: #ffffff;
  border: none;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: auto;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.login-btn:hover {
  text-decoration: none;
  background-color: rgb(88, 60, 135);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
}

.register-btn {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid rgba(126, 87, 194, 0.5);
  background-color: transparent;
  color: #7E57C2;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.register-btn:hover {
  text-decoration: none;
  background-color: rgba(126, 87, 194, 0.04);
  border: 1px solid rgb(126, 87, 194);
}

.title-login h5 {
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
}

.number p {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  margin-bottom: 16px;
}

.question-icon {
  color: #fff;
  background: grey;
  width: 17px;
  height: 17px;
  font-weight: 800;
  text-align: center;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}

.form-input input {
  letter-spacing: inherit;
  color: currentcolor;
  border: 1px solid #c7c6c6;
  border-radius: 5px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 14px 0;
  text-align: right;
}

.form-input input:focus {
  outline: none !important;
  border: 2px solid #7e57c2;
}


.send-confirm-code button {
  border: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 14px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: rgb(126, 87, 194);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  width: 100%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.send-confirm-code button:hover {
  text-decoration: none;
  background-color: rgb(88, 60, 135);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
}

.swal2-title {
  font-size: 1.6rem !important;
}

@media (max-width: 576px) {
  .title-login h5 {
    font-size: 19px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>