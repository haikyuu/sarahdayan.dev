<template>
  <generic-list class="-my-48 group" :items="items">
    <template v-slot:item="{ item: { node } }">
      <interview-card class="my-48" :interview="node" />
    </template>
  </generic-list>
</template>

<script>
import Vue from "vue";

import GenericList from "@/components/GenericList";
import InterviewCard from "@/components/InterviewCard";

export default Vue.extend({
  components: { GenericList, InterviewCard },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>
