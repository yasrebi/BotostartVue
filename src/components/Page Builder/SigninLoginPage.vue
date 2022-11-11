<template>
  <section class="validation-section text-center mb-5">
    <div class="container rounded-3">
      <div class="row mx-auto">
        <div class="col-md-6 d-none d-md-block">
          <div class="inner-col"><img class="img-validation ms-md-4 mt-4"
                                      :src="loginPic" alt="">
          </div>
        </div>
        <div class="col-md-6 mt-md-5 mb-3">
          <h4 class="my-3">ورود | ثبت ‌نام</h4>
          <p class="fs-6">!سلام خوش آمدید</p>
          <div class="form">
            <div class="">
              <label for="exampleFormControlInput1" class="form-label text-label text-muted">لطفا شماره موبایل
                یا ایمیل خود را وارد
                کنید</label>
              <input v-model.lazy.trim="form.usernameInput" type="email" class="form-control mx-auto w-75 user-input"
                     id="exampleFormControlInput1"
                     placeholder="" required>
            </div>
            <div class="username-msg">{{ form.usernameMsg }}</div>
            <div class="">
              <label for="exampleFormControlInput2" class="form-label text-label text-muted">لطفا رمز عبور خود
                را وارد کنید</label>
              <input v-model.lazy.trim="form.passwordInput" type="password" class="form-control mx-auto w-75 pass-input"
                     id="exampleFormControlInput2"
                     placeholder="">
            </div>
            <div class="password-msg">{{ form.passwordMsg }}</div>
            <div>
              <button @click.prevent="validate" type="button" class="signin-button my-3">ورود</button>
            </div>
            <div class="signin-status">{{ singninStatus }}</div>
            <div class="icons mt-2">
              <span>
                <img :src="socialIcon.whatsapp" alt="واتساپ">
              </span>
              <span class="mx-4">
                <img :src="socialIcon.telegram" alt="تلگرام">
              </span>
              <span>
                <img :src="socialIcon.instagram" alt="اینستاگرام">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {reactive, ref} from "vue";
import axios from "axios";
import {useTitle} from '@vueuse/core';


export default {
  name: "SigninLoginPage",
  components: {},
  setup() {
    const title = useTitle();
    title.value = 'حساب کاربری';
    const loginPic = ref(require("@/assets/img/login/login.png"));
    const socialIcon = reactive(
        {
          whatsapp: require('@/assets/img/login/whatsapp.png'),
          telegram: require('@/assets/img/login/telegram.png'),
          instagram: require('@/assets/img/login/instagram.png')
        }
    );
    const form = reactive({
      usernameInput: '',
      passwordInput: '',
      usernameMsg: '',
      passwordMsg: '',
    });
    const singninStatus = ref("");

    let ifSednData = ref(true);


    function validate() {


      if (form.usernameInput.length === 0) {
        form.usernameMsg = "!لطفا ایمیل خود را وارد نمایید"
        ifSednData.value = false;
      } else if (form.usernameInput.indexOf("@") === -1 || form.usernameInput.indexOf(".") === -1) {
        form.usernameMsg = "!لطفا ایمیل خود را بصورت صحیح وارد نمایید"
        ifSednData.value = false;
      }

      if (form.passwordInput.length === 0) {
        form.passwordMsg = "!لطفا رمز عبور خود را وارد نمایید"
        ifSednData.value = false;
      } else if (form.passwordInput.length < 6) {
        form.passwordMsg = "!رمز عبور وارد شده کوتاه می باشد"
        ifSednData.value = false;
      }

      if (ifSednData.value) {
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
              title: form.usernameInput,
              body: form.passwordInput,
              userId: 1,
            })
            .then(function (response) {
              console.log(response.data);
              singninStatus.value = "شما مجاز به ورود هستید"

            })
            .catch(function (error) {
              console.log(error);
            })
      }
    }


    return {loginPic, form, validate, ifSednData, singninStatus, socialIcon}
  }
}
</script>

<style scoped>


body {
  background: rgb(230, 232, 235);
  background: linear-gradient(90deg, rgba(230, 232, 235, 1) 0%, rgba(189, 190, 196, 1) 42%, rgba(208, 209, 215, 1) 68%, rgba(230, 231, 236, 1) 97%);
}

.row {
  border: none;
  border-radius: 25px;
  padding: 35px 0;
  /*background: rgb(255, 255, 255);*/
  background: linear-gradient(90deg, rgba(228, 241, 220, 1) 18%, rgba(228, 241, 250, 1) 49%, rgba(228, 241, 250, 1) 60%, rgba(208, 209, 215, 1) 95%);
}


.text-label {
  font-size: 0.8rem;
  text-align: right;
}


/*.signin-button {*/
/*  width: 300px;*/
/*  height: 45px;*/
/*  font-family: Yekan;*/
/*  font-size: 0.8rem;*/
/*  text-transform: uppercase;*/
/*  letter-spacing: 2.5px;*/
/*  font-weight: 500;*/
/*  color: #ffffff;*/
/*  background-color: #FF6B69;*/
/*  border: none;*/
/*  border-radius: 0.25rem;;*/
/*  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);*/
/*  transition: all 0.3s ease 0s;*/
/*  cursor: pointer;*/
/*  outline: none;*/
/*}*/


/*.signin-button:hover {*/
/*  background-color: #2EE59D;*/
/*  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);*/
/*  !*transform: translate(-7px);*!*/
/*}*/

.signin-button {
  padding: 10px 30px;
  font-size: 0.8rem;
  width: 300px;
  height: 45px;
  border: none;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  background: #ff006a;
  border-radius: 5px;
  min-width: 200px;
  color: #fff;
  z-index: 0;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.signin-button::before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: -50px;
  width: 70%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff71, transparent);
  transition: all 1s;
  z-index: -1;
}

.signin-button:hover {
  background: #3b3b3b;
}

.signin-button:hover::before {
  transform: translateX(300px) skew(-20deg);
}


.img-validation {
  border-radius: 25px;
}

#instagram {
  color: #A334A4;
}

/*.username-msg, .password-msg {*/
/*    font-size: 0.8rem;*/
/*    color: #fa0e0e;*/
/*    transition: .2s linear;*/
/*}*/


.username-msg, .password-msg {
  font-size: 0.78rem;
  color: #e55050;
  display: inline-block;
  font-weight: 100;
  height: 25px;
  transition: .2s linear;
}


.signin-status {
  display: inline-block;
  text-align: center;
  width: 100%;
  /*padding-top: 20px;*/
  font-size: 18px;
  color: #00db49;
  font-weight: 700;
  transition: .2s linear;
}

h4 {
  background: -webkit-linear-gradient(45deg, #00ff95, #09009f 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.icons img {
  width: 30px;
  height: 30px;
}

</style>