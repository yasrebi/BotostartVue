<template>
  <header>
    <div class="MuiContainer-root mx-auto">
      <div class="MuiRow-root">
        <div class="logo-top">
          <router-link :to="{ name: 'homePage' }"><img :src="logoTop" alt="logo"/></router-link>
        </div>
        <div class="navbar-top">
          <nav>
            <ul>
              <li>
                <router-link class="list-nav" to="/">صفحه اصلی</router-link>
              </li>
              <li>
                <router-link class="list-nav" to="/courses"
                >دوره ها
                </router-link
                >
              </li>
              <li>
                <router-link class="list-nav" to="/student-comments"
                >نظرات دانشجویان
                </router-link
                >
              </li>
              <li class="show-more">
                <router-link class="list-nav" to="/users">کاربران</router-link>
              </li>
              <li>
                <router-link class="list-nav" :to="{ name: 'posts' }"
                >مقالات
                </router-link
                >
              </li>
              <li>
                <router-link class="list-nav" to="/aboutus">درباره ما</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="MuiBox-root" @click="menuModal = true">
          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true"
               viewBox="0 0 24 24" data-testid="MenuRoundedIcon">
            <path
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
          </svg>
        </div>
        <div class="hamburgermenu showhambergurmenu" v-show="menuModal">
          <div class="close-btn" @click="menuModal = false">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
                 viewBox="0 0 24 24" data-testid="CloseRoundedIcon">
              <path
                  d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
          </div>
          <hr/>
          <div dir="rtl" class="menu-modal">
            <ul>
              <li>
                <router-link to="/">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                  >
                    <path
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                  صفحه اصلی
                </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <router-link to="/courses">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-mortarboard-fill"
                      viewBox="0 0 16 16"
                  >
                    <path
                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"
                    />
                    <path
                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"
                    />
                  </svg>
                  دوره ها
                </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <router-link to="/student-comments">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-right-fill"
                      viewBox="0 0 16 16"
                  >
                    <path
                        d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
                    />
                  </svg>
                  نظرات دانشجویان
                </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <router-link to="/tasks">
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
                        <rect width="16" height="16" rx="5" transform="translate(29 6)" fill="#343434"
                              opacity="0.84"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#c)">
                        <rect width="9" height="9" rx="3" transform="translate(33 36)" fill="#343434"
                              opacity="0.7"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#e)">
                        <rect width="10" height="10" rx="3" transform="translate(9 54)" fill="#343434"
                              opacity="0.69"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#g)">
                        <rect width="6" height="6" rx="2" transform="translate(42 56)" fill="#343434"
                              opacity="0.39"></rect>
                      </g>
                    </g>
                  </svg>
                  تسک ها
                </router-link>
              </li>
            </ul>
            <ul>
              <li>
                <router-link to="/aboutus" href="#">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  درباره ما
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart-login-btns">
          <div class="cart-btn">
            <div>
              <router-link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" fill="#7e57c2" viewBox="0 0 24.661 24.019">
                  <g transform="translate(0.5 -5.528)">
                    <g transform="translate(0 6.028)">
                      <g transform="translate(0 0)">
                        <path
                            d="M99.122,350.322a2.469,2.469,0,1,0,2.469,2.469A2.469,2.469,0,0,0,99.122,350.322Zm0,3.841a1.372,1.372,0,1,1,1.372-1.372A1.372,1.372,0,0,1,99.122,354.163Z"
                            transform="translate(-91.577 -332.242)" fill="#7e57c2" stroke="#7e57c2"
                            stroke-width="1"></path>
                        <path
                            d="M297.653,350.322a2.469,2.469,0,1,0,2.469,2.469A2.469,2.469,0,0,0,297.653,350.322Zm0,3.841a1.372,1.372,0,1,1,1.372-1.372A1.372,1.372,0,0,1,297.653,354.163Z"
                            transform="translate(-279.683 -332.242)" fill="#7e57c2" stroke="#7e57c2"
                            stroke-width="1"></path>
                        <path
                            d="M23.54,9.7a.686.686,0,0,0-.439-.22L5.24,9.238,4.746,7.729a2.524,2.524,0,0,0-2.36-1.7H.549a.549.549,0,1,0,0,1.1H2.387a1.427,1.427,0,0,1,1.317.96L7.188,18.594l-.274.631a2.634,2.634,0,0,0,.247,2.387,2.552,2.552,0,0,0,2.058,1.152H19.891a.549.549,0,1,0,0-1.1H9.219a1.4,1.4,0,0,1-1.152-.658,1.509,1.509,0,0,1-.137-1.317l.22-.494L19.7,17.99a3.018,3.018,0,0,0,2.606-2.3l1.317-5.515A.466.466,0,0,0,23.54,9.7Zm-2.3,5.734a1.866,1.866,0,0,1-1.674,1.454L8.149,18.072,5.6,10.335l16.818.247Z"
                            transform="translate(0 -6.028)" fill="#7e57c2" stroke="#7e57c2" stroke-width="1"></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span v-if="countCartItems === 0" class="badge-cart d-none">{{ countCartItems }}</span>
                <span v-else class="badge-cart">{{ countCartItems }}</span>
              </router-link>
            </div>
          </div>
          <router-link class="login-router" to="/login">
            <div class="login-btn">
              <div>
                <span class="ms-2 login-span fw-light">ورود</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#7e57c2" viewBox="0 0 17.14 21.425">
                  <g id="_000000ff" data-name="#000000ff" transform="translate(-85.345 -42.66)">
                    <path id="Path_170" data-name="Path 170"
                          d="M130.627,42.712a3.487,3.487,0,0,1,.626-.052h8.489a3.209,3.209,0,0,1,3.214,2.778,5.762,5.762,0,0,1,.031.806V60.2a5.76,5.76,0,0,1-.1,1.443,3.231,3.231,0,0,1-2.3,2.332,5.637,5.637,0,0,1-1.5.106H131.2a3.22,3.22,0,0,1-3.212-3.179c0-1.071,0-2.142,0-3.213a1.071,1.071,0,1,1,2.141-.053c0,1.089,0,2.177,0,3.266a1.075,1.075,0,0,0,1.067,1.036q4.3,0,8.59,0a1.076,1.076,0,0,0,1.053-1.085q0-7.332,0-14.665a1.873,1.873,0,0,0-.07-.7,1.073,1.073,0,0,0-.984-.69q-4.294,0-8.588,0a1.074,1.074,0,0,0-1.068,1.04c0,.986,0,1.972,0,2.958a1.516,1.516,0,0,1-.118.773,1.07,1.07,0,0,1-2.023-.472q0-1.631,0-3.264a3.221,3.221,0,0,1,2.636-3.127Z"
                          transform="translate(-40.503 0)" fill="#7e57c2"></path>
                    <path id="Path_171" data-name="Path 171"
                          d="M93.612,170.98a1.072,1.072,0,0,1,1.057.253c1.042,1.033,2.071,2.08,3.118,3.108a1.107,1.107,0,0,1,.4,1.068,1.254,1.254,0,0,1-.475.731c-1.025,1.017-2.041,2.044-3.066,3.06a1.07,1.07,0,0,1-1.708-1.214,1.6,1.6,0,0,1,.4-.5c.407-.4.807-.814,1.218-1.213q-4.06.006-8.119,0a1.071,1.071,0,0,1-.362-2.085,1.634,1.634,0,0,1,.563-.058c2.639,0,5.279,0,7.918,0-.461-.448-.91-.908-1.367-1.361a1.071,1.071,0,0,1,.429-1.794Z"
                          transform="translate(0 -121.831)" fill="#7e57c2"></path>
                  </g>
                </svg>
              </div>
            </div>
          </router-link>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {computed, ref} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'HeaderWeb',
  setup() {
    const logoTop = ref(require('@/assets/img/header/logo-top.png'));
    let today = ref(new Date().toLocaleDateString('fa-IR'));
    let menuModal = ref(false);
    const store = useStore();
    const countCartItems = computed(() => store.getters['cart/count']);


    return {today, logoTop, menuModal, open, countCartItems};
  },
};
</script>

