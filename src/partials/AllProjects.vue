<template>
  <generic-list class="-my-8 group" :items="items">
    <template v-slot:item="{ item: { node } }">
      <project-card class="my-8" :project="node" />
    </template>
  </generic-list>
</template>

<script lang="ts">
import Vue from "vue";

import GenericList from "@/components/GenericList";
import ProjectCard from "@/components/ProjectCard";

export default Vue.extend({
  components: { GenericList, ProjectCard },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>
