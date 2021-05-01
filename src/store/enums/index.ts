/**
 * Enum storing the namespacing for Vuex Store Modules.
 */
export enum Namespace {
  PRODUCT = "product",
}

/**
 * Getters, Actions, Mutations that are permitted within Product Module in Vuex Store.
 */
export enum Product {
  getProductsList = "getProductsList",
  getFilteredProductsList = "getFilteredProductsList",
  getProductById = "getProductById",
  filterProducts = "filterProducts",
  clearSearch = "clearSearch",
}
