<template>
  <generic-list class="flex flex-wrap -my-4 md:-m-4 group" :items="items">
    <template v-slot:item="{ item: { node, key } }">
      <talk-card
        class="flex-none w-full my-4 md:m-4 md:w-240 md:min-h-240 lg:w-320 lg:min-h-320"
        :style="{
          transform:
            key % 2 === 0 && shouldParallax ? `translateY(-${scroll}px)` : ''
        }"
        :talk="node"
      />
    </template>
  </generic-list>
</template>

<script>
import Vue from "vue";

import { bus } from "@/main";
import { md } from "../../tailwind/breakpoints";

import TalkCard from "@/components/TalkCard";

import GenericList from "@/components/GenericList";

export default Vue.extend({
  components: { TalkCard, GenericList },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      scrollPosition: parseInt(window.scrollY),
      ticking: false,
      shouldParallax: false
    };
  },
  computed: {
    scroll() {
      return 0.05 * this.scrollPosition;
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);

    bus.$on("resize:window", size => {
      const isMediumScreen = size <= md;
      this.shouldParallax = !isMediumScreen;
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollPosition = parseInt(window.scrollY);
          this.ticking = false;
        });

        this.ticking = true;
      }
    }
  }
});
</script>
