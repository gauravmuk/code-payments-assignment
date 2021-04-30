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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {
  private keyword: string | number = "";

  onSearch(): void {
    this.$store.commit("filterProducts", this.keyword);
  }

  destroyed(): void {
    this.$store.commit("clearSearch");
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
