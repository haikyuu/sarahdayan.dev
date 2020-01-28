<template>
  <article
    class="bg-dusk transition group-hover:opacity-50 hover:opacity-important hover:scale-11/10x"
    itemscope
    itemtype="http://schema.org/CreativeWork"
  >
    <a class="block p-40" :href="project.link" target="_blank" rel="noopener">
      <p class="text-xs font-bold tracking-widest uppercase text-zenith">
        {{ project.language }}
      </p>
      <h2
        class="mt-8 text-lg font-semibold leading-tight text-zenith"
        itemprop="name"
      >
        {{ capitalize(project.title) }}
      </h2>
      <p class="mt-8">{{ project.description }}</p>
      <div class="flex items-center mt-16">
        <div class="w-16 h-16 p-2 mr-4">
          <star-icon aria-hidden="true" class="w-full h-full -mt-px fill-current" />
        </div>
        <span class="mt-2 text-xs font-semibold leading-none tracking-wider">
          {{ formattedCount(project.stars) }}
          <span class="sr-only">stars</span>
        </span>
      </div>
    </a>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import capitalize from "@/utils/capitalize";
import { formattedCount } from "@/utils/count";

import StarIcon from "@/assets/icons/star.svg?inline";

type Project = {
  link: string;
  language: string;
  title: string;
  description: string;
  count: number;
};

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  },
  components: { StarIcon },
  methods: {
    formattedCount,
    capitalize
  }
});
</script>
