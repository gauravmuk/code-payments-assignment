import { Product } from "@/interfaces/Product";
import Vue from "vue";
import Vuex from "vuex";
import productsJson from "../assets/products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: productsJson.products,
    filteredProducts: productsJson.products,
  },
  getters: {
    getProductsList(state): Array<Product> {
      return state.products;
    },
    getFilteredProductsList(state): Array<Product> {
      return state.filteredProducts;
    },
    getProductById: (state) => (id: number) => {
      return state.products.find((product: Product) => product.id === id);
    },
  },
  mutations: {
    filterProducts(state, keyword) {
      state.filteredProducts = state.products.filter(
        (product) => product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    },
    clearSearch(state) {
      state.filteredProducts = state.products;
    },
  },
  actions: {},
  modules: {},
});