<style scoped>


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

/*.router-link-active {*/
/*  border-bottom: 2px solid #ffffff;*/
/*  padding-bottom: 3px;*/
/*}*/

header {
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #fcfcfc;
  box-shadow: none;
  position: sticky;
  top: 0;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 1000;
}

header .MuiContainer-root {
  width: 100%;
  padding: 0 6rem;
  margin: 0.5rem 0;
}

.MuiRow-root {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row-reverse;
  align-items: center;
}

.MuiBox-root {
  display: none;
}

.navbar-top ul {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  padding-top: 8px;
}

.navbar-top ul li {
  margin: 0 1.2rem;
}

.list-nav {
  text-decoration: none;
  color: #343434;
  transition: all ease 0.3s;
  font-weight: 500;
}

.list-nav:hover {
  color: #7e57c2;
}

.cart-login-btns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}

.login-span {
  color: rgb(126, 87, 194);
}

.cart-btn,
.login-btn {
  background: rgb(232, 234, 246);
  color: rgb(126, 87, 194);
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 15px;
  border-radius: 20px;
}
.login-btn{
  padding: 15px 30px;
}

.badge-cart {
  margin: 0px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  background-color: rgb(239, 57, 78);
  height: 17px;
  width: 17px;
  line-height: 17px;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 13px;
}

