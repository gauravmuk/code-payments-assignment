<template>
  <div class="product-detail-container" v-if="productData">
    <img
      :src="productData.logoLocation"
      loading="lazy"
      :alt="productData.name"
    />
    <h1 v-html="productData.name"></h1>
    <h2 v-html="productData.productTitle"></h2>
    <span class="shrink-width" v-html="productData.shortDescription"></span>
    <h3 v-html="productData.productTagline"></h3>
    <span class="shrink-width" v-html="productData.longDescription"></span>
  </div>
  <div v-else>No Product Found</div>
</template>

<script lang="ts">
import { IProduct } from "@/interfaces/Product";
import { Namespace, Product } from "@/store/enums";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

/**
 * Component which shows the details of a product.
 * Gets the data from the store for a specific product by id.
 */
@Component({
  computed: {
    ...mapGetters({
      getProductById: `${Namespace.PRODUCT}/${Product.getProductById}`,
    }),
  },
})
export default class ProductDetails extends Vue {
  getProductById!: (id: number) => IProduct;

  /**
   * Get product details by id from the store using getProductById getter in Product Module
   */
  get productData(): IProduct {
    return this.getProductById(Number(this.$route.params.productId));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.shrink-width {
  width: 80%;
}
</style>
