<template>
  <div class="product-list" v-if="products.length">
    <ProductListItem
      :product-data="product"
      v-for="product in products"
      :key="product.id"
      v-on:click.native="onItemClick(product)"
    />
  </div>
  <div v-else>Unable to retrieve products list right now :(</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import router from "@/router";
import ProductListItem from "@/components/ProductListItem.vue";
import { IProduct } from "@/interfaces/Product";
import { Namespace, Product } from "@/store/enums";
import { ProductRoute } from "@/router/enums";

/**
 * Component which displays the list of products
 */
@Component({
  components: {
    ProductListItem,
  },
  computed: mapGetters({
    products: `${Namespace.PRODUCT}/${Product.getFilteredProductsList}`,
  }),
})
export default class ProductList extends Vue {
  products!: Array<IProduct>;

  /**
   * Navigate's to product details page.
   */
  onItemClick(product: IProduct): void {
    router.push({
      name: `${ProductRoute.DETAILS}`,
      params: { productId: String(product.id) },
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