.showhambergurmenu {
  animation: fadeInDown 0.25s forwards;
}

.hamburgermenu {
  display: none;
}


/*.mouseenter-css {*/
/*  animation: showUp 0.35s 1;*/
/*  display: block;*/
/*}*/

/*.mouseleave-css {*/
/*  display: none;*/
/*}*/

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateX(110%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1200px) {
  header {
    width: auto;
  }
}

@media (max-width: 992px) {
  header {
    width: auto;
  }

  .logo-top,
  .navbar-top {
    display: none;
  }

  header .MuiContainer-root {
    padding: 0 2.5rem;
  }

  .MuiBox-root {
    display: block;
  }

  /*.MuiRow-root {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*  max-width: 990px;*/
  /*}*/
  .MuiBox-root svg {
    width: 35px;
    height: 35px;
    color: #000;
  }

  .cart-btn,
  .login-btn {
    padding: 9px;
    border-radius: 15px;
  }


  /*.uiIconButton-root {*/
  /*  transition: all 0.2s linear;*/
  /*  padding: 0;*/
  /*  margin: 0;*/
  /*  display: inline-flex;*/
  /*}*/
  /*.uiIconButton-root:hover {*/
  /*  background: #f7f7f7;*/
  /*  padding: 8px;*/
  /*  border-radius: 50px;*/
  /*}*/
  .hamburgermenu {
    border-left: 1px solid #eeeeee;
    width: 43%;
    transform: translateX(100%);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1 0 auto;
    z-index: 1200;
    position: fixed;
    top: 0px;
    outline: 0px;
    right: 0px;
  }

  .close-btn {
    padding: 0.5rem 0.8rem;
  }

  .close-btn svg {
    width: 22px;
    height: 22px;
  }


  .menu-modal {
    padding: 0.7rem 0.8rem;
  }

  .menu-modal ul li {
    margin: 1.2rem 0;
  }

  .menu-modal ul li a {
    color: #000000;
    transition: all 0.3s linear;
  }

  .menu-modal ul li a:hover {
    color: #7e57c2;
  }

  .menu-modal ul li svg {
    margin-left: 0.3rem;
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 768px) {
  header {
    width: auto;
    /*padding: 8px 10px;*/
  }

  .badge-cart {
    margin: 0px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    background-color: rgb(239, 57, 78);
    height: 15px;
    width: 15px;
    line-height: 17px;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    top: 8px;
  }
}
</style>
