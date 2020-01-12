<template>
  <div class="relative -my-2 group">
    <item
      v-for="item in items"
      :key="item.id"
      class="my-2 transition group-hover:opacity-50 hover:opacity-important hover:scale-11/10x"
    >
      <slot name="item" :item="item" />
    </item>
    <div class="fixed bottom-0 left-0 w-full h-20 gradient-y-transparent-woodsmoke" />
    <div class="fixed top-0 left-0 w-full h-20 gradient-y-woodsmoke-transparent" />
  </div>
</template>

<script>
import Vue from "vue";
import Item from "@/components/Item.vue";

export default Vue.extend({
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>
