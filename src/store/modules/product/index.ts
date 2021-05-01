import { Module } from "vuex";
import { IProduct } from "@/interfaces/Product";
import productsJson from "@/assets/products.json";
import { Product } from "@/store/enums";

interface IProductState {
  products: Array<IProduct>;
  filteredProducts: Array<IProduct>;
}

export const product: Module<IProductState, unknown> = {
  namespaced: true,
  state: {
    products: productsJson.products as Array<IProduct>,
    filteredProducts: productsJson.products as Array<IProduct>,
  },
  getters: {
    [Product.getProductsList](state): Array<IProduct> {
      return state.products;
    },
    [Product.getFilteredProductsList](state): Array<IProduct> {
      return state.filteredProducts;
    },
    [Product.getProductById]: (state) => (id: number) => {
      return state.products.find((product: IProduct) => product.id === id);
    },
  },
  mutations: {
    [Product.filterProducts](state, keyword) {
      state.filteredProducts = state.products.filter(
        (product: IProduct) =>
          product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    },
    [Product.clearSearch](state) {
      state.filteredProducts = state.products;
    },
  },
  actions: {
    [Product.filterProducts]({ commit }, { keyword }) {
      commit(`${Product.filterProducts}`, keyword);
    },
    [Product.clearSearch]({ commit }) {
      commit(`${Product.clearSearch}`);
    },
  },
  modules: {},
};
