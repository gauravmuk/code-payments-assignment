import { Module } from "vuex";
import { IProduct } from "@/interfaces/Product";
import productsJson from "@/assets/products.json";
import { Product } from "@/store/enums";

/**
 * Interface for Product State
 */
interface IProductState {
  products: Array<IProduct>;
  filteredProducts: Array<IProduct>;
}

export const product: Module<IProductState, unknown> = {
  namespaced: true,
  state: {
    /**
     * Products is the original products json
     */
    products: productsJson.products as Array<IProduct>,
    /**
     * Filtered products is the sub-list which has been filtered using some condition on the products json
     */
    filteredProducts: productsJson.products as Array<IProduct>,
  },
  getters: {
    /**
     * Getter to get the list of original products.
     * @param state
     * @returns
     */
    [Product.getProductsList](state): Array<IProduct> {
      return state.products;
    },
    /**
     * Getter to get the list of filtered products.
     * @param state
     * @returns
     */
    [Product.getFilteredProductsList](state): Array<IProduct> {
      return state.filteredProducts;
    },
    /**
     * Getter to get the product by id.
     * @param state
     * @returns Product whose id is matched.
     */
    [Product.getProductById]: (state) => (id: number) => {
      return state.products.find((product: IProduct) => product.id === id);
    },
  },
  mutations: {
    /**
     * Mutation to filter products by the keyword.
     * @param state
     * @param keyword
     */
    [Product.filterProducts](state, keyword) {
      state.filteredProducts = state.products.filter(
        (product: IProduct) =>
          product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    },
    /**
     * Mutation to the state when clearing search. Filter products will refer to the original products array.
     * @param state
     */
    [Product.clearSearch](state) {
      state.filteredProducts = state.products;
    },
  },
  actions: {
    /**
     * Commits action to filter products by keyword.
     * @param param0 Vue's internal object exposing commit as property.
     * @param param1 Object when dispatching action from the component.
     */
    [Product.filterProducts]({ commit }, { keyword }) {
      commit(`${Product.filterProducts}`, keyword);
    },
    /**
     * Commits action to clear search on products.
     * @param param0 Vue's internal object exposing commit as property.
     */
    [Product.clearSearch]({ commit }) {
      commit(`${Product.clearSearch}`);
    },
  },
  modules: {},
};
