<template>
  <ul class="flex -mx-32 text-zenith">
    <li v-for="({ link, label, icon }, id) in links" :key="id" class="mx-16">
      <a class="flex items-center" :href="link" rel="noopener" target="_blank">
        <component
          :is="icon"
          aria-hidden="true"
          class="w-32 h-32 mr-16 fill-current"
        />
        <span class="mt-px">{{ label }}</span>
      </a>
    </li>
  </ul>

</template>

<script lang="ts">
import Vue from "vue";

import ExternalLinkIcon from "@/assets/icons/external-link.svg?inline";
import TwitterIcon from "@/assets/icons/twitter.svg?inline";
import GithubIcon from "@/assets/icons/github.svg?inline";
import LinkedinIcon from "@/assets/icons/linkedin.svg?inline";

export default Vue.extend({
  components: { ExternalLinkIcon },
  data() {
    return {
      links: [
        {
          label: "",
          link: "https://twitter.com/kaskol10",
          icon: TwitterIcon
        },
        {
          label: "",
          link: "https://github.com/kaskol10",
          icon: GithubIcon
        },
        {
          label: "",
          link: "https://www.linkedin.com/in/ramiro-alvarez-fernandez-3b945b77/",
          icon: LinkedinIcon
        }
      ]
    };
  }
});
</script>
