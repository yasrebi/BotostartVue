import {createStore} from 'vuex';
import task from "@/store/modules/task.js";
import courses from "@/store/modules/courses.js";
import cart from "@/store/modules/cart.js";
import products from "@/store/modules/products.js";
import cartProducts from "@/store/modules/cartProducts.js";

const store = createStore({
    modules: {
        task,
        courses,
        cart,
        products,
        cartProducts
    }
});

export default store;