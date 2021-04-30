<template>
  <div class="product-detail-container">
    <img :src="productData.logoLocation" loading="lazy" />
    <h1 v-html="productData.name"></h1>
    <h2 v-html="productData.productTitle"></h2>
    <span class="shrink-width" v-html="productData.shortDescription"></span>
    <h3 v-html="productData.productTagline"></h3>
    <span class="shrink-width" v-html="productData.longDescription"></span>
  </div>
</template>

<script lang="ts">
import { Product } from "@/interfaces/Product";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["getProductById"]),
  },
})
export default class ProductDetails extends Vue {
  getProductById!: (id: number) => Product;

  get productData(): Product {
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
