<template>
  <ul class="flex -mx-32 text-zenith">
    <li v-for="({ link, label, icon }, id) in links" :key="id" class="mx-32">
      <a class="flex items-center" :href="link" rel="noopener" target="_blank">
        <component
          :is="icon"
          aria-hidden="true"
          class="w-16 h-16 mr-16 fill-current"
        />
        <span class="mt-px">{{ label }}</span>
        <div class="w-16 p-2 ml-8">
          <external-link-icon
            aria-hidden="true"
            class="flex-none stroke-current"
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

import ExternalLinkIcon from "@/assets/icons/external-link.svg?inline";
import TwitterIcon from "@/assets/icons/twitter.svg?inline";
import GithubIcon from "@/assets/icons/github.svg?inline";

export default Vue.extend({
  components: { ExternalLinkIcon },
  data() {
    return {
      links: [
        {
          label: "Twitter",
          link: "https://twitter.com/frontstuff_io",
          icon: TwitterIcon
        },
        {
          label: "GitHub",
          link: "https://github.com/sarahdayan/",
          icon: GithubIcon
        }
      ]
    };
  }
});
</script>
