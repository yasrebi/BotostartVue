import Swal from "sweetalert2";


function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartProducts = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    },
    getters: {},
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id);
            if (item) {
                item.quantity++
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1,
                })
            }
            console.log(state.cart);

            updateLocalStorage(state.cart);

        },
    },
    actions: {
        addToCart({commit}, product) {
            try {
                // console.log(product, commit);
                commit('add', product)

                Swal.fire({
                    title: 'دوره به سبد خرید افزوده شد',
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
            } catch (error) {
                Swal.fire({
                    title: 'مشکلی پیش آمد. مجددا امتحان کنید',
                    icon: 'error',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                });
            }
        }
    }
}

export default cartProducts;