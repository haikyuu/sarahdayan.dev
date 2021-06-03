<template>
  <div
    v-resize:debounce="onResize"
    class="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row"
  >
    <div
      class="static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0"
    >
      <div class="flex flex-col">
        <div>
          <h1
            class="text-2xl font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
          >
            Hello, I’m Ramiro Alvarez.
          </h1>
          <div class="leading-loose">
            <p class="mt-32">
              I’m a Senior DevOps Engineer currently working as Tech Lead of
              the Platform Engineering Team at
              <a
                class="underline text-zenith"
                href="https://www.empathy.co/"
                target="_blank"
                rel="noopener"
                >Empathy.co</a
              >. I mostly manage Kubernetes Clusters, CI/CD orchestration, Elasticsearch, MongoDB and try to break
              things on AWS, GCP and Azure.
              I'm a big fan of Anton Babenko and if I'm not online you can find me on Pagerduty.
            </p>
          </div>
        </div>
        <scroll-spy
          class="hidden mt-72 md:block"
          :active="active"
          :items="items"
        />
      </div>
      <div class="flex items-center justify-between mt-48 md:mt-72"> 
        <img class="mr-64" src="https://avatars.githubusercontent.com/u/33934998?v=4" alt="circle" style="width: 50px;height: 50px; border-radius: 50%;"></img>
        <social-links class="w-full" />
      </div>
    </div>
    <div
      class="static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0"
    >
      <slot />
    </div>
    <div
      class="fixed bottom-0 left-0 hidden w-full h-32 pointer-events-none md:block gradient-y-transparent-night"
    />
    <div
      class="fixed top-0 left-0 hidden w-full h-32 pointer-events-none md:block gradient-y-night-transparent"
    />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Vue from "vue";

import { bus } from "@/main";

import ScrollSpy from "@/partials/ScrollSpy";
import SocialLinks from "@/partials/SocialLinks";

export default Vue.extend({
  metaInfo: {
    bodyAttrs: {
      class: "bg-night overflow-x-hidden"
    }
  },
  components: {
    ScrollSpy,
    SocialLinks
  },
  data() {
    return {
      items: [
        { label: "Certifications", link: "#interviews" },
        { label: "Talks", link: "#talks" },
        { label: "Articles", link: "#projects" }
      ],
      active: 0
    };
  },
  created() {
    bus.$on("update:scrollspy", index => {
      this.active = index || 0;
    });
  },
  methods: {
    onResize({ offsetWidth }) {
      bus.$emit("resize:window", offsetWidth);
    }
  }
});
</script>
