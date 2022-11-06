<template>


  <section>
    <div class="container-newcoureses mx-auto">
      <div class="row-courses" dir="rtl">
        <div class="parent mx-auto">
          <div class="card-item" v-for="course in courses" :key="course.id">
            <div class="logo-of-course">
              <div v-html="course.image"></div>
            </div>
            <div class="name-course" dir="rtl">
              <h4 class="text-start">{{ course.name }}</h4>
            </div>
            <div class="clock text-start mt-5 mb-4 d-flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 35.517 35.517">
                  <path
                      d="M17.305,0h.905a17.716,17.716,0,0,1,6.854,1.577A17.8,17.8,0,0,1,35.517,17.245v.963A17.815,17.815,0,0,1,21.5,35.118a18.726,18.726,0,0,1-3.289.4h-.9A17.8,17.8,0,0,1,0,18.213v-.965A18.139,18.139,0,0,1,.862,12.29,17.827,17.827,0,0,1,17.305,0m-.427,2.395A15.387,15.387,0,1,0,24.09,3.733,15.366,15.366,0,0,0,16.878,2.395Z"
                      fill="#7e57c2"></path>
                  <path
                      d="M238.929,103.557a1.182,1.182,0,0,1,2.363,0c.006,2.979,0,5.959,0,8.938q2.736,2.193,5.475,4.383a1.182,1.182,0,0,1-1.456,1.861c-1.9-1.514-3.8-3.038-5.7-4.554a1.355,1.355,0,0,1-.691-1.12Q238.926,108.309,238.929,103.557Z"
                      transform="translate(-222.352 -95.301)" fill="#7e57c2"></path>
                </svg>
              </div>
              <div class="align-items-center ms-1">
                <span class="me-1" dir="rtl">{{ course.clock }}</span>
                <span>ساعت</span>
              </div>

            </div>
            <div class="price-person">
              <span class="css-person">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24.802 21.788"><g
                    transform="translate(0 -31.21)"><path
                    d="M12.082,31.27a.945.945,0,0,1,.743.036q5.732,2.146,11.465,4.285a.764.764,0,0,1,.512.667v.052a.764.764,0,0,1-.515.672q-1.944.73-3.891,1.453-.006,2.439,0,4.878a2.381,2.381,0,0,1-.19,1.062,3.382,3.382,0,0,1-1.341,1.381,10.239,10.239,0,0,1-3.546,1.2,18.542,18.542,0,0,1-5.2.093,11.006,11.006,0,0,1-4.147-1.27,3.348,3.348,0,0,1-1.4-1.459,2.218,2.218,0,0,1-.162-.863c0-1.673,0-3.345,0-5.018-.985-.364-1.968-.735-2.952-1.1q0,5.167,0,10.334a1.805,1.805,0,0,0,.141.545c.426,1.287.861,2.57,1.282,3.859a.728.728,0,0,1-.644.922.761.761,0,0,1-.782-.615.754.754,0,0,1-.773.614A.735.735,0,0,1,0,52.305V36.262A.79.79,0,0,1,.194,35.8a1.339,1.339,0,0,1,.564-.3q5.663-2.112,11.324-4.227M4.77,35.547a4.307,4.307,0,0,0,.461.012h6.882a1.267,1.267,0,0,1,.626.087.724.724,0,0,1-.336,1.365c-2.471,0-4.943,0-7.414,0-.075,0-.15.006-.225.012,2.549.938,5.09,1.9,7.636,2.846q4.767-1.782,9.535-3.563c0-.011,0-.032,0-.043Q17.171,34.48,12.4,32.7c-2.544.948-5.085,1.9-7.631,2.846m1.092,3.432q0,2.141,0,4.281a1.113,1.113,0,0,0,.077.555,2.018,2.018,0,0,0,.7.667,7.063,7.063,0,0,0,1.88.776,14.553,14.553,0,0,0,3.3.464,14.91,14.91,0,0,0,4.921-.6,5.594,5.594,0,0,0,1.718-.849,1.058,1.058,0,0,0,.481-.766q0-2.263,0-4.526L12.723,41.3a.873.873,0,0,1-.643,0Q8.97,40.142,5.862,38.979Z"
                    fill="#5e81d1"></path></g></svg>
                <span class="ms-2 fw-semibold">{{ course.person }}  نفر</span>
              </span>
              <div v-if="course.price > 1" class="price-courses fw-semibold">{{ course.price }} تومان</div>
              <div v-else class="price-courses fw-bold">رایگان</div>
            </div>
            <hr class="divider-middle">
            <div class="login-showcours">
              <div>
                <button @click="addToCartAction(course)">ثبت نام</button>
              </div>
              <div class="show-course">

                <span><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 20.884 27.105">
                  <path d="M9.358,6.463a5,5,0,0,1,8.388,0l4.347,6.7A5,5,0,0,1,17.9,20.884H9.205a5,5,0,0,1-4.194-7.722Z"
                        transform="translate(0 27.105) rotate(-90)" fill="#7e57c2"></path>
                </svg></span>
                <a :href="course.showCourse" class="me-2">مشاهده دوره</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import {computed} from "vue";
