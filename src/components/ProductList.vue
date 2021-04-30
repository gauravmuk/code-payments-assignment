<template>
  <div class="product-list">
    <ProductListItem
      :product-data="product"
      v-for="product in products"
      :key="product.id"
      v-on:click.native="onItemClick(product)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import router from "@/router";
import ProductListItem from "@/components/ProductListItem.vue";
import { Product } from "@/interfaces/Product";

@Component({
  components: {
    ProductListItem,
  },
  computed: mapGetters({ products: "getFilteredProductsList" }),
})
export default class ProductList extends Vue {
  products!: Array<Product>;

  onItemClick(product: Product): void {
    router.push({
      name: "product.details",
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
