<template>
  <input
    class="input-box"
    type="text"
    v-model="keyword"
    @input="onSearch"
    placeholder="Search By Game's Name"
  />
</template>

<script lang="ts">
import { Namespace, Product } from "@/store/enums";
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

/**
 * Search bar component which filters the product list
 */
@Component({
  computed: {
    ...mapActions([
      `${Namespace.PRODUCT}/${Product.filterProducts}`,
      `${Namespace.PRODUCT}/${Product.clearSearch}`,
    ]),
  },
})
export default class SearchBar extends Vue {
  private keyword: string | number = "";

  onSearch(): void {
    this.$store.dispatch({
      type: `${Namespace.PRODUCT}/${Product.filterProducts}`,
      keyword: this.keyword,
    });
  }

  destroyed(): void {
    this.$store.dispatch({
      type: `${Namespace.PRODUCT}/${Product.clearSearch}`,
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-box {
  height: 30px;
  width: 200px;
  border: 2px solid grey;
  border-radius: 12px;
  outline: none;
}
</style>