import {useTitle} from '@vueuse/core';
import {useStore} from "vuex";

export default {
  name: "CoursesPage",
  setup() {
    const title = useTitle();
    title.value = 'دوره های آموزش برنامه نویسی | پروژه محور | پشتیبانی دائمی | بوتواستارت';


    const store = useStore();
    const courses = computed(() => store.getters["courses/allCourses"]);

    function addToCartAction(course) {
      store.dispatch("cart/addToCart", course)
    }

    return {courses, addToCartAction}
  }

}
</script>

<style>

section {
  margin: 5rem 0;
}

.container-newcoureses {
  max-width: 1200px;
  /*margin: auto;*/
  padding: 0 2rem;
}

.card-item {
  box-shadow: rgb(94 129 209 / 16%) 0px 8px 24px;
  border-radius: 15px;
  padding: 1rem;
}

.logo-of-course {
  text-align: start;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
}

.card-item h4 {
  font-weight: 800;
  font-size: 14px;
  height: 48px;
}

.row-courses, .more-item, .login-showcours {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
}

.second-section h2 {
  font-size: 28px;
  font-weight: bold;
}


.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}

.clock span {
  font-size: 13px;
  color: #7e57c2;;
}

.price-person {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 2rem;
}


.css-person {
  background-color: #E8EAF6;
  padding-top: 2.4px;
  padding-bottom: 2.4px;
  padding-left: 12px;
  padding-right: 9.6px;
  border-radius: 80px;
}


.css-person span {
  font-size: 13px;
  color: rgb(94, 129, 209);
}

.price-courses {
  line-height: 1.5;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.divider-middle {
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: thin;
  margin-left: 16px;
  margin-right: 16px;
}

.login-showcours {
  display: flex;
  flex-direction: unset;
  justify-content: space-between;
  align-items: center;
}

.login-showcours button {
  background-color: #7e57c2;
  color: #fff;
  padding: 6px 25px;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 13px;
  border: none;
  transition: all 250ms linear;
}

.login-showcours button:hover {
  background-color: rgb(87, 151, 91);
}


.name-course h4 {
  line-height: 1.7rem;
  margin-bottom: 1rem;
}

.show-course {
  display: flex;
  flex-direction: row-reverse;
}

.show-course a {
  text-decoration: none;
  color: #7e57c2;;
  font-size: 16px;
}

.free-courses {
  display: flex;
}

.courses-tutorial {
  font-size: 28px;
}


/*check btn*/
@charset "UTF-8";
.toggler-wrapper {
  display: block;
  width: 55px;
  height: 30px;
  cursor: pointer;
  position: relative;
}

.toggler-wrapper input[type="checkbox"] {
  display: none;
}

.toggler-wrapper input[type="checkbox"]:checked + .toggler-slider {
  background-color: #BDA9DF;
}

.toggler-wrapper .toggler-slider {
  background-color: #CDCDCD;
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}


.toggler-wrapper.style-1 input[type="checkbox"]:checked + .toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
}

.toggler-wrapper.style-1 .toggler-knob {
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  border-radius: 50%;
  left: 5px;
  top: 5px;
  background-color: #fff;
}

@media (max-width: 1200px) {
  .parent {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .container-newcoureses {
    max-width: 860px;
  }


  .parent {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .jss6 p {
    font-size: 12px;
  }

  .parent {
    grid-template-columns: repeat(1, 1fr);
  }

  .card-item {
    width: 15rem;
  }

  .second-section {
    margin-top: 9rem;
  }

  .row-courses h2 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  .row-courses h4 {
    font-size: 1.3rem;
  }

  .name-course h4 {
    font-size: 0.9rem;
  }

  .card-item {
    width: 24rem;
  }
}
</style>