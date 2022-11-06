<template>
  <div class="container my-3" dir="rtl">
    <div class="row text-center g-3">
      <div v-for="product in products" :key="product.id" class="col-md-3">
        <div class="card p-3">
          <div v-html="product.image" class="mb-3"></div>
          <div class="card-body">
            <h6 class="card-title">{{ product.name }}</h6>
            <p class="card-text text-success my-3">{{ product.price }}</p>
            <button @click="addToCart(product)" class="btn btn-danger px-5 mt-3">خرید</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {useTitle} from "@vueuse/core";

export default  {
  name: "TestProducts",
  setup() {
    const title = useTitle();
    title.value = "محصولات";
    const store = useStore();
    const products = computed(() => store.getters["products/allProducts"]);

    function addToCart(product) {
      store.dispatch('cartProducts/addToCart', product)
    }

    return {products, addToCart}
  }
}
</script>

<style scoped>

</style>