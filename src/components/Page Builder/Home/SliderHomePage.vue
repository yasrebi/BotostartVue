<template>
  <section>
    <div class="container text-center">
      <div class="row flex-column-reverse flex-lg-row align-items-center px-4">
        <div class="col col-lg-8">
          <div class="slider text-center">
            <div class="slider-contents">
              <div>
                <h4 class="MuiTypography-root MuiTypography-h5 css-1gs9o75">چرا برنامه نویسی رو انتخاب کردم؟</h4>
                <p dir="rtl">برای من برنامه نویسی خیلی ایده‌آل بود، شرایط کاری یکنواختی نداشت، باید با تکنولوژی های جدید
                  خودمو آپدیت
                  کنم، امکان کار به صورت ریموت (دورکاری) رو داره و برای منی‌ که شهرستان هستم عالی بود. و در نهایت واقعا
                  از
                  خلق کردن یک محصول و دیدن نتیجه نهایی لذت میبرم.</p>
              </div>
              <div>
                <h4 class="MuiTypography-root MuiTypography-h5 css-1gs9o75">از برنامه نویسی راضی هستم؟</h4>
                <p dir="rtl">هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده مستثنی‌نیست اما در کل از
                  انتخابم
                  واقعا
                  راضیم. برنامه نویسی من رو وارد مسیری کرد که خیلی از محدودیت هارو برداشت و تونستم کار های مفیدی انجام
                  بدم،
                  انجام دادن کار های مفید که به نفع مردم هست همیشه بهترین حس رو به آدم میده.</p>
              </div>
              <div>
                <h4 class="MuiTypography-root MuiTypography-h5 css-1gs9o75">چرا برنامه نویس شدم؟</h4>
                <p dir="rtl" class="MuiTypography-root MuiTypography-p css-qolkec">سلام، من میلادم. سال ۹۴ رشته نفت قبول
                  شدم و به
                  هوای
                  اینکه قراره آینده شغلی و مالی خوبی داشته باشم رفتم دانشگاه ولی همون ترم اول متوجه شدم که همه چی دقیقا
                  برعکس تصوراتم بوده و اصلا اون چیزی نیست که فکرشو میکردم و همین جرقه‌ای شد که دنبال یک مهارت دیگه باشم
                  و
                  بعد از کلی تحقیق به برنامه نویسی رسیدم.</p>
              </div>
            </div>
            <div class="slider-arrows d-flex justify-content-center mt-5">
              <div @click="sliderRight" class="arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 37.826 26.11">
                  <path
                      d="M-1178.833-9320.346l-9.67-6.045a7,7,0,0,1,0-11.87l9.67-6.046a7,7,0,0,1,10.711,5.936v2.618h11.192a2.806,2.806,0,0,1,2.229,1.156,3.759,3.759,0,0,1,.734,2.269,3.755,3.755,0,0,1-.734,2.271,2.8,2.8,0,0,1-2.229,1.159h-11.192v2.615a7.01,7.01,0,0,1-7.017,7.013A6.931,6.931,0,0,1-1178.833-9320.346Z"
                      transform="translate(1191.793 9345.381)" fill="#7e57c2"></path>
                </svg>
              </div>
              <div @click="sliderLeft" class="arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 37.825 26.11">
                  <path
                      d="M12.961,25.035,3.29,18.992a7,7,0,0,1,0-11.872l9.671-6.044a7,7,0,0,1,10.71,5.936V9.629H34.861a2.806,2.806,0,0,1,2.229,1.157,3.875,3.875,0,0,1,0,4.54,2.806,2.806,0,0,1-2.229,1.157H23.671V19.1a7.008,7.008,0,0,1-7.015,7.011A6.929,6.929,0,0,1,12.961,25.035Z"
                      transform="translate(37.825 26.111) rotate(180)" fill="#7e57c2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-lg-4 p-5 p-lg-0">
          <div><img :src="miladPic" class="img-fluid" alt="میلاد عظمی"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {ref} from "vue";

export default {
  name: "SliderHomePage",
  setup() {
    const miladPic = ref(require("@/assets/img/home-page/milad.webp"));

    return {miladPic}
  },
}
</script>

<style scoped>


.slider-contents {
  position: relative;
  width: 500px;
  height: 280px;
}

.slider-contents div {
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 280px;
  position: absolute;
  border-radius: 15px;
  transition: all 0.5s ease-in 0s;
  box-shadow: rgb(126 87 194 / 16%) 0px 4px 12px;
  padding: 1rem;
}

.slider-contents div:nth-child(1) {
  z-index: 1;
  transform: rotate(10deg);
  animation: 0.5s ease 0s 1 normal forwards
}

.slider-contents div:nth-child(2) {
  z-index: 3;
  transform: rotate(360deg);
  animation: 0.5s ease 0s 1 normal forwards
}

.slider-contents div:nth-child(3) {
  z-index: 1;
  transform: rotate(5deg);
  animation: 0.5s ease 0s 1 normal forwards
}


.slider h4 {
  line-height: 1.334;
  font-weight: bold;
  color: #7e57c2;
  text-align: right;
  padding: 1rem 1rem 0 0;
}

.slider p {
  margin: 0;
  line-height: 2.2rem;
  text-align: justify;
  padding: 1.5rem 1rem 0;
}

.slider-arrows {
  display: flex;
  /*justify-content: center;*/
  margin-top: 2rem;
}


.arrow-left {
  margin-left: 15px;
}

.slider-arrows svg {
  color: rgb(126, 87, 194);
}

.MuiGrid-root {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>