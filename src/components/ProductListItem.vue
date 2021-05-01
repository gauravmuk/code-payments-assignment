<template>
  <div class="product-list-item">
    <img
      :src="productData.logoLocation"
      loading="lazy"
      :alt="productData.name"
    />
    <h3 v-html="productData.name"></h3>
  </div>
</template>

<script lang="ts">
import { IProduct } from "@/interfaces/Product";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * Component to render each product list item
 */
@Component
export default class ProductListItem extends Vue {
  @Prop({ required: true })
  productData!: IProduct;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$product-list-item-margin: 20px;
$product-list-item-border-width: 1px;
$product-list-item-width-adjustment: (
    $product-list-item-margin + $product-list-item-border-width
  ) * 2;

.product-list-item {
  display: flex;
  flex-direction: column;
  border: $product-list-item-border-width solid lightgray;
  margin: $product-list-item-margin;
  width: calc(50% - #{$product-list-item-width-adjustment});
}
</style>
