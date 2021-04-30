<template>
  <div>
    <SearchBar />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ProductList from "@/components/ProductList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Component({
  components: {
    ProductList,
    SearchBar,
  },
})
export default class Home extends Vue {}
</script>
