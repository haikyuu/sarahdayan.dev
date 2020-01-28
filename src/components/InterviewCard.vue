<template>
  <article itemscope itemtype="http://schema.org/CreativeWork">
    <a
      class="flex md:items-center group-hover:opacity-50 hover:opacity-important transition group-2"
      :href="interview.link"
      target="_blank"
      rel="noopener"
    >
      <div
        class="flex items-center justify-center flex-none mr-24 rounded-full md:mr-40 w-80 h-80 md:w-120 md:h-120 bg-dusk text-zenith group-2-hover:scale-11/10x transition"
      >
        <component
          :is="getIcon(interview.type)"
          aria-hidden="true"
          :class="{ 'ml-4': interview.type === 'video' }"
          class="h-24 stroke-current md:h-32"
        />
      </div>
      <div>
        <h2
          class="text-lg font-semibold leading-snug md:leading-tight text-zenith"
          itemprop="name"
        >
          {{ interview.title }}
        </h2>
        <p class="mt-8 mb-2">
          <span itemprop="publisher">{{ interview.platform }}</span> — with
          <span itemprop="author">
            {{ merge(interview.hosts, interview.guests).join(", ") }}
          </span>
        </p>
        <time
          class="inline-block mt-8 text-xs font-bold tracking-widest uppercase text-zenith"
          itemprop="datePublished"
          :datetime="interview.time"
          :content="interview.time"
          >{{ formattedDate(interview.date) }}
        </time>
      </div>
    </a>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { formattedDate } from "@/utils/date";
import mergeArrays from "@/utils/mergeArrays";

import PlayIcon from "@/assets/icons/play.svg?inline";
import QuillIcon from "@/assets/icons/quill.svg?inline";
import VolumeIcon from "@/assets/icons/volume.svg?inline";

enum Icon {
  Video = "video",
  Podcast = "podcast",
  Blog = "blog"
}

type Interview = {
  link: string;
  type: Icon;
  title: string;
  platform: string;
  hosts: string[];
  guests: string[];
  date: string;
};

export default Vue.extend({
  components: { PlayIcon, QuillIcon, VolumeIcon },
  props: {
    interview: {
      type: Object as PropType<Interview>,
      required: true
    }
  },
  methods: {
    formattedDate,
    getIcon(slug: Icon) {
      const icons = {
        blog: QuillIcon,
        podcast: VolumeIcon,
        video: PlayIcon
      };

      return icons[slug];
    },
    merge: mergeArrays
  }
});
</script>
