import {createRouter, createWebHistory} from 'vue-router';

import HomePage from "@/components/Page Builder/HomePage.vue";

import TemplateUser from "@/components/Page Builder/Users/TemplateUser.vue";
import IndexUsersPage from "@/components/Page Builder/Users/IndexUsersPage.vue";
import ShowUser from "@/components/Page Builder/Users/ShowUser.vue";

import TemplatePost from "@/components/Page Builder/Posts/TemplatePost.vue";
import IndexPostsPage from "@/components/Page Builder/Posts/IndexPostsPage.vue";
import ShowPost from "@/components/Page Builder/Posts/ShowPost.vue";
import CreatePost from "@/components/Page Builder/Posts/CreatePost.vue";
import EditPost from "@/components/Page Builder/Posts/EditPost.vue";
import StudentComments from "@/components/Other/StudentComments.vue";

import NotFound from "@/components/Theme Builder/NotFound.vue";

import LoginPage from "@/components/Theme Builder/RegistrationLogin/LoginPage.vue";
import RegisterPage from "@/components/Theme Builder/RegistrationLogin/RegisterPage.vue";
import SigninLoginPage from "@/components/Page Builder/SigninLoginPage.vue";

import DashboardPage from "@/components/Page Builder/DashboardPage.vue";
import KarbarPage from "@/components/Other/KarbarPage.vue";
import AboutUs from "@/components/Page Builder/AboutUs.vue";

import CartPage from "@/components/Theme Builder/cart/CartPage.vue";
import TaskPage from "@/components/Page Builder/TaskPage.vue";
import CoursesIndex from "@/components/Page Builder/Courses/CoursesIndex.vue";
import TypeScript from "@/components/Page Builder/Courses/AllCourses/TypeScript.vue";
import NodeJS from "@/components/Page Builder/Courses/AllCourses/NodeJS.vue";
import ReactJs from "@/components/Page Builder/Courses/AllCourses/ReactJs.vue";
import JavaScript from "@/components/Page Builder/Courses/AllCourses/JavaScript.vue";
import HtmlCss from "@/components/Page Builder/Courses/AllCourses/HtmlCss.vue";
import SassCourse from "@/components/Page Builder/Courses/AllCourses/SassCourse.vue";
import GitHub from "@/components/Page Builder/Courses/AllCourses/GitHub.vue";
import MobileFirst from "@/components/Page Builder/Courses/AllCourses/MobileFirst.vue";
import TestProducts from "@/components/Other/TestProducts.vue";

const routes = [
    {path: '/', name: 'homePage', component: HomePage},
    {path: '/student-comments', name: 'studentComments', component: StudentComments},
    {
        path: '/users', name: 'usersTemplate', component: TemplateUser, children: [
            {path: '', name: 'users', component: IndexUsersPage},
            {path: ':id', name: 'userId', component: ShowUser},
        ]
    },
    {
        path: '/posts', name: 'postsTemplate', component: TemplatePost, children: [
            {path: '', name: 'posts', component: IndexPostsPage},
            {path: ':id', name: 'postId', component: ShowPost},
            {path: 'create', name: 'createPost', component: CreatePost},
            {path: 'edit/:id', name: 'editPost', component: EditPost},
        ]
    },
    {
        path: '/courses', name: 'courses', component: CoursesIndex, children: [
            {path: 'typescript', name: 'typeScript', component: TypeScript},
            {path: 'node-js', name: 'nodeJS', component: NodeJS},
            {path: 'react-js', name: 'reactJs', component: ReactJs},
            {path: 'javascript', name: 'javaScript', component: JavaScript},
            {path: 'html-css', name: 'htmlCss', component: HtmlCss},
            {path: 'sass', name: 'sass', component: SassCourse},
            {path: 'git', name: 'git', component: GitHub},
            {path: 'mobile-first', name: 'mobileFirst', component: MobileFirst},
        ]
    },


    {path: '/login', name: 'loginBotostart', component: LoginPage},
    {path: '/register', name: 'registerBotostart', component: RegisterPage},
    {path: '/loginCustom', name: 'signinLogin', component: SigninLoginPage},


    {path: '/aboutus', name: 'aboutUs', component: AboutUs},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    {path: '/dashboard', name: 'dashboard', component: DashboardPage},
    {path: '/karbar', name: 'karbar', component: KarbarPage},
    {path: '/cart', name: 'cart', component: CartPage},
    {path: '/tasks', name: 'taskPage', component: TaskPage},
    {path: '/test-products', name: 'testProducts', component: TestProducts},


];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;