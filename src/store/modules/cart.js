import Swal from "sweetalert2";

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    },
    getters: {
        count(state) {
            return state.cart.length
        },
        allItems(state) {
            return state.cart
        },
        totalAmount(state) {
            return state.cart.reduce((total, course) => {
                return total + course.price * course.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, course) {
            const item = state.cart.find(p => p.id == course.id)
            if (!item) {
                state.cart.push({
                    ...course,
                    quantity: 1
                })
            } else {
                item.quantity++
            }


            // console.log(state.cart);

            updateLocalStorage(state.cart);
        },
        remove(state, id) {
            state.cart = state.cart.filter(cart => cart.id !== id)
            updateLocalStorage(state.cart);
        },
        clear(state) {
            state.cart = []
            updateLocalStorage(state.cart);
        }
    },
    actions: {
        addToCart({commit}, course) {
            try {
                console.log(course, commit);
                commit('add', course);

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
        },
        remove({commit}, id) {
            commit('remove', id);

            Swal.fire({
                title: 'دوره در داخل سبد خرید حذف شد',
                icon: 'success',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },
        clearAllCart({commit}) {
            commit('clear');

            Swal.fire({
                title: '! کل سبد خرید حذف شد',
                icon: 'warning',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        },

    }
};
export default cart;