<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <div
      class="flex flex-col justify-between w-full h-full p-40 min-h-inherit bg-dusk group-hover:opacity-50 hover:scale-11/10x hover:opacity-important transition"
    >
      <header>
        <h3
          class="text-xs font-bold tracking-widest uppercase text-zenith"
          itemprop="name"
        >
          {{ talk.event }}
        </h3>
        <div class="flex flex-col mt-8">
          <p itemprop="location" itemscope itemtype="http://schema.org/Place">
            <span
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="addressLocality">
                {{ talk.location.city }}
              </span>
              —
              <span itemprop="addressCountry">{{ talk.location.country }}</span>
            </span>
          </p>
          <time
            class="inline-block"
            itemprop="startDate"
            :datetime="talk.date"
            :content="talk.date"
            >{{ formattedDate(talk.date) }}</time
          >
        </div>
      </header>
      <div class="flex flex-col mt-24">
        <h2
          class="text-lg font-semibold leading-tight text-zenith"
          itemprop="name"
        >
          {{ talk.title }}
        </h2>
        <footer v-if="talk.links.length" class="mt-16">
          <ul class="flex -mx-8">
            <li v-for="{ label, link } in talk.links" :key="label" class="mx-8">
              <a
                class="flex items-center mt-px text-zenith"
                :href="link"
                target="_blank"
                rel="noopener"
              >
                <span>{{ label }}</span>
                <span class="block w-16 p-2 ml-4 text-dawn">
                  <external-link-icon
                    aria-hidden="true"
                    class="flex-none stroke-current"
                  />
                </span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { formattedDate } from "@/utils/date";

import ExternalLinkIcon from "@/assets/icons/external-link.svg?inline";

type Talk = {
  event: string;
  location: {
    city: string;
    country: string;
  };
  date: string;
  title: string;
  links: {
    label: string;
    link: string;
  }[];
};

export default Vue.extend({
  components: { ExternalLinkIcon },
  props: {
    talk: {
      type: Object as PropType<Talk>,
      required: true
    }
  },
  methods: {
    formattedDate
  }
});
</script>
