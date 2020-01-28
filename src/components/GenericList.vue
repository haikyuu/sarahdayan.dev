<template>
  <div>
    <template v-for="(item, key) in items">
      <slot name="item" :item="{ ...item, key }" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>
